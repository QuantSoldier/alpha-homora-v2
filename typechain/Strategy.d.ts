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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface StrategyInterface extends ethers.utils.Interface {
  functions: {
    "execute(address,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "execute",
    values: [string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;

  events: {};
}

export class Strategy extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: StrategyInterface;

  functions: {
    execute(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "execute(address,uint256,bytes)"(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  execute(
    user: string,
    debt: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "execute(address,uint256,bytes)"(
    user: string,
    debt: BigNumberish,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    execute(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "execute(address,uint256,bytes)"(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    execute(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "execute(address,uint256,bytes)"(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    execute(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "execute(address,uint256,bytes)"(
      user: string,
      debt: BigNumberish,
      data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}