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

interface BasicSpellInterface extends ethers.utils.Interface {
  functions: {
    "approved(address,address)": FunctionFragment;
    "bank()": FunctionFragment;
    "ensureApprove(address,address)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "werc20()": FunctionFragment;
    "weth()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approved",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "bank", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ensureApprove",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "werc20", values?: undefined): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;

  decodeFunctionResult(functionFragment: "approved", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bank", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ensureApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "werc20", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;

  events: {};
}

export class BasicSpell extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BasicSpellInterface;

  functions: {
    approved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "approved(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    bank(overrides?: CallOverrides): Promise<[string]>;

    "bank()"(overrides?: CallOverrides): Promise<[string]>;

    ensureApprove(
      token: string,
      spender: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "ensureApprove(address,address)"(
      token: string,
      spender: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    werc20(overrides?: CallOverrides): Promise<[string]>;

    "werc20()"(overrides?: CallOverrides): Promise<[string]>;

    weth(overrides?: CallOverrides): Promise<[string]>;

    "weth()"(overrides?: CallOverrides): Promise<[string]>;
  };

  approved(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "approved(address,address)"(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  bank(overrides?: CallOverrides): Promise<string>;

  "bank()"(overrides?: CallOverrides): Promise<string>;

  ensureApprove(
    token: string,
    spender: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "ensureApprove(address,address)"(
    token: string,
    spender: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  onERC1155BatchReceived(
    operator: string,
    from: string,
    ids: BigNumberish[],
    values: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
    operator: string,
    from: string,
    ids: BigNumberish[],
    values: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  onERC1155Received(
    operator: string,
    from: string,
    id: BigNumberish,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onERC1155Received(address,address,uint256,uint256,bytes)"(
    operator: string,
    from: string,
    id: BigNumberish,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  werc20(overrides?: CallOverrides): Promise<string>;

  "werc20()"(overrides?: CallOverrides): Promise<string>;

  weth(overrides?: CallOverrides): Promise<string>;

  "weth()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    approved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approved(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    bank(overrides?: CallOverrides): Promise<string>;

    "bank()"(overrides?: CallOverrides): Promise<string>;

    ensureApprove(
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "ensureApprove(address,address)"(
      token: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    werc20(overrides?: CallOverrides): Promise<string>;

    "werc20()"(overrides?: CallOverrides): Promise<string>;

    weth(overrides?: CallOverrides): Promise<string>;

    "weth()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    approved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "approved(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bank(overrides?: CallOverrides): Promise<BigNumber>;

    "bank()"(overrides?: CallOverrides): Promise<BigNumber>;

    ensureApprove(
      token: string,
      spender: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "ensureApprove(address,address)"(
      token: string,
      spender: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    werc20(overrides?: CallOverrides): Promise<BigNumber>;

    "werc20()"(overrides?: CallOverrides): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;

    "weth()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    approved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "approved(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bank(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "bank()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ensureApprove(
      token: string,
      spender: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "ensureApprove(address,address)"(
      token: string,
      spender: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      operator: string,
      from: string,
      ids: BigNumberish[],
      values: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      operator: string,
      from: string,
      id: BigNumberish,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    werc20(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "werc20()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "weth()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
