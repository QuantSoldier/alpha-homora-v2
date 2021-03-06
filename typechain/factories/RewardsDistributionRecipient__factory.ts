/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { RewardsDistributionRecipient } from "../RewardsDistributionRecipient";

export class RewardsDistributionRecipient__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardsDistributionRecipient {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RewardsDistributionRecipient;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "notifyRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsDistribution",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
