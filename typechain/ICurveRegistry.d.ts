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

interface ICurveRegistryInterface extends ethers.utils.Interface {
  functions: {
    "get_coins(address)": FunctionFragment;
    "get_gauges(address)": FunctionFragment;
    "get_lp_token(address)": FunctionFragment;
    "get_n_coins(address)": FunctionFragment;
    "get_pool_from_lp_token(address)": FunctionFragment;
    "pool_list(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "get_coins", values: [string]): string;
  encodeFunctionData(functionFragment: "get_gauges", values: [string]): string;
  encodeFunctionData(
    functionFragment: "get_lp_token",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "get_n_coins", values: [string]): string;
  encodeFunctionData(
    functionFragment: "get_pool_from_lp_token",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "pool_list",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "get_coins", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "get_gauges", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "get_lp_token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_n_coins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_pool_from_lp_token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pool_list", data: BytesLike): Result;

  events: {};
}

export class ICurveRegistry extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ICurveRegistryInterface;

  functions: {
    get_coins(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [[string, string, string, string, string, string, string, string]]
    >;

    "get_coins(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [[string, string, string, string, string, string, string, string]]
    >;

    get_gauges(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string
        ],
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ]
      ]
    >;

    "get_gauges(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string
        ],
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ]
      ]
    >;

    get_lp_token(pool: string, overrides?: CallOverrides): Promise<[string]>;

    "get_lp_token(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    get_n_coins(lp: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "get_n_coins(address)"(
      lp: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    get_pool_from_lp_token(
      lp: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "get_pool_from_lp_token(address)"(
      lp: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    pool_list(id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "pool_list(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  get_coins(
    pool: string,
    overrides?: CallOverrides
  ): Promise<[string, string, string, string, string, string, string, string]>;

  "get_coins(address)"(
    pool: string,
    overrides?: CallOverrides
  ): Promise<[string, string, string, string, string, string, string, string]>;

  get_gauges(
    pool: string,
    overrides?: CallOverrides
  ): Promise<
    [
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    ]
  >;

  "get_gauges(address)"(
    pool: string,
    overrides?: CallOverrides
  ): Promise<
    [
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    ]
  >;

  get_lp_token(pool: string, overrides?: CallOverrides): Promise<string>;

  "get_lp_token(address)"(
    pool: string,
    overrides?: CallOverrides
  ): Promise<string>;

  get_n_coins(lp: string, overrides?: CallOverrides): Promise<BigNumber>;

  "get_n_coins(address)"(
    lp: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  get_pool_from_lp_token(
    lp: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "get_pool_from_lp_token(address)"(
    lp: string,
    overrides?: CallOverrides
  ): Promise<string>;

  pool_list(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "pool_list(uint256)"(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    get_coins(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, string, string]
    >;

    "get_coins(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string, string, string, string]
    >;

    get_gauges(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string
        ],
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ]
      ]
    >;

    "get_gauges(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string
        ],
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ]
      ]
    >;

    get_lp_token(pool: string, overrides?: CallOverrides): Promise<string>;

    "get_lp_token(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<string>;

    get_n_coins(lp: string, overrides?: CallOverrides): Promise<BigNumber>;

    "get_n_coins(address)"(
      lp: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_pool_from_lp_token(
      lp: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "get_pool_from_lp_token(address)"(
      lp: string,
      overrides?: CallOverrides
    ): Promise<string>;

    pool_list(id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "pool_list(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    get_coins(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    "get_coins(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_gauges(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    "get_gauges(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_lp_token(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    "get_lp_token(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_n_coins(lp: string, overrides?: CallOverrides): Promise<BigNumber>;

    "get_n_coins(address)"(
      lp: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_pool_from_lp_token(
      lp: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "get_pool_from_lp_token(address)"(
      lp: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pool_list(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "pool_list(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    get_coins(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "get_coins(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get_gauges(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "get_gauges(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get_lp_token(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "get_lp_token(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get_n_coins(
      lp: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "get_n_coins(address)"(
      lp: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    get_pool_from_lp_token(
      lp: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "get_pool_from_lp_token(address)"(
      lp: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pool_list(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pool_list(uint256)"(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}