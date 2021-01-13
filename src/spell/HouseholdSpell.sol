// SPDX-License-Identifier: ISC

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./BasicSpell.sol";
import "../interfaces/IBank.sol";
import "../interfaces/IWETH.sol";

contract HouseHoldSpell is BasicSpell {
    constructor(
        IBank _bank,
        address _werc20,
        address _weth
    ) public BasicSpell(_bank, _werc20, _weth) {}

    function borrowETH(uint256 amount) external {
        doBorrow(weth, amount);
        doRefundETH();
    }

    function borrow(address token, uint256 amount) external {
        doBorrow(token, amount);
        doRefund(token);
    }

    function repayETH(uint256 amount) external payable {
        doTransmitETH();
        doRepay(weth, amount);
    }

    function repay(address token, uint256 amount) external {
        doTransmit(token, amount);
        doRepay(token, IERC20(token).balanceOf(address(this)));
    }

    function putCollateral(address token, uint256 amount) external {
        doTransmit(token, amount);
        doPutCollateral(token, IERC20(token).balanceOf(address(this)));
    }

    function takeCollateral(address token, uint256 amount) external {
        doTakeCollateral(token, amount);
        doRefund(token);
    }
}
