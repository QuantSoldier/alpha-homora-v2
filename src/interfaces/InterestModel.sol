// SPDX-License-Identifier: ISC

pragma solidity ^0.6.0;

interface InterestModel {
    /// @dev Return the interest rate per second, using 1e18 as denom.
    function getInterestRate(uint256 debt, uint256 floating) external view returns (uint256);
}