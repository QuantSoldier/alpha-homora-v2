// SPDX-License-Identifier: ISC

pragma solidity 0.6.12;

import "@openzeppelin/contracts/math/SafeMath.sol";

import "../lib/BNum.sol";
import "../interfaces/IBaseOracle.sol";
import "../interfaces/IBalancerPool.sol";

import "./UsingBaseOracle.sol";

contract BalancerPairOracle is UsingBaseOracle, IBaseOracle, BNum {
    using SafeMath for uint256;

    constructor(IBaseOracle _base) public UsingBaseOracle(_base) {}

    /// @dev Return fair reserve amounts given spot reserves, weights, and fair prices.
    /// @param resA Reserve of the first asset
    /// @param resB Reserev of the second asset
    /// @param wA Weight of the first asset
    /// @param wB Weight of the second asset
    /// @param pxA Fair price of the first asset
    /// @param pxB Fair price of the second asset
    function computeFairReserves(
        uint256 resA,
        uint256 resB,
        uint256 wA,
        uint256 wB,
        uint256 pxA,
        uint256 pxB
    ) internal pure returns (uint256 fairResA, uint256 fairResB) {
        uint256 r0 = bdiv(resA, resB);
        uint256 r1 = bdiv(bmul(wA, pxB), bmul(wB, pxA));
        // fairResA = resA * (r1 / r0) ^ wB
        // fairResB = resB * (r0 / r1) ^ wA
        if (r0 > r1) {
            uint256 ratio = bdiv(r1, r0);
            fairResA = bmul(resA, bpow(ratio, wB));
            fairResB = bdiv(resB, bpow(ratio, wA));
        } else {
            uint256 ratio = bdiv(r0, r1);
            fairResA = bdiv(resA, bpow(ratio, wB));
            fairResB = bmul(resB, bpow(ratio, wA));
        }
    }

    /// @dev Return the value of the given input as ETH per unit, multiplied by 2**112.
    /// @param token The ERC-20 token to check the value.
    function getETHPx(address token) external view override returns (uint256) {
        IBalancerPool pool = IBalancerPool(token);
        require(pool.getNumTokens() == 2, "num tokens must be 2");
        address[] memory tokens = pool.getFinalTokens();
        address tokenA = tokens[0];
        address tokenB = tokens[1];
        uint256 pxA = base.getETHPx(tokenA);
        uint256 pxB = base.getETHPx(tokenB);
        (uint256 fairResA, uint256 fairResB) =
            computeFairReserves(
                pool.getBalance(tokenA),
                pool.getBalance(tokenB),
                pool.getNormalizedWeight(tokenA),
                pool.getNormalizedWeight(tokenB),
                pxA,
                pxB
            );
        return fairResA.mul(pxA).add(fairResB.mul(pxB)).div(pool.totalSupply());
    }
}
