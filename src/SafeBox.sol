// SPDX-License-Identifier: ISC

pragma solidity 0.6.12;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {
    MerkleProof
} from "@openzeppelin/contracts/cryptography/MerkleProof.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import {SafeMath} from "@openzeppelin/contracts/math/SafeMath.sol";
import {
    ReentrancyGuard
} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

import {Governable} from "./Governable.sol";
import {ICErc20} from "./interfaces/ICErc20.sol";

contract SafeBox is Governable, ERC20, ReentrancyGuard {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;
    event Claim(address user, uint256 amount);

    ICErc20 public immutable cToken;
    IERC20 public immutable uToken;

    address public relayer;
    bytes32 public root;
    mapping(address => uint256) public claimed;

    constructor(
        ICErc20 _cToken,
        string memory _name,
        string memory _symbol
    ) public ERC20(_name, _symbol) {
        IERC20 _uToken = IERC20(_cToken.underlying());
        __Governable__init();
        cToken = _cToken;
        uToken = _uToken;
        relayer = msg.sender;
        _uToken.approve(address(_cToken), uint256(-1));
    }

    function setRelayer(address _relayer) external onlyGov {
        relayer = _relayer;
    }

    function updateRoot(bytes32 _root) external {
        require(msg.sender == relayer || msg.sender == governor, "!relayer");
        root = _root;
    }

    function deposit(uint256 amount) external nonReentrant {
        uint256 uBalanceBefore = uToken.balanceOf(address(this));
        uToken.safeTransferFrom(msg.sender, address(this), amount);
        uint256 uBalanceAfter = uToken.balanceOf(address(this));
        uint256 cBalanceBefore = cToken.balanceOf(address(this));
        require(cToken.mint(uBalanceAfter.sub(uBalanceBefore)) == 0, "!mint");
        uint256 cBalanceAfter = cToken.balanceOf(address(this));
        _mint(msg.sender, cBalanceAfter.sub(cBalanceBefore));
    }

    function withdraw(uint256 amount) public nonReentrant {
        _burn(msg.sender, amount);
        uint256 uBalanceBefore = uToken.balanceOf(address(this));
        require(cToken.redeem(amount) == 0, "!redeem");
        uint256 uBalanceAfter = uToken.balanceOf(address(this));
        uToken.safeTransfer(msg.sender, uBalanceAfter.sub(uBalanceBefore));
    }

    function claim(uint256 totalReward, bytes32[] memory proof)
        public
        nonReentrant
    {
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender, totalReward));
        require(MerkleProof.verify(proof, root, leaf), "!proof");
        uint256 send = totalReward.sub(claimed[msg.sender]);
        claimed[msg.sender] = totalReward;
        uToken.safeTransfer(msg.sender, send);
        emit Claim(msg.sender, send);
    }

    function adminClaim(uint256 amount) external onlyGov {
        uToken.safeTransfer(msg.sender, amount);
    }

    function claimAndWithdraw(
        uint256 claimAmount,
        bytes32[] memory proof,
        uint256 withdrawAmount
    ) external {
        claim(claimAmount, proof);
        withdraw(withdrawAmount);
    }
}
