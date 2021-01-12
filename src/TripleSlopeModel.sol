// SPDX-License-Identifier: ISC

// Interest Model Calculation Contract for Triple Slope formula
// https://etherscan.io/address/0xcb1792b0552a718c16a03cefd6b1db30362dbdae#code

pragma solidity ^0.6.0;

import {Ownable} from '@openzeppelin/contracts/access/Ownable.sol';
import {SafeMath} from '@openzeppelin/contracts/math/SafeMath.sol';

import {BankConfig} from './interfaces/BankConfig.sol';

contract TripleSlopeModel {
    using SafeMath for uint256;

    /// @dev Return the interest rate per second, using 1e18 as denom.
    function getInterestRate(uint256 debt, uint256 floating) external pure returns (uint256) {
        uint256 total = debt.add(floating);
        uint256 utilization = debt.mul(100e18).div(total);
        if (utilization < 80e18) {
            // Less than 80% utilization - 0%-10% APY
            return utilization.mul(10e16).div(80e18) / 365 days;
        } else if (utilization < 90e18) {
            // Between 80% and 90% - 10% APY
            return uint256(10e16) / 365 days;
        } else if (utilization < 100e18) {
            // Between 90% and 100% - 10%-50% APY
            return (10e16 + utilization.sub(90e18).mul(40e16).div(10e18)) / 365 days;
        } else {
            // Not possible, but just in case - 50% APY
            return uint256(50e16) / 365 days;
        }
    }
}