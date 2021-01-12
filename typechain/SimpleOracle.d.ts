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

interface SimpleOracleInterface extends ethers.utils.Interface {
  functions: {
    "acceptGovernor()": FunctionFragment;
    "getETHPx(address)": FunctionFragment;
    "governor()": FunctionFragment;
    "pendingGovernor()": FunctionFragment;
    "prices(address)": FunctionFragment;
    "setETHPx(address[],uint256[])": FunctionFragment;
    "setPendingGovernor(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getETHPx", values: [string]): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "prices", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setETHPx",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingGovernor",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getETHPx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "prices", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setETHPx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPendingGovernor",
    data: BytesLike
  ): Result;

  events: {
    "SetETHPx(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetETHPx"): EventFragment;
}

export class SimpleOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SimpleOracleInterface;

  functions: {
    acceptGovernor(overrides?: Overrides): Promise<ContractTransaction>;

    "acceptGovernor()"(overrides?: Overrides): Promise<ContractTransaction>;

    getETHPx(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "getETHPx(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    "governor()"(overrides?: CallOverrides): Promise<[string]>;

    pendingGovernor(overrides?: CallOverrides): Promise<[string]>;

    "pendingGovernor()"(overrides?: CallOverrides): Promise<[string]>;

    prices(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "prices(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setETHPx(
      tokens: string[],
      pxs: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setETHPx(address[],uint256[])"(
      tokens: string[],
      pxs: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setPendingGovernor(
      _pendingGovernor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPendingGovernor(address)"(
      _pendingGovernor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  acceptGovernor(overrides?: Overrides): Promise<ContractTransaction>;

  "acceptGovernor()"(overrides?: Overrides): Promise<ContractTransaction>;

  getETHPx(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getETHPx(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  governor(overrides?: CallOverrides): Promise<string>;

  "governor()"(overrides?: CallOverrides): Promise<string>;

  pendingGovernor(overrides?: CallOverrides): Promise<string>;

  "pendingGovernor()"(overrides?: CallOverrides): Promise<string>;

  prices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "prices(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setETHPx(
    tokens: string[],
    pxs: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setETHPx(address[],uint256[])"(
    tokens: string[],
    pxs: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setPendingGovernor(
    _pendingGovernor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPendingGovernor(address)"(
    _pendingGovernor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptGovernor(overrides?: CallOverrides): Promise<void>;

    "acceptGovernor()"(overrides?: CallOverrides): Promise<void>;

    getETHPx(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getETHPx(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<string>;

    "governor()"(overrides?: CallOverrides): Promise<string>;

    pendingGovernor(overrides?: CallOverrides): Promise<string>;

    "pendingGovernor()"(overrides?: CallOverrides): Promise<string>;

    prices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "prices(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setETHPx(
      tokens: string[],
      pxs: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setETHPx(address[],uint256[])"(
      tokens: string[],
      pxs: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    setPendingGovernor(
      _pendingGovernor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPendingGovernor(address)"(
      _pendingGovernor: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    SetETHPx(token: null, px: null): EventFilter;
  };

  estimateGas: {
    acceptGovernor(overrides?: Overrides): Promise<BigNumber>;

    "acceptGovernor()"(overrides?: Overrides): Promise<BigNumber>;

    getETHPx(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getETHPx(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    "governor()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingGovernor(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingGovernor()"(overrides?: CallOverrides): Promise<BigNumber>;

    prices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "prices(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setETHPx(
      tokens: string[],
      pxs: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setETHPx(address[],uint256[])"(
      tokens: string[],
      pxs: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    setPendingGovernor(
      _pendingGovernor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPendingGovernor(address)"(
      _pendingGovernor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptGovernor(overrides?: Overrides): Promise<PopulatedTransaction>;

    "acceptGovernor()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    getETHPx(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getETHPx(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governor()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingGovernor()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    prices(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "prices(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setETHPx(
      tokens: string[],
      pxs: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setETHPx(address[],uint256[])"(
      tokens: string[],
      pxs: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setPendingGovernor(
      _pendingGovernor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPendingGovernor(address)"(
      _pendingGovernor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
