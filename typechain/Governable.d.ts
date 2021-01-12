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

interface GovernableInterface extends ethers.utils.Interface {
  functions: {
    "acceptGovernor()": FunctionFragment;
    "governor()": FunctionFragment;
    "pendingGovernor()": FunctionFragment;
    "setPendingGovernor(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingGovernor",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPendingGovernor",
    data: BytesLike
  ): Result;

  events: {};
}

export class Governable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: GovernableInterface;

  functions: {
    acceptGovernor(overrides?: Overrides): Promise<ContractTransaction>;

    "acceptGovernor()"(overrides?: Overrides): Promise<ContractTransaction>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    "governor()"(overrides?: CallOverrides): Promise<[string]>;

    pendingGovernor(overrides?: CallOverrides): Promise<[string]>;

    "pendingGovernor()"(overrides?: CallOverrides): Promise<[string]>;

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

  governor(overrides?: CallOverrides): Promise<string>;

  "governor()"(overrides?: CallOverrides): Promise<string>;

  pendingGovernor(overrides?: CallOverrides): Promise<string>;

  "pendingGovernor()"(overrides?: CallOverrides): Promise<string>;

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

    governor(overrides?: CallOverrides): Promise<string>;

    "governor()"(overrides?: CallOverrides): Promise<string>;

    pendingGovernor(overrides?: CallOverrides): Promise<string>;

    "pendingGovernor()"(overrides?: CallOverrides): Promise<string>;

    setPendingGovernor(
      _pendingGovernor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPendingGovernor(address)"(
      _pendingGovernor: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    acceptGovernor(overrides?: Overrides): Promise<BigNumber>;

    "acceptGovernor()"(overrides?: Overrides): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    "governor()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingGovernor(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingGovernor()"(overrides?: CallOverrides): Promise<BigNumber>;

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

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governor()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingGovernor()"(
      overrides?: CallOverrides
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
