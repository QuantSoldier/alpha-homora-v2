// SPDX-License-Identifier: ISC

pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

import "../lib/HomoraMath.sol";
import "../interfaces/IBalancerPool.sol";
import "../interfaces/IWStakingRewards.sol";

import "./BasicSpell.sol";

contract BalancerSpellV1 is BasicSpell {
    using SafeMath for uint256;
    using HomoraMath for uint256;

    mapping(address => address[2]) pairs; // mapping from lp token to underlying token (only pairs)

    constructor(
        IBank _bank,
        address _werc20,
        address _weth
    ) public BasicSpell(_bank, _werc20, _weth) {}

    function getPair(address lp)
        public
        returns (address tokenA, address tokenB)
    {
        address[2] memory ulTokens = pairs[lp];
        tokenA = ulTokens[0];
        tokenB = ulTokens[1];
        if (tokenA == address(0) || tokenB == address(0)) {
            address[] memory tokens = IBalancerPool(lp).getFinalTokens();
            require(tokens.length == 2, "underlying tokens not 2");
            tokenA = tokens[0];
            tokenB = tokens[1];
            ensureApprove(tokenA, lp);
            ensureApprove(tokenB, lp);
        }
    }

    struct Amounts {
        uint256 amtAUser;
        uint256 amtBUser;
        uint256 amtLPUser;
        uint256 amtABorrow;
        uint256 amtBBorrow;
        uint256 amtLPBorrow;
        uint256 amtLPDesired;
    }

    function addLiquidityInternal(address lp, Amounts calldata amt) internal {
        (address tokenA, address tokenB) = getPair(lp);

        // 1. Get user input amounts
        doTransmitETH();
        doTransmit(tokenA, amt.amtAUser);
        doTransmit(tokenB, amt.amtBUser);
        doTransmit(lp, amt.amtLPUser);

        // 2. Borrow specified amounts
        doBorrow(tokenA, amt.amtABorrow);
        doBorrow(tokenB, amt.amtBBorrow);
        doBorrow(lp, amt.amtLPBorrow);

        // 3.1 Add Liquidity using equal value two side to minimize swap fee
        uint256[] memory maxAmountsIn = new uint256[](2);
        maxAmountsIn[0] = amt.amtAUser.add(amt.amtABorrow);
        maxAmountsIn[1] = amt.amtBUser.add(amt.amtBBorrow);
        uint256 totalLPSupply = IBalancerPool(lp).totalSupply();
        uint256 poolAmountFromA =
            maxAmountsIn[0]
                .mul(1e18)
                .div(IBalancerPool(lp).getBalance(tokenA))
                .mul(totalLPSupply)
                .div(1e18); // compute in reverse order of how Balancer's `joinPool` computes tokenAmountIn
        uint256 poolAmountFromB =
            maxAmountsIn[1]
                .mul(1e18)
                .div(IBalancerPool(lp).getBalance(tokenB))
                .mul(totalLPSupply)
                .div(1e18); // compute in reverse order of how Balancer's `joinPool` computes tokenAmountIn

        uint256 poolAmountOut =
            poolAmountFromA > poolAmountFromB
                ? poolAmountFromB
                : poolAmountFromA;
        if (poolAmountOut > 0)
            IBalancerPool(lp).joinPool(poolAmountOut, maxAmountsIn);

        // 3.2 Add Liquidity leftover for each token
        uint256 ABal = IERC20(tokenA).balanceOf(address(this));
        uint256 BBal = IERC20(tokenB).balanceOf(address(this));
        if (ABal > 0) IBalancerPool(lp).joinswapExternAmountIn(tokenA, ABal, 0);
        if (BBal > 0) IBalancerPool(lp).joinswapExternAmountIn(tokenB, BBal, 0);

        // 4. Slippage control
        uint256 lpBalance = IERC20(lp).balanceOf(address(this));
        require(lpBalance >= amt.amtLPDesired, "lp desired not met");
    }

    /// @dev Add liquidity to Balancer pool (with 2 underlying tokens)
    function addLiquidityWERC20(address lp, Amounts calldata amt)
        external
        payable
    {
        // 1-4. add liquidity
        addLiquidityInternal(lp, amt);

        // 5. Put collateral
        doPutCollateral(lp, IERC20(lp).balanceOf(address(this)));

        // 6. Refund leftovers to users
        (address tokenA, address tokenB) = getPair(lp);
        doRefundETH();
        doRefund(tokenA);
        doRefund(tokenB);
    }

    /// @dev Add liquidity to Balancer pool (with 2 underlying tokens)
    function addLiquidityWStakingRewards(
        address lp,
        Amounts calldata amt,
        address wstaking
    ) external payable {
        // 1-4. add liquidity
        addLiquidityInternal(lp, amt);

        // 5. Take out collateral
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

        // 6. Put collateral
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

        // 7. Refund leftovers to users
        (address tokenA, address tokenB) = getPair(lp);
        doRefundETH();
        doRefund(tokenA);
        doRefund(tokenB);

        // 8. Refund reward
        doRefund(IWStakingRewards(wstaking).reward());
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

    function removeLiquidityInternal(address lp, RepayAmounts calldata amt)
        internal
    {
        (address tokenA, address tokenB) = getPair(lp);
        uint256 amtARepay = amt.amtARepay;
        uint256 amtBRepay = amt.amtBRepay;
        uint256 amtLPRepay = amt.amtLPRepay;

        // 2. Compute repay amount if MAX_INT is supplied (max debt)
        {
            uint256 positionId = bank.POSITION_ID();
            if (amtARepay == uint256(-1)) {
                amtARepay = bank.borrowBalanceCurrent(positionId, tokenA);
            }
            if (amtBRepay == uint256(-1)) {
                amtBRepay = bank.borrowBalanceCurrent(positionId, tokenB);
            }
            if (amtLPRepay == uint256(-1)) {
                amtLPRepay = bank.borrowBalanceCurrent(positionId, lp);
            }
        }

        // 3.1 Remove liquidity 2 sides
        uint256 amtLPToRemove =
            IERC20(lp).balanceOf(address(this)).sub(amt.amtLPWithdraw);

        uint256[] memory minAmountsOut = new uint256[](2);
        IBalancerPool(lp).exitPool(amtLPToRemove, minAmountsOut);

        // 3.2 Minimize trading
        uint256 amtADesired = amtARepay.add(amt.amtAMin);
        uint256 amtBDesired = amtBRepay.add(amt.amtBMin);

        uint256 amtA = IERC20(tokenA).balanceOf(address(this));
        uint256 amtB = IERC20(tokenB).balanceOf(address(this));

        if (amtA < amtADesired && amtB >= amtBDesired) {
            IBalancerPool(lp).swapExactAmountOut(
                tokenB,
                amtB.sub(amtBDesired),
                tokenA,
                amtADesired.sub(amtA),
                uint256(-1)
            );
        } else if (amtA >= amtADesired && amtB < amtBDesired) {
            IBalancerPool(lp).swapExactAmountOut(
                tokenA,
                amtA.sub(amtADesired),
                tokenB,
                amtBDesired.sub(amtB),
                uint256(-1)
            );
        }

        // 4. Repay
        doRepay(tokenA, amtARepay);
        doRepay(tokenB, amtBRepay);
        doRepay(lp, amtLPRepay);

        // 5. Slippage control
        require(IERC20(tokenA).balanceOf(address(this)) >= amt.amtAMin);
        require(IERC20(tokenB).balanceOf(address(this)) >= amt.amtBMin);
        require(IERC20(lp).balanceOf(address(this)) >= amt.amtLPWithdraw);

        // 6. Refund leftover
        doRefundETH();
        doRefund(tokenA);
        doRefund(tokenB);
        doRefund(lp);
    }

    function removeLiquidityWERC20(address lp, RepayAmounts calldata amt)
        external
    {
        // 1. Take out collateral
        doTakeCollateral(lp, amt.amtLPTake);

        // 2-6. remove liquidity
        removeLiquidityInternal(lp, amt);
    }

    function removeLiquidityWStakingRewards(
        address lp,
        RepayAmounts calldata amt,
        address wstaking
    ) external {
        uint256 positionId = bank.POSITION_ID();
        (, address collToken, uint256 collId, ) =
            bank.getPositionInfo(positionId);

        // 1. Take out collateral
        require(
            IWStakingRewards(collToken).getUnderlyingToken(collId) == lp,
            "incorrect underlying"
        );
        bank.takeCollateral(wstaking, collId, amt.amtLPTake);
        IWStakingRewards(wstaking).burn(collId, amt.amtLPTake);

        // 2-6. remove liquidity
        removeLiquidityInternal(lp, amt);

        // 7. Refund reward
        doRefund(IWStakingRewards(wstaking).reward());
    }

    function harvestWStakingRewards(address wstaking) external {
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
        doRefund(IWStakingRewards(wstaking).reward());
    }
}
