// SPDX-License-Identifier: ISC

pragma solidity 0.6.12;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import {
    MerkleProof
} from "@openzeppelin/contracts/cryptography/MerkleProof.sol";
import {SafeMath} from "@openzeppelin/contracts/math/SafeMath.sol";
import {
    ReentrancyGuard
} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

import {Governable} from "./Governable.sol";
import {ICErc20} from "./interfaces/ICErc20.sol";
import {IWETH} from "./interfaces/IWETH.sol";

contract SafeBoxETH is Governable, ERC20, ReentrancyGuard {
    using SafeMath for uint256;
    event Claim(address user, uint256 amount);

    ICErc20 public immutable cToken;
    IWETH public immutable weth;

    address public relayer;
    bytes32 public root;
    mapping(address => uint256) public claimed;

    constructor(
        ICErc20 _cToken,
        string memory _name,
        string memory _symbol
    ) public ERC20(_name, _symbol) {
        IWETH _weth = IWETH(_cToken.underlying());
        __Governable__init();
        cToken = _cToken;
        weth = _weth;
        relayer = msg.sender;
        _weth.approve(address(_cToken), uint256(-1));
    }

    function setRelayer(address _relayer) external onlyGov {
        relayer = _relayer;
    }

    function updateRoot(bytes32 _root) external {
        require(msg.sender == relayer || msg.sender == governor, "!relayer");
        root = _root;
    }

    function deposit() external payable nonReentrant {
        weth.deposit{value: msg.value}();
        uint256 cBalanceBefore = cToken.balanceOf(address(this));
        require(cToken.mint(msg.value) == 0, "!mint");
        uint256 cBalanceAfter = cToken.balanceOf(address(this));
        _mint(msg.sender, cBalanceAfter.sub(cBalanceBefore));
    }

    function withdraw(uint256 amount) public nonReentrant {
        _burn(msg.sender, amount);
        uint256 wethBalanceBefore = weth.balanceOf(address(this));
        require(cToken.redeem(amount) == 0, "!redeem");
        uint256 wethBalanceAfter = weth.balanceOf(address(this));
        uint256 wethAmount = wethBalanceAfter.sub(wethBalanceBefore);
        weth.withdraw(wethAmount);
        (bool success, ) = msg.sender.call{value: wethAmount}(new bytes(0));
        require(success, "!withdraw");
    }

    function claim(uint256 totalReward, bytes32[] memory proof)
        public
        nonReentrant
    {
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender, totalReward));
        require(MerkleProof.verify(proof, root, leaf), "!proof");
        uint256 send = totalReward.sub(claimed[msg.sender]);
        claimed[msg.sender] = totalReward;
        weth.withdraw(send);
        (bool success, ) = msg.sender.call{value: send}(new bytes(0));
        require(success, "!claim");
        emit Claim(msg.sender, send);
    }

    function adminClaim(uint256 amount) external onlyGov {
        weth.withdraw(amount);
        (bool success, ) = msg.sender.call{value: amount}(new bytes(0));
        require(success, "!adminClaim");
    }

    function claimAndWithdraw(
        uint256 claimAmount,
        bytes32[] memory proof,
        uint256 withdrawAmount
    ) external {
        claim(claimAmount, proof);
        withdraw(withdrawAmount);
    }

    receive() external payable {
        require(msg.sender == address(weth), "!weth");
    }
}
