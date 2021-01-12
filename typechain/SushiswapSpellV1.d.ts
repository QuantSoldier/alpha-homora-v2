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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface SushiswapSpellV1Interface extends ethers.utils.Interface {
  functions: {
    "addLiquidityWERC20(address,address,tuple)": FunctionFragment;
    "addLiquidityWMasterChef(address,address,tuple,uint256)": FunctionFragment;
    "approved(address,address)": FunctionFragment;
    "bank()": FunctionFragment;
    "ensureApprove(address,address)": FunctionFragment;
    "factory()": FunctionFragment;
    "getPair(address,address)": FunctionFragment;
    "harvestWMasterChef()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "pairs(address,address)": FunctionFragment;
    "removeLiquidityWERC20(address,address,tuple)": FunctionFragment;
    "removeLiquidityWMasterChef(address,address,tuple)": FunctionFragment;
    "router()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "sushi()": FunctionFragment;
    "werc20()": FunctionFragment;
    "weth()": FunctionFragment;
    "wmasterchef()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidityWERC20",
    values: [
      string,
      string,
      {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityWMasterChef",
    values: [
      string,
      string,
      {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "approved",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "bank", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ensureApprove",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPair",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "harvestWMasterChef",
    values?: undefined
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
    functionFragment: "pairs",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityWERC20",
    values: [
      string,
      string,
      {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityWMasterChef",
    values: [
      string,
      string,
      {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "sushi", values?: undefined): string;
  encodeFunctionData(functionFragment: "werc20", values?: undefined): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wmasterchef",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidityWERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityWMasterChef",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approved", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bank", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ensureApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "harvestWMasterChef",
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
  decodeFunctionResult(functionFragment: "pairs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityWERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityWMasterChef",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sushi", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "werc20", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wmasterchef",
    data: BytesLike
  ): Result;

  events: {};
}

export class SushiswapSpellV1 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SushiswapSpellV1Interface;

  functions: {
    addLiquidityWERC20(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "addLiquidityWERC20(address,address,tuple)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    addLiquidityWMasterChef(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      pid: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "addLiquidityWMasterChef(address,address,tuple,uint256)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      pid: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

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

    factory(overrides?: CallOverrides): Promise<[string]>;

    "factory()"(overrides?: CallOverrides): Promise<[string]>;

    getPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "getPair(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    harvestWMasterChef(overrides?: Overrides): Promise<ContractTransaction>;

    "harvestWMasterChef()"(overrides?: Overrides): Promise<ContractTransaction>;

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

    pairs(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "pairs(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    removeLiquidityWERC20(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeLiquidityWERC20(address,address,tuple)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeLiquidityWMasterChef(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeLiquidityWMasterChef(address,address,tuple)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    router(overrides?: CallOverrides): Promise<[string]>;

    "router()"(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    sushi(overrides?: CallOverrides): Promise<[string]>;

    "sushi()"(overrides?: CallOverrides): Promise<[string]>;

    werc20(overrides?: CallOverrides): Promise<[string]>;

    "werc20()"(overrides?: CallOverrides): Promise<[string]>;

    weth(overrides?: CallOverrides): Promise<[string]>;

    "weth()"(overrides?: CallOverrides): Promise<[string]>;

    wmasterchef(overrides?: CallOverrides): Promise<[string]>;

    "wmasterchef()"(overrides?: CallOverrides): Promise<[string]>;
  };

  addLiquidityWERC20(
    tokenA: string,
    tokenB: string,
    amt: {
      amtAUser: BigNumberish;
      amtBUser: BigNumberish;
      amtLPUser: BigNumberish;
      amtABorrow: BigNumberish;
      amtBBorrow: BigNumberish;
      amtLPBorrow: BigNumberish;
      amtAMin: BigNumberish;
      amtBMin: BigNumberish;
    },
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "addLiquidityWERC20(address,address,tuple)"(
    tokenA: string,
    tokenB: string,
    amt: {
      amtAUser: BigNumberish;
      amtBUser: BigNumberish;
      amtLPUser: BigNumberish;
      amtABorrow: BigNumberish;
      amtBBorrow: BigNumberish;
      amtLPBorrow: BigNumberish;
      amtAMin: BigNumberish;
      amtBMin: BigNumberish;
    },
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  addLiquidityWMasterChef(
    tokenA: string,
    tokenB: string,
    amt: {
      amtAUser: BigNumberish;
      amtBUser: BigNumberish;
      amtLPUser: BigNumberish;
      amtABorrow: BigNumberish;
      amtBBorrow: BigNumberish;
      amtLPBorrow: BigNumberish;
      amtAMin: BigNumberish;
      amtBMin: BigNumberish;
    },
    pid: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "addLiquidityWMasterChef(address,address,tuple,uint256)"(
    tokenA: string,
    tokenB: string,
    amt: {
      amtAUser: BigNumberish;
      amtBUser: BigNumberish;
      amtLPUser: BigNumberish;
      amtABorrow: BigNumberish;
      amtBBorrow: BigNumberish;
      amtLPBorrow: BigNumberish;
      amtAMin: BigNumberish;
      amtBMin: BigNumberish;
    },
    pid: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

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

  factory(overrides?: CallOverrides): Promise<string>;

  "factory()"(overrides?: CallOverrides): Promise<string>;

  getPair(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "getPair(address,address)"(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  harvestWMasterChef(overrides?: Overrides): Promise<ContractTransaction>;

  "harvestWMasterChef()"(overrides?: Overrides): Promise<ContractTransaction>;

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

  pairs(arg0: string, arg1: string, overrides?: CallOverrides): Promise<string>;

  "pairs(address,address)"(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  removeLiquidityWERC20(
    tokenA: string,
    tokenB: string,
    amt: {
      amtLPTake: BigNumberish;
      amtLPWithdraw: BigNumberish;
      amtARepay: BigNumberish;
      amtBRepay: BigNumberish;
      amtLPRepay: BigNumberish;
      amtAMin: BigNumberish;
      amtBMin: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeLiquidityWERC20(address,address,tuple)"(
    tokenA: string,
    tokenB: string,
    amt: {
      amtLPTake: BigNumberish;
      amtLPWithdraw: BigNumberish;
      amtARepay: BigNumberish;
      amtBRepay: BigNumberish;
      amtLPRepay: BigNumberish;
      amtAMin: BigNumberish;
      amtBMin: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeLiquidityWMasterChef(
    tokenA: string,
    tokenB: string,
    amt: {
      amtLPTake: BigNumberish;
      amtLPWithdraw: BigNumberish;
      amtARepay: BigNumberish;
      amtBRepay: BigNumberish;
      amtLPRepay: BigNumberish;
      amtAMin: BigNumberish;
      amtBMin: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeLiquidityWMasterChef(address,address,tuple)"(
    tokenA: string,
    tokenB: string,
    amt: {
      amtLPTake: BigNumberish;
      amtLPWithdraw: BigNumberish;
      amtARepay: BigNumberish;
      amtBRepay: BigNumberish;
      amtLPRepay: BigNumberish;
      amtAMin: BigNumberish;
      amtBMin: BigNumberish;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  router(overrides?: CallOverrides): Promise<string>;

  "router()"(overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  sushi(overrides?: CallOverrides): Promise<string>;

  "sushi()"(overrides?: CallOverrides): Promise<string>;

  werc20(overrides?: CallOverrides): Promise<string>;

  "werc20()"(overrides?: CallOverrides): Promise<string>;

  weth(overrides?: CallOverrides): Promise<string>;

  "weth()"(overrides?: CallOverrides): Promise<string>;

  wmasterchef(overrides?: CallOverrides): Promise<string>;

  "wmasterchef()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addLiquidityWERC20(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "addLiquidityWERC20(address,address,tuple)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    addLiquidityWMasterChef(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addLiquidityWMasterChef(address,address,tuple,uint256)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

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

    factory(overrides?: CallOverrides): Promise<string>;

    "factory()"(overrides?: CallOverrides): Promise<string>;

    getPair(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getPair(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<string>;

    harvestWMasterChef(overrides?: CallOverrides): Promise<void>;

    "harvestWMasterChef()"(overrides?: CallOverrides): Promise<void>;

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

    pairs(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "pairs(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    removeLiquidityWERC20(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "removeLiquidityWERC20(address,address,tuple)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    removeLiquidityWMasterChef(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "removeLiquidityWMasterChef(address,address,tuple)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    router(overrides?: CallOverrides): Promise<string>;

    "router()"(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    sushi(overrides?: CallOverrides): Promise<string>;

    "sushi()"(overrides?: CallOverrides): Promise<string>;

    werc20(overrides?: CallOverrides): Promise<string>;

    "werc20()"(overrides?: CallOverrides): Promise<string>;

    weth(overrides?: CallOverrides): Promise<string>;

    "weth()"(overrides?: CallOverrides): Promise<string>;

    wmasterchef(overrides?: CallOverrides): Promise<string>;

    "wmasterchef()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addLiquidityWERC20(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "addLiquidityWERC20(address,address,tuple)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    addLiquidityWMasterChef(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      pid: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "addLiquidityWMasterChef(address,address,tuple,uint256)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      pid: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

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

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    "factory()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "getPair(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    harvestWMasterChef(overrides?: Overrides): Promise<BigNumber>;

    "harvestWMasterChef()"(overrides?: Overrides): Promise<BigNumber>;

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

    pairs(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pairs(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidityWERC20(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeLiquidityWERC20(address,address,tuple)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    removeLiquidityWMasterChef(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeLiquidityWMasterChef(address,address,tuple)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    "router()"(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sushi(overrides?: CallOverrides): Promise<BigNumber>;

    "sushi()"(overrides?: CallOverrides): Promise<BigNumber>;

    werc20(overrides?: CallOverrides): Promise<BigNumber>;

    "werc20()"(overrides?: CallOverrides): Promise<BigNumber>;

    weth(overrides?: CallOverrides): Promise<BigNumber>;

    "weth()"(overrides?: CallOverrides): Promise<BigNumber>;

    wmasterchef(overrides?: CallOverrides): Promise<BigNumber>;

    "wmasterchef()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidityWERC20(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "addLiquidityWERC20(address,address,tuple)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    addLiquidityWMasterChef(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      pid: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "addLiquidityWMasterChef(address,address,tuple,uint256)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtAUser: BigNumberish;
        amtBUser: BigNumberish;
        amtLPUser: BigNumberish;
        amtABorrow: BigNumberish;
        amtBBorrow: BigNumberish;
        amtLPBorrow: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      pid: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

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

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "factory()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "getPair(address,address)"(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    harvestWMasterChef(overrides?: Overrides): Promise<PopulatedTransaction>;

    "harvestWMasterChef()"(
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

    pairs(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pairs(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeLiquidityWERC20(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeLiquidityWERC20(address,address,tuple)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removeLiquidityWMasterChef(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeLiquidityWMasterChef(address,address,tuple)"(
      tokenA: string,
      tokenB: string,
      amt: {
        amtLPTake: BigNumberish;
        amtLPWithdraw: BigNumberish;
        amtARepay: BigNumberish;
        amtBRepay: BigNumberish;
        amtLPRepay: BigNumberish;
        amtAMin: BigNumberish;
        amtBMin: BigNumberish;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "router()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sushi(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "sushi()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    werc20(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "werc20()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "weth()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wmasterchef(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wmasterchef()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}