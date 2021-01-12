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

interface ILiquidityGaugeMinterInterface extends ethers.utils.Interface {
  functions: {
    "mint(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "mint", values: [string]): string;

  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;

  events: {};
}

export class ILiquidityGaugeMinter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ILiquidityGaugeMinterInterface;

  functions: {
    mint(gauge: string, overrides?: Overrides): Promise<ContractTransaction>;

    "mint(address)"(
      gauge: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  mint(gauge: string, overrides?: Overrides): Promise<ContractTransaction>;

  "mint(address)"(
    gauge: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    mint(gauge: string, overrides?: CallOverrides): Promise<void>;

    "mint(address)"(gauge: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    mint(gauge: string, overrides?: Overrides): Promise<BigNumber>;

    "mint(address)"(gauge: string, overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    mint(gauge: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "mint(address)"(
      gauge: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
