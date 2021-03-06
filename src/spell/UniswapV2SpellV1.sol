// SPDX-License-Identifier: ISC

pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeMath} from "@openzeppelin/contracts/math/SafeMath.sol";
import {
    IUniswapV2Factory
} from "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";
import {
    IUniswapV2Pair
} from "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";
import {
    IUniswapV2Router02
} from "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

import "./BasicSpell.sol";
import "../lib/HomoraMath.sol";
import "../interfaces/IWStakingRewards.sol";

contract UniswapV2SpellV1 is BasicSpell {
    using SafeMath for uint256;
    using HomoraMath for uint256;

    IUniswapV2Factory public factory;
    IUniswapV2Router02 public router;

    mapping(address => mapping(address => address)) public pairs;

    constructor(
        IBank _bank,
        address _werc20,
        IUniswapV2Router02 _router
    ) public BasicSpell(_bank, _werc20, _router.WETH()) {
        router = _router;
        factory = IUniswapV2Factory(_router.factory());
    }

    function getPair(address tokenA, address tokenB) public returns (address) {
        address lp = pairs[tokenA][tokenB];
        if (lp == address(0)) {
            lp = factory.getPair(tokenA, tokenB);
            require(lp != address(0), "no lp token");
            ensureApprove(tokenA, address(router));
            ensureApprove(tokenB, address(router));
            ensureApprove(lp, address(router));
            pairs[tokenA][tokenB] = lp;
            pairs[tokenB][tokenA] = lp;
        }
        return lp;
    }

    /// @dev Compute optimal deposit amount
    /// @param amtA amount of token A desired to deposit
    /// @param amtB amount of token B desired to deposit
    /// @param resA amount of token A in reserve
    /// @param resB amount of token B in reserve
    function optimalDeposit(
        uint256 amtA,
        uint256 amtB,
        uint256 resA,
        uint256 resB
    ) internal pure returns (uint256 swapAmt, bool isReversed) {
        if (amtA.mul(resB) >= amtB.mul(resA)) {
            swapAmt = _optimalDepositA(amtA, amtB, resA, resB);
            isReversed = false;
        } else {
            swapAmt = _optimalDepositA(amtB, amtA, resB, resA);
            isReversed = true;
        }
    }

    /// @dev Compute optimal deposit amount helper.
    /// @param amtA amount of token A desired to deposit
    /// @param amtB amount of token B desired to deposit
    /// @param resA amount of token A in reserve
    /// @param resB amount of token B in reserve
    /// Formula: https://blog.alphafinance.io/byot/
    function _optimalDepositA(
        uint256 amtA,
        uint256 amtB,
        uint256 resA,
        uint256 resB
    ) internal pure returns (uint256) {
        require(amtA.mul(resB) >= amtB.mul(resA), "Reversed");
        uint256 a = 997;
        uint256 b = uint256(1997).mul(resA);
        uint256 _c = (amtA.mul(resB)).sub(amtB.mul(resA));
        uint256 c = _c.mul(1000).div(amtB.add(resB)).mul(resA);
        uint256 d = a.mul(c).mul(4);
        uint256 e = HomoraMath.sqrt(b.mul(b).add(d));
        uint256 numerator = e.sub(b);
        uint256 denominator = a.mul(2);
        return numerator.div(denominator);
    }

    struct Amounts {
        uint256 amtAUser;
        uint256 amtBUser;
        uint256 amtLPUser;
        uint256 amtABorrow;
        uint256 amtBBorrow;
        uint256 amtLPBorrow;
        uint256 amtAMin;
        uint256 amtBMin;
    }

    function addLiquidityInternal(
        address tokenA,
        address tokenB,
        Amounts calldata amt
    ) internal {
        address lp = getPair(tokenA, tokenB);

        // 1. Get user input amounts
        doTransmitETH();
        doTransmit(tokenA, amt.amtAUser);
        doTransmit(tokenB, amt.amtBUser);
        doTransmit(lp, amt.amtLPUser);

        // 2. Borrow specified amounts
        doBorrow(tokenA, amt.amtABorrow);
        doBorrow(tokenB, amt.amtBBorrow);
        doBorrow(lp, amt.amtLPBorrow);

        // 3. Calculate optimal swap amount
        uint256 swapAmt;
        bool isReversed;
        {
            uint256 amtA = IERC20(tokenA).balanceOf(address(this));
            uint256 amtB = IERC20(tokenB).balanceOf(address(this));
            uint256 resA;
            uint256 resB;
            if (IUniswapV2Pair(lp).token0() == tokenA) {
                (resA, resB, ) = IUniswapV2Pair(lp).getReserves();
            } else {
                (resB, resA, ) = IUniswapV2Pair(lp).getReserves();
            }
            (swapAmt, isReversed) = optimalDeposit(amtA, amtB, resA, resB);
        }

        // 4. Swap optimal amount
        {
            address[] memory path = new address[](2);
            (path[0], path[1]) = isReversed
                ? (tokenB, tokenA)
                : (tokenA, tokenB);
            router.swapExactTokensForTokens(
                swapAmt,
                0,
                path,
                address(this),
                now
            );
        }

        // 5. Add liquidity
        router.addLiquidity(
            tokenA,
            tokenB,
            IERC20(tokenA).balanceOf(address(this)),
            IERC20(tokenB).balanceOf(address(this)),
            amt.amtAMin,
            amt.amtBMin,
            address(this),
            now
        );
    }

    function addLiquidityWERC20(
        address tokenA,
        address tokenB,
        Amounts calldata amt
    ) external payable {
        address lp = getPair(tokenA, tokenB);
        // 1-5. add liquidity
        addLiquidityInternal(tokenA, tokenB, amt);

        // 6. Put collateral
        doPutCollateral(lp, IERC20(lp).balanceOf(address(this)));

        // 7. Refund leftovers to users
        doRefundETH();
        doRefund(tokenA);
        doRefund(tokenB);
    }

    function addLiquidityWStakingRewards(
        address tokenA,
        address tokenB,
        Amounts calldata amt,
        address wstaking
    ) external payable {
        address lp = getPair(tokenA, tokenB);
        address reward = IWStakingRewards(wstaking).reward();

        // 1-5. add liquidity
        addLiquidityInternal(tokenA, tokenB, amt);

        // 6. Take out collateral
        uint256 positionId = bank.POSITION_ID();
        (, address collToken, uint256 collId, uint256 collSize) =
            bank.getPositionInfo(positionId);
        if (collSize > 0) {
            require(
                IWStakingRewards(collToken).getUnderlyingToken(collId) == lp,
                "incorrect underlying"
            );
            bank.takeCollateral(wstaking, collId, collSize);
            IWStakingRewards(wstaking).burn(collId, collSize);
        }

        // 7. Put collateral
        ensureApprove(lp, wstaking);
        uint256 amount = IERC20(lp).balanceOf(address(this));
        uint256 id = IWStakingRewards(wstaking).mint(amount);
        if (
            !IWStakingRewards(wstaking).isApprovedForAll(
                address(this),
                address(bank)
            )
        ) {
            IWStakingRewards(wstaking).setApprovalForAll(address(bank), true);
        }
        bank.putCollateral(address(wstaking), id, amount);

        // 8. Refund leftovers to users
        doRefundETH();
        doRefund(tokenA);
        doRefund(tokenB);

        // 9. Refund reward
        doRefund(reward);
    }

    struct RepayAmounts {
        uint256 amtLPTake;
        uint256 amtLPWithdraw;
        uint256 amtARepay;
        uint256 amtBRepay;
        uint256 amtLPRepay;
        uint256 amtAMin;
        uint256 amtBMin;
    }

    function removeLiquidityInternal(
        address tokenA,
        address tokenB,
        RepayAmounts calldata amt
    ) internal {
        address lp = getPair(tokenA, tokenB);
        uint256 positionId = bank.POSITION_ID();

        uint256 amtARepay = amt.amtARepay;
        uint256 amtBRepay = amt.amtBRepay;
        uint256 amtLPRepay = amt.amtLPRepay;

        // 2. Compute repay amount if MAX_INT is supplied (max debt)
        if (amtARepay == uint256(-1)) {
            amtARepay = bank.borrowBalanceCurrent(positionId, tokenA);
        }
        if (amtBRepay == uint256(-1)) {
            amtBRepay = bank.borrowBalanceCurrent(positionId, tokenB);
        }
        if (amtLPRepay == uint256(-1)) {
            amtLPRepay = bank.borrowBalanceCurrent(positionId, lp);
        }

        // 3. Compute amount to actually remove
        uint256 amtLPToRemove =
            IERC20(lp).balanceOf(address(this)).sub(amt.amtLPWithdraw);

        // 4. Remove liquidity
        (uint256 amtA, uint256 amtB) =
            router.removeLiquidity(
                tokenA,
                tokenB,
                amtLPToRemove,
                0,
                0,
                address(this),
                now
            );

        // 5. MinimizeTrading
        uint256 amtADesired = amtARepay.add(amt.amtAMin);
        uint256 amtBDesired = amtBRepay.add(amt.amtBMin);

        if (amtA < amtADesired && amtB >= amtBDesired) {
            address[] memory path = new address[](2);
            (path[0], path[1]) = (tokenB, tokenA);
            router.swapTokensForExactTokens(
                amtADesired.sub(amtA),
                amtB.sub(amtBDesired),
                path,
                address(this),
                now
            );
        } else if (amtA >= amtADesired && amtB < amtBDesired) {
            address[] memory path = new address[](2);
            (path[0], path[1]) = (tokenA, tokenB);
            router.swapTokensForExactTokens(
                amtBDesired.sub(amtB),
                amtA.sub(amtADesired),
                path,
                address(this),
                now
            );
        }

        // 6. Repay
        doRepay(tokenA, amtARepay);
        doRepay(tokenB, amtBRepay);
        doRepay(lp, amtLPRepay);

        // 7. Slippage control
        require(IERC20(tokenA).balanceOf(address(this)) >= amt.amtAMin);
        require(IERC20(tokenB).balanceOf(address(this)) >= amt.amtBMin);
        require(IERC20(lp).balanceOf(address(this)) >= amt.amtLPWithdraw);

        // 8. Refund leftover
        doRefundETH();
        doRefund(tokenA);
        doRefund(tokenB);
        doRefund(lp);
    }

    function removeLiquidityWERC20(
        address tokenA,
        address tokenB,
        RepayAmounts calldata amt
    ) external {
        address lp = getPair(tokenA, tokenB);

        // 1. Take out collateral
        doTakeCollateral(lp, amt.amtLPTake);

        // 2-8. remove liquidity
        removeLiquidityInternal(tokenA, tokenB, amt);
    }

    function removeLiquidityWStakingRewards(
        address tokenA,
        address tokenB,
        RepayAmounts calldata amt,
        address wstaking
    ) external {
        address lp = getPair(tokenA, tokenB);
        uint256 positionId = bank.POSITION_ID();
        (, address collToken, uint256 collId, ) =
            bank.getPositionInfo(positionId);
        address reward = IWStakingRewards(wstaking).reward();

        // 1. Take out collateral
        require(
            IWStakingRewards(collToken).getUnderlyingToken(collId) == lp,
            "incorrect underlying"
        );
        bank.takeCollateral(wstaking, collId, amt.amtLPTake);
        IWStakingRewards(wstaking).burn(collId, amt.amtLPTake);

        // 2-8. remove liquidity
        removeLiquidityInternal(tokenA, tokenB, amt);

        // 9. Refund reward
        doRefund(reward);
    }

    function harvestWStakingRewards(address wstaking) external {
        address reward = IWStakingRewards(wstaking).reward();
        uint256 positionId = bank.POSITION_ID();
        (, , uint256 collId, ) = bank.getPositionInfo(positionId);
        address lp = IWStakingRewards(wstaking).getUnderlyingToken(collId);

        // 1. Take out collateral
        bank.takeCollateral(wstaking, collId, uint256(-1));
        IWStakingRewards(wstaking).burn(collId, uint256(-1));

        // 2. put collateral
        uint256 amount = IERC20(lp).balanceOf(address(this));
        ensureApprove(lp, wstaking);
        uint256 id = IWStakingRewards(wstaking).mint(amount);
        bank.putCollateral(wstaking, id, amount);

        // 3. Refund reward
        doRefund(reward);
    }
}
