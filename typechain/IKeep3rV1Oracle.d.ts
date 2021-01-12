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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IKeep3rV1OracleInterface extends ethers.utils.Interface {
  functions: {
    "WETH()": FunctionFragment;
    "factory()": FunctionFragment;
    "observationLength(address)": FunctionFragment;
    "observations(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "observationLength",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "observations",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "observationLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "observations",
    data: BytesLike
  ): Result;

  events: {};
}

export class IKeep3rV1Oracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IKeep3rV1OracleInterface;

  functions: {
    WETH(overrides?: CallOverrides): Promise<[string]>;

    "WETH()"(overrides?: CallOverrides): Promise<[string]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    observationLength(
      pair: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "observationLength(address)"(
      pair: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    observations(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        price0Cumulative: BigNumber;
        price1Cumulative: BigNumber;
      }
    >;

    "observations(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        price0Cumulative: BigNumber;
        price1Cumulative: BigNumber;
      }
    >;
  };

  WETH(overrides?: CallOverrides): Promise<string>;

  "WETH()"(overrides?: CallOverrides): Promise<string>;

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  observationLength(
    pair: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "observationLength(address)"(
    pair: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  observations(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      timestamp: BigNumber;
      price0Cumulative: BigNumber;
      price1Cumulative: BigNumber;
    }
  >;

  "observations(address,uint256)"(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      timestamp: BigNumber;
      price0Cumulative: BigNumber;
      price1Cumulative: BigNumber;
    }
  >;

  callStatic: {
    WETH(overrides?: CallOverrides): Promise<string>;

    "WETH()"(overrides?: CallOverrides): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    observationLength(
      pair: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "observationLength(address)"(
      pair: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    observations(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        price0Cumulative: BigNumber;
        price1Cumulative: BigNumber;
      }
    >;

    "observations(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        price0Cumulative: BigNumber;
        price1Cumulative: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    "WETH()"(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    observationLength(
      pair: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "observationLength(address)"(
      pair: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    observations(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "observations(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "WETH()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    observationLength(
      pair: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "observationLength(address)"(
      pair: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    observations(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "observations(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}