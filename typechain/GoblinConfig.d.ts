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

interface GoblinConfigInterface extends ethers.utils.Interface {
  functions: {
    "acceptDebt(address)": FunctionFragment;
    "killFactor(address,uint256)": FunctionFragment;
    "workFactor(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "acceptDebt", values: [string]): string;
  encodeFunctionData(
    functionFragment: "killFactor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "workFactor",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "acceptDebt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "killFactor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "workFactor", data: BytesLike): Result;

  events: {};
}

export class GoblinConfig extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: GoblinConfigInterface;

  functions: {
    acceptDebt(goblin: string, overrides?: CallOverrides): Promise<[boolean]>;

    "acceptDebt(address)"(
      goblin: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    killFactor(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "killFactor(address,uint256)"(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    workFactor(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "workFactor(address,uint256)"(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  acceptDebt(goblin: string, overrides?: CallOverrides): Promise<boolean>;

  "acceptDebt(address)"(
    goblin: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  killFactor(
    goblin: string,
    debt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "killFactor(address,uint256)"(
    goblin: string,
    debt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  workFactor(
    goblin: string,
    debt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "workFactor(address,uint256)"(
    goblin: string,
    debt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    acceptDebt(goblin: string, overrides?: CallOverrides): Promise<boolean>;

    "acceptDebt(address)"(
      goblin: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    killFactor(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "killFactor(address,uint256)"(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    workFactor(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "workFactor(address,uint256)"(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    acceptDebt(goblin: string, overrides?: CallOverrides): Promise<BigNumber>;

    "acceptDebt(address)"(
      goblin: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    killFactor(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "killFactor(address,uint256)"(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    workFactor(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "workFactor(address,uint256)"(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptDebt(
      goblin: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "acceptDebt(address)"(
      goblin: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    killFactor(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "killFactor(address,uint256)"(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    workFactor(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "workFactor(address,uint256)"(
      goblin: string,
      debt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
