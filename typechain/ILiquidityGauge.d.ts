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

interface ILiquidityGaugeInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address)": FunctionFragment;
    "crv_token()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "lp_token()": FunctionFragment;
    "minter()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "crv_token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "lp_token", values?: undefined): string;
  encodeFunctionData(functionFragment: "minter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "crv_token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lp_token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class ILiquidityGauge extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ILiquidityGaugeInterface;

  functions: {
    balanceOf(addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    crv_token(overrides?: CallOverrides): Promise<[string]>;

    "crv_token()"(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "deposit(uint256)"(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    lp_token(overrides?: CallOverrides): Promise<[string]>;

    "lp_token()"(overrides?: CallOverrides): Promise<[string]>;

    minter(overrides?: CallOverrides): Promise<[string]>;

    "minter()"(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(uint256)"(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  balanceOf(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  crv_token(overrides?: CallOverrides): Promise<string>;

  "crv_token()"(overrides?: CallOverrides): Promise<string>;

  deposit(
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "deposit(uint256)"(
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  lp_token(overrides?: CallOverrides): Promise<string>;

  "lp_token()"(overrides?: CallOverrides): Promise<string>;

  minter(overrides?: CallOverrides): Promise<string>;

  "minter()"(overrides?: CallOverrides): Promise<string>;

  withdraw(
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(uint256)"(
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    crv_token(overrides?: CallOverrides): Promise<string>;

    "crv_token()"(overrides?: CallOverrides): Promise<string>;

    deposit(value: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "deposit(uint256)"(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lp_token(overrides?: CallOverrides): Promise<string>;

    "lp_token()"(overrides?: CallOverrides): Promise<string>;

    minter(overrides?: CallOverrides): Promise<string>;

    "minter()"(overrides?: CallOverrides): Promise<string>;

    withdraw(value: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "withdraw(uint256)"(
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    balanceOf(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    crv_token(overrides?: CallOverrides): Promise<BigNumber>;

    "crv_token()"(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(value: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "deposit(uint256)"(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    lp_token(overrides?: CallOverrides): Promise<BigNumber>;

    "lp_token()"(overrides?: CallOverrides): Promise<BigNumber>;

    minter(overrides?: CallOverrides): Promise<BigNumber>;

    "minter()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(value: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "withdraw(uint256)"(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    crv_token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "crv_token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "deposit(uint256)"(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    lp_token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lp_token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minter()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256)"(
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
