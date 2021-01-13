/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UniswapGoblinConfig } from "../UniswapGoblinConfig";

export class UniswapGoblinConfig__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_oracle: string, overrides?: Overrides): Promise<UniswapGoblinConfig> {
    return super.deploy(
      _oracle,
      overrides || {}
    ) as Promise<UniswapGoblinConfig>;
  }
  getDeployTransaction(
    _oracle: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_oracle, overrides || {});
  }
  attach(address: string): UniswapGoblinConfig {
    return super.attach(address) as UniswapGoblinConfig;
  }
  connect(signer: Signer): UniswapGoblinConfig__factory {
    return super.connect(signer) as UniswapGoblinConfig__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapGoblinConfig {
    return new Contract(address, _abi, signerOrProvider) as UniswapGoblinConfig;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract PriceOracle",
        name: "_oracle",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "goblin",
        type: "address",
      },
    ],
    name: "acceptDebt",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "goblins",
    outputs: [
      {
        internalType: "bool",
        name: "acceptDebt",
        type: "bool",
      },
      {
        internalType: "uint64",
        name: "workFactor",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "killFactor",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "maxPriceDiff",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "goblin",
        type: "address",
      },
    ],
    name: "isStable",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "goblin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "killFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "contract PriceOracle",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addrs",
        type: "address[]",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "acceptDebt",
            type: "bool",
          },
          {
            internalType: "uint64",
            name: "workFactor",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "killFactor",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "maxPriceDiff",
            type: "uint64",
          },
        ],
        internalType: "struct UniswapGoblinConfig.Config[]",
        name: "configs",
        type: "tuple[]",
      },
    ],
    name: "setConfigs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract PriceOracle",
        name: "_oracle",
        type: "address",
      },
    ],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "goblin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "workFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161115d38038061115d83398101604081905261002f916100ac565b60006100396100a8565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600180546001600160a01b0319166001600160a01b03929092169190911790556100da565b3390565b6000602082840312156100bd578081fd5b81516001600160a01b03811681146100d3578182fd5b9392505050565b611074806100e96000396000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c80637dc0d1d0116100715780637dc0d1d0146101265780638da5cb5b1461013b5780639185f6ec14610143578063a71d6f4314610156578063ad58e57314610179578063f2fde38b1461018c576100a8565b80620237f0146100ad5780630e803bf5146100d657806313f6321b146100eb578063715018a61461010b5780637adbf97314610113575b600080fd5b6100c06100bb366004610b90565b61019f565b6040516100cd9190610dba565b60405180910390f35b6100e96100e4366004610bf3565b6101ee565b005b6100fe6100f9366004610bc8565b6103e1565b6040516100cd9190611008565b6100e961043a565b6100e9610121366004610b90565b6104b9565b61012e610510565b6040516100cd9190610d8c565b61012e61051f565b6100c0610151366004610b90565b61052e565b610169610164366004610b90565b610914565b6040516100cd9493929190610dc5565b6100fe610187366004610bc8565b61094f565b6100e961019a366004610b90565b6109a2565b60006101aa8261052e565b6101cf5760405162461bcd60e51b81526004016101c690610ed7565b60405180910390fd5b506001600160a01b031660009081526002602052604090205460ff1690565b6101f6610a58565b6000546001600160a01b039081169116146102235760405162461bcd60e51b81526004016101c690610f62565b828181146102435760405162461bcd60e51b81526004016101c690610fbf565b60005b818110156103d957604051806080016040528085858481811061026557fe5b61027b9260206080909202019081019150610cb5565b1515815260200185858481811061028e57fe5b90506080020160200160208101906102a69190610d64565b67ffffffffffffffff1681526020018585848181106102c157fe5b90506080020160400160208101906102d99190610d64565b67ffffffffffffffff1681526020018585848181106102f457fe5b905060800201606001602081019061030c9190610d64565b67ffffffffffffffff1690526002600088888581811061032857fe5b905060200201602081019061033d9190610b90565b6001600160a01b03168152602080820192909252604090810160002083518154938501519285015160609095015160ff199094169015151768ffffffffffffffff00191661010067ffffffffffffffff938416021770ffffffffffffffff0000000000000000001916600160481b948316949094029390931767ffffffffffffffff60881b1916600160881b9190921602179055600101610246565b505050505050565b60006103ec8361052e565b6104085760405162461bcd60e51b81526004016101c690610ed7565b506001600160a01b038216600090815260026020526040902054600160481b900467ffffffffffffffff165b92915050565b610442610a58565b6000546001600160a01b0390811691161461046f5760405162461bcd60e51b81526004016101c690610f62565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6104c1610a58565b6000546001600160a01b039081169116146104ee5760405162461bcd60e51b81526004016101c690610f62565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031681565b6000546001600160a01b031690565b600080826001600160a01b0316635fcbd2856040518163ffffffff1660e01b815260040160206040518083038186803b15801561056a57600080fd5b505afa15801561057e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a29190610bac565b90506000816001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156105df57600080fd5b505afa1580156105f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106179190610bac565b90506000826001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561065457600080fd5b505afa158015610668573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068c9190610bac565b9050600080846001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156106ca57600080fd5b505afa1580156106de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107029190610cd5565b506001600160701b03918216935016905060006107286001600160a01b03861687610a5c565b9050600061073f6001600160a01b03861688610a5c565b905061074c846065610ae2565b610757836064610ae2565b11156107755760405162461bcd60e51b81526004016101c690610f97565b610780836065610ae2565b61078b826064610ae2565b11156107a95760405162461bcd60e51b81526004016101c690610eaf565b600154604051635620c32d60e11b815260009182916001600160a01b039091169063ac41865a906107e0908b908b90600401610da0565b604080518083038186803b1580156107f757600080fd5b505afa15801561080b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082f9190610d41565b9150915062093a8042038110156108585760405162461bcd60e51b81526004016101c690610ef8565b60006108768761087088670de0b6b3a7640000610ae2565b90610b1c565b6001600160a01b038d16600090815260026020526040902054909150600160881b900467ffffffffffffffff166108b36127106108708684610ae2565b8211156108d25760405162461bcd60e51b81526004016101c690610fe0565b6108e28161087086612710610ae2565b8210156109015760405162461bcd60e51b81526004016101c690610e88565b5060019c9b505050505050505050505050565b60026020526000908152604090205460ff81169067ffffffffffffffff6101008204811691600160481b8104821691600160881b9091041684565b600061095a8361052e565b6109765760405162461bcd60e51b81526004016101c690610ed7565b50506001600160a01b0316600090815260026020526040902054610100900467ffffffffffffffff1690565b6109aa610a58565b6000546001600160a01b039081169116146109d75760405162461bcd60e51b81526004016101c690610f62565b6001600160a01b0381166109fd5760405162461bcd60e51b81526004016101c690610e42565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6040516370a0823160e01b81526000906001600160a01b038416906370a0823190610a8b908590600401610d8c565b60206040518083038186803b158015610aa357600080fd5b505afa158015610ab7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610adb9190610d29565b9392505050565b600082610af157506000610434565b82820282848281610afe57fe5b0414610adb5760405162461bcd60e51b81526004016101c690610f21565b6000610adb83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060008183610b7a5760405162461bcd60e51b81526004016101c69190610def565b506000838581610b8657fe5b0495945050505050565b600060208284031215610ba1578081fd5b8135610adb81611011565b600060208284031215610bbd578081fd5b8151610adb81611011565b60008060408385031215610bda578081fd5b8235610be581611011565b946020939093013593505050565b60008060008060408587031215610c08578182fd5b843567ffffffffffffffff80821115610c1f578384fd5b818701915087601f830112610c32578384fd5b813581811115610c40578485fd5b602089818284028601011115610c54578586fd5b808401975081965080890135935082841115610c6e578586fd5b838901935089601f850112610c81578586fd5b8335915082821115610c91578586fd5b8981608084028601011115610ca4578586fd5b969995985091909501955093505050565b600060208284031215610cc6578081fd5b81358015158114610adb578182fd5b600080600060608486031215610ce9578283fd5b8351610cf481611029565b6020850151909350610d0581611029565b604085015190925063ffffffff81168114610d1e578182fd5b809150509250925092565b600060208284031215610d3a578081fd5b5051919050565b60008060408385031215610d53578182fd5b505080516020909101519092909150565b600060208284031215610d75578081fd5b813567ffffffffffffffff81168114610adb578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b901515815260200190565b931515845267ffffffffffffffff9283166020850152908216604084015216606082015260800190565b6000602080835283518082850152825b81811015610e1b57858101830151858201604001528201610dff565b81811115610e2c5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252600d908201526c707269636520746f6f206c6f7760981b604082015260600190565b6020808252600e908201526d6261642074312062616c616e636560901b604082015260600190565b60208082526007908201526621737461626c6560c81b604082015260600190565b6020808252600f908201526e707269636520746f6f207374616c6560881b604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252600e908201526d6261642074302062616c616e636560901b604082015260600190565b6020808252600790820152663130b2103632b760c91b604082015260600190565b6020808252600e908201526d0e0e4d2c6ca40e8dede40d0d2ced60931b604082015260600190565b90815260200190565b6001600160a01b038116811461102657600080fd5b50565b6001600160701b038116811461102657600080fdfea26469706673582212200f3612162728b209e71f3c443854347aebb1dfcc933efe9f5edaff14aa2dfe3a64736f6c634300060c0033";
