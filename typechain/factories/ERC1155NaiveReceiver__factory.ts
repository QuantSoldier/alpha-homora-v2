/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC1155NaiveReceiver } from "../ERC1155NaiveReceiver";

export class ERC1155NaiveReceiver__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC1155NaiveReceiver> {
    return super.deploy(overrides || {}) as Promise<ERC1155NaiveReceiver>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155NaiveReceiver {
    return super.attach(address) as ERC1155NaiveReceiver;
  }
  connect(signer: Signer): ERC1155NaiveReceiver__factory {
    return super.connect(signer) as ERC1155NaiveReceiver__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155NaiveReceiver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155NaiveReceiver;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100216301ffc9a760e01b610036565b610031630271189760e51b610036565b6100ba565b6001600160e01b03198082161415610095576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b6102d3806100c96000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a714610046578063bc197c8114610081578063f23a6e61146101c5575b600080fd5b61006d6004803603602081101561005c57600080fd5b50356001600160e01b031916610258565b604080519115158252519081900360200190f35b6101a8600480360360a081101561009757600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156100ca57600080fd5b8201836020820111156100dc57600080fd5b803590602001918460208302840111600160201b831117156100fd57600080fd5b919390929091602081019035600160201b81111561011a57600080fd5b82018360208201111561012c57600080fd5b803590602001918460208302840111600160201b8311171561014d57600080fd5b919390929091602081019035600160201b81111561016a57600080fd5b82018360208201111561017c57600080fd5b803590602001918460018302840111600160201b8311171561019d57600080fd5b509092509050610277565b604080516001600160e01b03199092168252519081900360200190f35b6101a8600480360360a08110156101db57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b81111561021a57600080fd5b82018360208201111561022c57600080fd5b803590602001918460018302840111600160201b8311171561024d57600080fd5b50909250905061028b565b6001600160e01b03191660009081526020819052604090205460ff1690565b63bc197c8160e01b98975050505050505050565b63f23a6e6160e01b969550505050505056fea26469706673582212207e0c7be30ce2871e9bdf144cd43f8e7518be866bfa10ed3396b384f9e5abf23664736f6c634300060c0033";