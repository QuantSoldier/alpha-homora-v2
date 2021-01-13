// SPDX-License-Identifier: ISC

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

import "../lib/HomoraMath.sol";
import "../interfaces/IERC20Wrapper.sol";
import "../interfaces/IStakingRewards.sol";

contract WStakingRewards is
    ERC1155("WStakingRewards"),
    ReentrancyGuard,
    IERC20Wrapper
{
    using SafeMath for uint256;
    using HomoraMath for uint256;
    using SafeERC20 for IERC20;

    address public immutable staking;
    address public immutable underlying;
    address public immutable reward;

    constructor(
        address _staking,
        address _underlying,
        address _reward
    ) public {
        staking = _staking;
        underlying = _underlying;
        reward = _reward;
        IERC20(_underlying).approve(_staking, uint256(-1));
    }

    function getUnderlyingToken(uint256)
        external
        view
        override
        returns (address)
    {
        return underlying;
    }

    function getUnderlyingRate(uint256)
        external
        view
        override
        returns (uint256)
    {
        return 2**112;
    }

    function mint(uint256 amount) external nonReentrant returns (uint256) {
        IERC20(underlying).safeTransferFrom(msg.sender, address(this), amount);
        IStakingRewards(staking).stake(amount);
        uint256 rewardPerToken = IStakingRewards(staking).rewardPerToken();
        _mint(msg.sender, rewardPerToken, amount, "");
        return rewardPerToken;
    }

    function burn(uint256 id, uint256 amount)
        external
        nonReentrant
        returns (uint256)
    {
        if (amount == uint256(-1)) {
            amount = balanceOf(msg.sender, id);
        }
        _burn(msg.sender, id, amount);
        IStakingRewards(staking).withdraw(amount);
        IStakingRewards(staking).getReward();
        IERC20(underlying).safeTransfer(msg.sender, amount);
        uint256 stRewardPerToken = id;
        uint256 enRewardPerToken = IStakingRewards(staking).rewardPerToken();
        uint256 stReward = stRewardPerToken.mul(amount).divCeil(1e18);
        uint256 enReward = enRewardPerToken.mul(amount).div(1e18);
        if (enReward > stReward) {
            IERC20(reward).safeTransfer(msg.sender, enReward.sub(stReward));
        }
        return enRewardPerToken;
    }
}
