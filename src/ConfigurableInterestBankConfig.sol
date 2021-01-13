// SPDX-License-Identifier: ISC

// Bank Configuration Contract
// https://etherscan.io/address/0x97a49f8eec63c0dfeb9db4c791229477962dc692

pragma solidity ^0.6.0;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {SafeMath} from "@openzeppelin/contracts/math/SafeMath.sol";

import {BankConfig} from "./interfaces/BankConfig.sol";
import {GoblinConfig} from "./interfaces/GoblinConfig.sol";
import {InterestModel} from "./interfaces/InterestModel.sol";

contract ConfigurableInterestBankConfig is BankConfig, Ownable {
    /// The minimum ETH debt size per position.
    uint256 public override minDebtSize;
    /// The portion of interests allocated to the reserve pool.
    uint256 public override getReservePoolBps;
    /// The reward for successfully killing a position.
    uint256 public override getKillBps;
    /// Mapping for goblin address to its configuration.
    mapping(address => GoblinConfig) public goblins;
    /// Interest rate model
    InterestModel public interestModel;

    constructor(
        uint256 _minDebtSize,
        uint256 _reservePoolBps,
        uint256 _killBps,
        InterestModel _interestModel
    ) public {
        setParams(_minDebtSize, _reservePoolBps, _killBps, _interestModel);
    }

    /// @dev Set all the basic parameters. Must only be called by the owner.
    /// @param _minDebtSize The new minimum debt size value.
    /// @param _reservePoolBps The new interests allocated to the reserve pool value.
    /// @param _killBps The new reward for killing a position value.
    /// @param _interestModel The new interest rate model contract.
    function setParams(
        uint256 _minDebtSize,
        uint256 _reservePoolBps,
        uint256 _killBps,
        InterestModel _interestModel
    ) public onlyOwner {
        minDebtSize = _minDebtSize;
        getReservePoolBps = _reservePoolBps;
        getKillBps = _killBps;
        interestModel = _interestModel;
    }

    /// @dev Set the configuration for the given goblins. Must only be called by the owner.
    function setGoblins(
        address[] calldata addrs,
        GoblinConfig[] calldata configs
    ) external onlyOwner {
        require(addrs.length == configs.length, "bad length");
        for (uint256 idx = 0; idx < addrs.length; idx++) {
            goblins[addrs[idx]] = configs[idx];
        }
    }

    /// @dev Return the interest rate per second, using 1e18 as denom.
    function getInterestRate(uint256 debt, uint256 floating)
        external
        view
        override
        returns (uint256)
    {
        return interestModel.getInterestRate(debt, floating);
    }

    /// @dev Return whether the given address is a goblin.
    function isGoblin(address goblin) external view override returns (bool) {
        return address(goblins[goblin]) != address(0);
    }

    /// @dev Return whether the given goblin accepts more debt. Revert on non-goblin.
    function acceptDebt(address goblin) external view override returns (bool) {
        return goblins[goblin].acceptDebt(goblin);
    }

    /// @dev Return the work factor for the goblin + ETH debt, using 1e4 as denom. Revert on non-goblin.
    function workFactor(address goblin, uint256 debt)
        external
        view
        override
        returns (uint256)
    {
        return goblins[goblin].workFactor(goblin, debt);
    }

    /// @dev Return the kill factor for the goblin + ETH debt, using 1e4 as denom. Revert on non-goblin.
    function killFactor(address goblin, uint256 debt)
        external
        view
        override
        returns (uint256)
    {
        return goblins[goblin].killFactor(goblin, debt);
    }
}
