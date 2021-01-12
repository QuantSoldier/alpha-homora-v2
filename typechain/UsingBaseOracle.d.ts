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

interface UsingBaseOracleInterface extends ethers.utils.Interface {
  functions: {
    "base()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "base", values?: undefined): string;

  decodeFunctionResult(functionFragment: "base", data: BytesLike): Result;

  events: {};
}

export class UsingBaseOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: UsingBaseOracleInterface;

  functions: {
    base(overrides?: CallOverrides): Promise<[string]>;

    "base()"(overrides?: CallOverrides): Promise<[string]>;
  };

  base(overrides?: CallOverrides): Promise<string>;

  "base()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    base(overrides?: CallOverrides): Promise<string>;

    "base()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    base(overrides?: CallOverrides): Promise<BigNumber>;

    "base()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    base(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "base()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
