// SPDX-License-Identifier: ISC

pragma solidity 0.6.12;

import "@openzeppelin/contracts/math/SafeMath.sol";

library HomoraMath {
    using SafeMath for uint256;

    function divCeil(uint256 lhs, uint256 rhs) internal pure returns (uint256) {
        return lhs.add(rhs).sub(1) / rhs;
    }

    function fmul(uint256 lhs, uint256 rhs) internal pure returns (uint256) {
        return lhs.mul(rhs) / (2**112);
    }

    function fdiv(uint256 lhs, uint256 rhs) internal pure returns (uint256) {
        return lhs.mul(2**112) / rhs;
    }

    function sqrt(uint256 x) internal pure returns (uint256 y) {
        uint256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }
}
