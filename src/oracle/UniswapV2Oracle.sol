// SPDX-License-Identifier: ISC

pragma solidity 0.6.12;

import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Pair.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

import "../lib/HomoraMath.sol";
import "../interfaces/IBaseOracle.sol";
import "./UsingBaseOracle.sol";

contract UniswapV2Oracle is UsingBaseOracle, IBaseOracle {
    using SafeMath for uint256;
    using HomoraMath for uint256;

    constructor(IBaseOracle _base) public UsingBaseOracle(_base) {}

    /// @dev Return the value of the given input as ETH per unit, multiplied by 2**112.
    /// @param pair The Uniswap pair to check the value.
    function getETHPx(address pair) external view override returns (uint256) {
        address token0 = IUniswapV2Pair(pair).token0();
        address token1 = IUniswapV2Pair(pair).token1();
        uint256 totalSupply = IUniswapV2Pair(pair).totalSupply();
        (uint256 r0, uint256 r1, ) = IUniswapV2Pair(pair).getReserves();
        uint256 sqrtK = HomoraMath.sqrt(r0.mul(r1)).fdiv(totalSupply); // in 2**112
        uint256 px0 = base.getETHPx(token0);
        uint256 px1 = base.getETHPx(token1);
        return
            sqrtK
                .mul(2)
                .mul(HomoraMath.sqrt(px0))
                .div(2**56)
                .mul(HomoraMath.sqrt(px1))
                .div(2**56);
    }
}
