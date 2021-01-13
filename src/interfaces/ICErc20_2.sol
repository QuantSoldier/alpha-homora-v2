// SPDX-License-Identifier: ISC

pragma solidity 0.6.12;

interface ICErc20_2 {
    function underlying() external returns (address);

    function mint(uint256 mintAmount) external returns (uint256);

    function redeem(uint256 redeemTokens) external returns (uint256);

    function balanceOf(address user) external view returns (uint256);

    function setMintRate(uint256 mintRate) external;
}
