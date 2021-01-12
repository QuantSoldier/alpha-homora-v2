// SPDX-License-Identifier: ISC

pragma solidity 0.6.12;

interface IMasterChef {
  function sushi() external view returns (address);

  function poolInfo(uint pid)
    external
    view
    returns (
      address lpToken,
      uint allocPoint,
      uint lastRewardBlock,
      uint accSushiPerShare
    );

  function userInfo(uint pid, address user)
    external
    view
    returns (
      uint amount,
      uint rewardDebt
    );

  function deposit(uint pid, uint amount) external;

  function withdraw(uint pid, uint amount) external;
}