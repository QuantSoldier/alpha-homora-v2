// SPDX-License-Identifier: ISC

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

import "../lib/HomoraMath.sol";
import "../interfaces/IERC20Wrapper.sol";
import "../interfaces/IMasterChef.sol";

contract WMasterChef is ERC1155("WMasterChef"), ReentrancyGuard, IERC20Wrapper {
    using SafeMath for uint256;
    using HomoraMath for uint256;
    using SafeERC20 for IERC20;

    IMasterChef public immutable chef;
    IERC20 public immutable sushi;

    constructor(IMasterChef _chef) public {
        chef = _chef;
        sushi = IERC20(_chef.sushi());
    }

    function encodeId(uint256 pid, uint256 sushiPerShare)
        public
        pure
        returns (uint256 id)
    {
        require(pid < (1 << 16), "bad pid");
        require(sushiPerShare < (1 << 240), "bad sushi per share");
        return (pid << 240) | sushiPerShare;
    }

    function decodeId(uint256 id)
        public
        pure
        returns (uint256 pid, uint256 sushiPerShare)
    {
        pid = id >> 240; // First 16 bits
        sushiPerShare = id & ((1 << 240) - 1); // Last 240 bits
    }

    /// @dev Return the underlying ERC-20 for the given ERC-1155 token id.
    function getUnderlyingToken(uint256 id)
        external
        view
        override
        returns (address)
    {
        (uint256 pid, ) = decodeId(id);
        (address lpToken, , , ) = chef.poolInfo(pid);
        return lpToken;
    }

    /// @dev Return the conversion rate from ERC-1155 to ERC-20, multiplied by 2**112.
    function getUnderlyingRate(uint256)
        external
        view
        override
        returns (uint256)
    {
        return 2**112;
    }

    /// @dev Mint ERC1155 token for the given pool id.
    /// @return The token id that got minted.
    function mint(uint256 pid, uint256 amount)
        external
        nonReentrant
        returns (uint256)
    {
        (address lpToken, , , ) = chef.poolInfo(pid);
        IERC20(lpToken).safeTransferFrom(msg.sender, address(this), amount);
        if (
            IERC20(lpToken).allowance(address(this), address(chef)) !=
            uint256(-1)
        ) {
            // We only need to do this once per pool, as LP token's allowance won't decrease if it's -1.
            IERC20(lpToken).approve(address(chef), uint256(-1));
        }
        chef.deposit(pid, amount);
        (, , , uint256 sushiPerShare) = chef.poolInfo(pid);
        uint256 id = encodeId(pid, sushiPerShare);
        _mint(msg.sender, id, amount, "");
        return id;
    }

    /// @dev Burn ERC1155 token to redeem LP ERC20 token back plus SUSHI rewards.
    /// @return The pool id that that you received LP token back.
    function burn(uint256 id, uint256 amount)
        external
        nonReentrant
        returns (uint256)
    {
        if (amount == uint256(-1)) {
            amount = balanceOf(msg.sender, id);
        }
        (uint256 pid, uint256 stSushiPerShare) = decodeId(id);
        _burn(msg.sender, id, amount);
        chef.withdraw(pid, amount);
        (address lpToken, , , uint256 enSushiPerShare) = chef.poolInfo(pid);
        IERC20(lpToken).safeTransfer(msg.sender, amount);
        uint256 stSushi = stSushiPerShare.mul(amount).divCeil(1e12);
        uint256 enSushi = enSushiPerShare.mul(amount).div(1e12);
        if (enSushi > stSushi) {
            sushi.safeTransfer(msg.sender, enSushi.sub(stSushi));
        }
        return pid;
    }

    /// @dev Burn ERC1155 token to redeem LP ERC20 token back without taking SUSHI rewards.
    /// @return The pool id that that you received LP token back.
    function emergencyBurn(uint256 id, uint256 amount)
        external
        nonReentrant
        returns (uint256)
    {
        (uint256 pid, ) = decodeId(id);
        _burn(msg.sender, id, amount);
        chef.withdraw(pid, amount);
        (address lpToken, , , ) = chef.poolInfo(pid);
        IERC20(lpToken).safeTransfer(msg.sender, amount);
        return pid;
    }
}
