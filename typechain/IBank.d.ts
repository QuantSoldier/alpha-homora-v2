/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IBankInterface extends ethers.utils.Interface {
  functions: {
    "EXECUTOR()": FunctionFragment;
    "POSITION_ID()": FunctionFragment;
    "SPELL()": FunctionFragment;
    "accrue(address)": FunctionFragment;
    "borrow(address,uint256)": FunctionFragment;
    "borrowBalanceCurrent(uint256,address)": FunctionFragment;
    "borrowBalanceStored(uint256,address)": FunctionFragment;
    "getBankInfo(address)": FunctionFragment;
    "getBorrowETHValue(uint256)": FunctionFragment;
    "getPositionInfo(uint256)": FunctionFragment;
    "liquidate(uint256,address,uint256)": FunctionFragment;
    "nextPositionId()": FunctionFragment;
    "putCollateral(address,uint256,uint256)": FunctionFragment;
    "repay(address,uint256)": FunctionFragment;
    "takeCollateral(address,uint256,uint256)": FunctionFragment;
    "transmit(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "EXECUTOR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "POSITION_ID",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "SPELL", values?: undefined): string;
  encodeFunctionData(functionFragment: "accrue", values: [string]): string;
  encodeFunctionData(
    functionFragment: "borrow",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowBalanceCurrent",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowBalanceStored",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "getBankInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getBorrowETHValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPositionInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidate",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nextPositionId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "putCollateral",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "repay",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "takeCollateral",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transmit",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "EXECUTOR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "SPELL", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "accrue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "borrow", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowBalanceCurrent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowBalanceStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBankInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBorrowETHValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPositionInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextPositionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "putCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "takeCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transmit", data: BytesLike): Result;

  events: {
    "AddBank(address,address)": EventFragment;
    "Borrow(uint256,address,address,uint256,uint256)": EventFragment;
    "Liquidate(uint256,address,address,uint256,uint256,uint256)": EventFragment;
    "PutCollateral(uint256,address,address,uint256,uint256)": EventFragment;
    "Repay(uint256,address,address,uint256,uint256)": EventFragment;
    "SetCToken(address,address)": EventFragment;
    "SetFeeBps(uint256)": EventFragment;
    "SetOracle(address)": EventFragment;
    "TakeCollateral(uint256,address,address,uint256,uint256)": EventFragment;
    "WithdrawReserve(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddBank"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Liquidate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PutCollateral"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetCToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetFeeBps"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetOracle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TakeCollateral"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawReserve"): EventFragment;
}

export class IBank extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IBankInterface;

  functions: {
    EXECUTOR(overrides?: CallOverrides): Promise<[string]>;

    "EXECUTOR()"(overrides?: CallOverrides): Promise<[string]>;

    POSITION_ID(overrides?: CallOverrides): Promise<[BigNumber]>;

    "POSITION_ID()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    SPELL(overrides?: CallOverrides): Promise<[string]>;

    "SPELL()"(overrides?: CallOverrides): Promise<[string]>;

    accrue(token: string, overrides?: Overrides): Promise<ContractTransaction>;

    "accrue(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    borrow(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "borrow(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    borrowBalanceCurrent(
      positionId: BigNumberish,
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "borrowBalanceCurrent(uint256,address)"(
      positionId: BigNumberish,
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    borrowBalanceStored(
      positionId: BigNumberish,
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "borrowBalanceStored(uint256,address)"(
      positionId: BigNumberish,
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getBankInfo(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber, BigNumber] & {
        isListed: boolean;
        cToken: string;
        reserve: BigNumber;
        totalDebt: BigNumber;
        totalShare: BigNumber;
      }
    >;

    "getBankInfo(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber, BigNumber] & {
        isListed: boolean;
        cToken: string;
        reserve: BigNumber;
        totalDebt: BigNumber;
        totalShare: BigNumber;
      }
    >;

    getBorrowETHValue(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getBorrowETHValue(uint256)"(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPositionInfo(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber] & {
        owner: string;
        collToken: string;
        collId: BigNumber;
        collateralSize: BigNumber;
      }
    >;

    "getPositionInfo(uint256)"(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber] & {
        owner: string;
        collToken: string;
        collId: BigNumber;
        collateralSize: BigNumber;
      }
    >;

    liquidate(
      positionId: BigNumberish,
      debtToken: string,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "liquidate(uint256,address,uint256)"(
      positionId: BigNumberish,
      debtToken: string,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    nextPositionId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "nextPositionId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    putCollateral(
      collToken: string,
      collId: BigNumberish,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "putCollateral(address,uint256,uint256)"(
      collToken: string,
      collId: BigNumberish,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    repay(
      token: string,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "repay(address,uint256)"(
      token: string,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    takeCollateral(
      collToken: string,
      collId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "takeCollateral(address,uint256,uint256)"(
      collToken: string,
      collId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transmit(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transmit(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  EXECUTOR(overrides?: CallOverrides): Promise<string>;

  "EXECUTOR()"(overrides?: CallOverrides): Promise<string>;

  POSITION_ID(overrides?: CallOverrides): Promise<BigNumber>;

  "POSITION_ID()"(overrides?: CallOverrides): Promise<BigNumber>;

  SPELL(overrides?: CallOverrides): Promise<string>;

  "SPELL()"(overrides?: CallOverrides): Promise<string>;

  accrue(token: string, overrides?: Overrides): Promise<ContractTransaction>;

  "accrue(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  borrow(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "borrow(address,uint256)"(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  borrowBalanceCurrent(
    positionId: BigNumberish,
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "borrowBalanceCurrent(uint256,address)"(
    positionId: BigNumberish,
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  borrowBalanceStored(
    positionId: BigNumberish,
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "borrowBalanceStored(uint256,address)"(
    positionId: BigNumberish,
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getBankInfo(
    token: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, BigNumber, BigNumber, BigNumber] & {
      isListed: boolean;
      cToken: string;
      reserve: BigNumber;
      totalDebt: BigNumber;
      totalShare: BigNumber;
    }
  >;

  "getBankInfo(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, BigNumber, BigNumber, BigNumber] & {
      isListed: boolean;
      cToken: string;
      reserve: BigNumber;
      totalDebt: BigNumber;
      totalShare: BigNumber;
    }
  >;

  getBorrowETHValue(
    positionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getBorrowETHValue(uint256)"(
    positionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPositionInfo(
    positionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber] & {
      owner: string;
      collToken: string;
      collId: BigNumber;
      collateralSize: BigNumber;
    }
  >;

  "getPositionInfo(uint256)"(
    positionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber] & {
      owner: string;
      collToken: string;
      collId: BigNumber;
      collateralSize: BigNumber;
    }
  >;

  liquidate(
    positionId: BigNumberish,
    debtToken: string,
    amountCall: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "liquidate(uint256,address,uint256)"(
    positionId: BigNumberish,
    debtToken: string,
    amountCall: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  nextPositionId(overrides?: CallOverrides): Promise<BigNumber>;

  "nextPositionId()"(overrides?: CallOverrides): Promise<BigNumber>;

  putCollateral(
    collToken: string,
    collId: BigNumberish,
    amountCall: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "putCollateral(address,uint256,uint256)"(
    collToken: string,
    collId: BigNumberish,
    amountCall: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  repay(
    token: string,
    amountCall: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "repay(address,uint256)"(
    token: string,
    amountCall: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  takeCollateral(
    collToken: string,
    collId: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "takeCollateral(address,uint256,uint256)"(
    collToken: string,
    collId: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transmit(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transmit(address,uint256)"(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    EXECUTOR(overrides?: CallOverrides): Promise<string>;

    "EXECUTOR()"(overrides?: CallOverrides): Promise<string>;

    POSITION_ID(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_ID()"(overrides?: CallOverrides): Promise<BigNumber>;

    SPELL(overrides?: CallOverrides): Promise<string>;

    "SPELL()"(overrides?: CallOverrides): Promise<string>;

    accrue(token: string, overrides?: CallOverrides): Promise<void>;

    "accrue(address)"(token: string, overrides?: CallOverrides): Promise<void>;

    borrow(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "borrow(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    borrowBalanceCurrent(
      positionId: BigNumberish,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowBalanceCurrent(uint256,address)"(
      positionId: BigNumberish,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowBalanceStored(
      positionId: BigNumberish,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowBalanceStored(uint256,address)"(
      positionId: BigNumberish,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBankInfo(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber, BigNumber] & {
        isListed: boolean;
        cToken: string;
        reserve: BigNumber;
        totalDebt: BigNumber;
        totalShare: BigNumber;
      }
    >;

    "getBankInfo(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber, BigNumber, BigNumber] & {
        isListed: boolean;
        cToken: string;
        reserve: BigNumber;
        totalDebt: BigNumber;
        totalShare: BigNumber;
      }
    >;

    getBorrowETHValue(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBorrowETHValue(uint256)"(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPositionInfo(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber] & {
        owner: string;
        collToken: string;
        collId: BigNumber;
        collateralSize: BigNumber;
      }
    >;

    "getPositionInfo(uint256)"(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber] & {
        owner: string;
        collToken: string;
        collId: BigNumber;
        collateralSize: BigNumber;
      }
    >;

    liquidate(
      positionId: BigNumberish,
      debtToken: string,
      amountCall: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "liquidate(uint256,address,uint256)"(
      positionId: BigNumberish,
      debtToken: string,
      amountCall: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    nextPositionId(overrides?: CallOverrides): Promise<BigNumber>;

    "nextPositionId()"(overrides?: CallOverrides): Promise<BigNumber>;

    putCollateral(
      collToken: string,
      collId: BigNumberish,
      amountCall: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "putCollateral(address,uint256,uint256)"(
      collToken: string,
      collId: BigNumberish,
      amountCall: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    repay(
      token: string,
      amountCall: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "repay(address,uint256)"(
      token: string,
      amountCall: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    takeCollateral(
      collToken: string,
      collId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "takeCollateral(address,uint256,uint256)"(
      collToken: string,
      collId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transmit(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transmit(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AddBank(token: null, cToken: null): EventFilter;

    Borrow(
      positionId: null,
      caller: null,
      token: null,
      amount: null,
      share: null
    ): EventFilter;

    Liquidate(
      positionId: null,
      liquidator: null,
      debtToken: null,
      amount: null,
      share: null,
      bounty: null
    ): EventFilter;

    PutCollateral(
      positionId: null,
      caller: null,
      token: null,
      id: null,
      amount: null
    ): EventFilter;

    Repay(
      positionId: null,
      caller: null,
      token: null,
      amount: null,
      share: null
    ): EventFilter;

    SetCToken(token: null, cToken: null): EventFilter;

    SetFeeBps(feeBps: null): EventFilter;

    SetOracle(oracle: null): EventFilter;

    TakeCollateral(
      positionId: null,
      caller: null,
      token: null,
      id: null,
      amount: null
    ): EventFilter;

    WithdrawReserve(user: null, token: null, amount: null): EventFilter;
  };

  estimateGas: {
    EXECUTOR(overrides?: CallOverrides): Promise<BigNumber>;

    "EXECUTOR()"(overrides?: CallOverrides): Promise<BigNumber>;

    POSITION_ID(overrides?: CallOverrides): Promise<BigNumber>;

    "POSITION_ID()"(overrides?: CallOverrides): Promise<BigNumber>;

    SPELL(overrides?: CallOverrides): Promise<BigNumber>;

    "SPELL()"(overrides?: CallOverrides): Promise<BigNumber>;

    accrue(token: string, overrides?: Overrides): Promise<BigNumber>;

    "accrue(address)"(token: string, overrides?: Overrides): Promise<BigNumber>;

    borrow(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "borrow(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    borrowBalanceCurrent(
      positionId: BigNumberish,
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "borrowBalanceCurrent(uint256,address)"(
      positionId: BigNumberish,
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    borrowBalanceStored(
      positionId: BigNumberish,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "borrowBalanceStored(uint256,address)"(
      positionId: BigNumberish,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBankInfo(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getBankInfo(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBorrowETHValue(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBorrowETHValue(uint256)"(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPositionInfo(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPositionInfo(uint256)"(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidate(
      positionId: BigNumberish,
      debtToken: string,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "liquidate(uint256,address,uint256)"(
      positionId: BigNumberish,
      debtToken: string,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    nextPositionId(overrides?: CallOverrides): Promise<BigNumber>;

    "nextPositionId()"(overrides?: CallOverrides): Promise<BigNumber>;

    putCollateral(
      collToken: string,
      collId: BigNumberish,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "putCollateral(address,uint256,uint256)"(
      collToken: string,
      collId: BigNumberish,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    repay(
      token: string,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "repay(address,uint256)"(
      token: string,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    takeCollateral(
      collToken: string,
      collId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "takeCollateral(address,uint256,uint256)"(
      collToken: string,
      collId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transmit(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transmit(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    EXECUTOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "EXECUTOR()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    POSITION_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "POSITION_ID()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SPELL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SPELL()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    accrue(token: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "accrue(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    borrow(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "borrow(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    borrowBalanceCurrent(
      positionId: BigNumberish,
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "borrowBalanceCurrent(uint256,address)"(
      positionId: BigNumberish,
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    borrowBalanceStored(
      positionId: BigNumberish,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "borrowBalanceStored(uint256,address)"(
      positionId: BigNumberish,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBankInfo(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBankInfo(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBorrowETHValue(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBorrowETHValue(uint256)"(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPositionInfo(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPositionInfo(uint256)"(
      positionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidate(
      positionId: BigNumberish,
      debtToken: string,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "liquidate(uint256,address,uint256)"(
      positionId: BigNumberish,
      debtToken: string,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    nextPositionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextPositionId()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    putCollateral(
      collToken: string,
      collId: BigNumberish,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "putCollateral(address,uint256,uint256)"(
      collToken: string,
      collId: BigNumberish,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    repay(
      token: string,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "repay(address,uint256)"(
      token: string,
      amountCall: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    takeCollateral(
      collToken: string,
      collId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "takeCollateral(address,uint256,uint256)"(
      collToken: string,
      collId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transmit(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transmit(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
