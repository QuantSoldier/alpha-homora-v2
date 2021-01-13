/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { WLiquidityGauge } from "../WLiquidityGauge";

export class WLiquidityGauge__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _registry: string,
    _crv: string,
    overrides?: Overrides
  ): Promise<WLiquidityGauge> {
    return super.deploy(
      _registry,
      _crv,
      overrides || {}
    ) as Promise<WLiquidityGauge>;
  }
  getDeployTransaction(
    _registry: string,
    _crv: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_registry, _crv, overrides || {});
  }
  attach(address: string): WLiquidityGauge {
    return super.attach(address) as WLiquidityGauge;
  }
  connect(signer: Signer): WLiquidityGauge__factory {
    return super.connect(signer) as WLiquidityGauge__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WLiquidityGauge {
    return new Contract(address, _abi, signerOrProvider) as WLiquidityGauge;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICurveRegistry",
        name: "_registry",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_crv",
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
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "crv",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "decodeId",
    outputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "crvPerShare",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "crvPerShare",
        type: "uint256",
      },
    ],
    name: "encodeId",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "gauges",
    outputs: [
      {
        internalType: "contract ILiquidityGauge",
        name: "impl",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "accCrvPerShare",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getUnderlyingRate",
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
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getUnderlyingToken",
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
    name: "governor",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingGovernor",
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
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gid",
        type: "uint256",
      },
    ],
    name: "registerGauge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "contract ICurveRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pendingGovernor",
        type: "address",
      },
    ],
    name: "setPendingGovernor",
    outputs: [],
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620032f6380380620032f6833981810160405260408110156200003757600080fd5b50805160209182015160408051808201909152600f81526e574c6971756964697479476175676560881b9381019390935290916200007c6301ffc9a760e01b620000da565b62000087816200015f565b62000099636cdb3d1360e11b620000da565b620000ab6303a24d0760e21b620000da565b506001600455620000bb62000178565b6001600160601b0319606092831b8116608052911b1660a052620002ed565b6001600160e01b031980821614156200013a576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b80516200017490600390602084019062000251565b5050565b600554610100900460ff1680620001945750620001946200024b565b80620001a3575060055460ff16155b620001e05760405162461bcd60e51b815260040180806020018281038252602e815260200180620032c8602e913960400191505060405180910390fd5b600554610100900460ff161580156200020c576005805460ff1961ff0019909116610100171660011790555b6005805462010000600160b01b031916336201000002179055600680546001600160a01b0319169055801562000248576005805461ff00191690555b50565b303b1590565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200029457805160ff1916838001178555620002c4565b82800160010185558215620002c4579182015b82811115620002c4578251825591602001919060010190620002a7565b50620002d2929150620002d6565b5090565b5b80821115620002d25760008155600101620002d7565b60805160601c60a05160601c612f9862000330600039806115935280611a035280611d8d5280611ed9525080610c5e5280610d3d52806115b75250612f986000f3fe608060405234801561001057600080fd5b50600436106101415760003560e01c80637b103999116100b8578063dc20c6fa1161007c578063dc20c6fa14610701578063e3056a341461073c578063e58bb63914610744578063e985e9c51461074c578063f235757f1461077a578063f242432a146107a057610141565b80637b1039991461066e578063a22cb46514610676578063a4775772146106a4578063af8002df146106c1578063b390c0ab146106de57610141565b80631175e0771161010a5780631175e0771461029e5780632eb2c2d6146102c35780634548ff84146104845780634e1273f4146104ad5780635a1994c4146106205780636a4874a11461066657610141565b8062fdd58e1461014657806301ffc9a71461018457806302acc94b146101bf5780630c340a24146101e85780630e89341c1461020c575b600080fd5b6101726004803603604081101561015c57600080fd5b506001600160a01b038135169060200135610869565b60408051918252519081900360200190f35b6101ab6004803603602081101561019a57600080fd5b50356001600160e01b0319166108db565b604080519115158252519081900360200190f35b610172600480360360608110156101d557600080fd5b50803590602081013590604001356108fa565b6101f0610ae9565b604080516001600160a01b039092168252519081900360200190f35b6102296004803603602081101561022257600080fd5b5035610afe565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561026357818101518382015260200161024b565b50505050905090810190601f1680156102905780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c1600480360360408110156102b457600080fd5b5080359060200135610b96565b005b6102c1600480360360a08110156102d957600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b81111561030c57600080fd5b82018360208201111561031e57600080fd5b803590602001918460208302840111600160201b8311171561033f57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561038e57600080fd5b8201836020820111156103a057600080fd5b803590602001918460208302840111600160201b831117156103c157600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561041057600080fd5b82018360208201111561042257600080fd5b803590602001918460018302840111600160201b8311171561044357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611002945050505050565b6101726004803603606081101561049a57600080fd5b5080359060208101359060400135611300565b6105d0600480360360408110156104c357600080fd5b810190602081018135600160201b8111156104dd57600080fd5b8201836020820111156104ef57600080fd5b803590602001918460208302840111600160201b8311171561051057600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561055f57600080fd5b82018360208201111561057157600080fd5b803590602001918460208302840111600160201b8311171561059257600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506113e3945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561060c5781810151838201526020016105f4565b505050509050019250505060405180910390f35b6106436004803603604081101561063657600080fd5b5080359060200135611561565b604080516001600160a01b03909316835260208301919091528051918290030190f35b6101f0611591565b6101f06115b5565b6102c16004803603604081101561068c57600080fd5b506001600160a01b03813516906020013515156115d9565b6101f0600480360360208110156106ba57600080fd5b50356116c8565b610172600480360360208110156106d757600080fd5b50356117aa565b610172600480360360408110156106f457600080fd5b50803590602001356117b3565b61071e6004803603602081101561071757600080fd5b5035611a3d565b60408051938452602084019290925282820152519081900360600190f35b6101f0611a58565b6102c1611a67565b6101ab6004803603604081101561076257600080fd5b506001600160a01b0381358116916020013516611af1565b6102c16004803603602081101561079057600080fd5b50356001600160a01b0316611b1f565b6102c1600480360360a08110156107b657600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b8111156107f557600080fd5b82018360208201111561080757600080fd5b803590602001918460018302840111600160201b8311171561082857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611b99945050505050565b60006001600160a01b0383166108b05760405162461bcd60e51b815260040180806020018281038252602b815260200180612d30602b913960400191505060405180910390fd5b5060008181526001602090815260408083206001600160a01b03861684529091529020545b92915050565b6001600160e01b03191660009081526020819052604090205460ff1690565b600060026004541415610954576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026004556000848152600760209081526040808320868452909152902080546001600160a01b0316806109c6576040805162461bcd60e51b815260206004820152601460248201527319d85d59d9481b9bdd081c9959da5cdd195c995960621b604482015290519081900360640190fd5b6109cf82611d64565b6000816001600160a01b03166382c630666040518163ffffffff1660e01b815260040160206040518083038186803b158015610a0a57600080fd5b505afa158015610a1e573d6000803e3d6000fd5b505050506040513d6020811015610a3457600080fd5b50519050610a4d6001600160a01b038216333088612042565b816001600160a01b031663b6b55f25866040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610a9357600080fd5b505af1158015610aa7573d6000803e3d6000fd5b505050506000610abc88888660010154611300565b9050610ad9338288604051806020016040528060008152506120a2565b6001600455979650505050505050565b6005546201000090046001600160a01b031681565b60038054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610b8a5780601f10610b5f57610100808354040283529160200191610b8a565b820191906000526020600020905b815481529060010190602001808311610b6d57829003601f168201915b50505050509050919050565b6005546201000090046001600160a01b03163314610bee576040805162461bcd60e51b815260206004820152601060248201526f3737ba103a34329033b7bb32b93737b960811b604482015290519081900360640190fd5b60008281526007602090815260408083208484529091529020546001600160a01b031615610c5a576040805162461bcd60e51b8152602060048201526014602482015273676175676520616c72656164792065786973747360601b604482015290519081900360640190fd5b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633a1d5d8e846040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610cc057600080fd5b505afa158015610cd4573d6000803e3d6000fd5b505050506040513d6020811015610cea57600080fd5b505190506001600160a01b038116610d33576040805162461bcd60e51b81526020600482015260076024820152661b9bc81c1bdbdb60ca1b604482015290519081900360640190fd5b610d3b612c09565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166356059ffb836040518263ffffffff1660e01b815260040180826001600160a01b031681526020019150506102806040518083038186803b158015610da957600080fd5b505afa158015610dbd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610280811015610de357600080fd5b50905060008184600a8110610df457fe5b602002015190506001600160a01b038116610e41576040805162461bcd60e51b81526020600482015260086024820152676e6f20676175676560c01b604482015290519081900360640190fd5b6000816001600160a01b03166382c630666040518163ffffffff1660e01b815260040160206040518083038186803b158015610e7c57600080fd5b505afa158015610e90573d6000803e3d6000fd5b505050506040513d6020811015610ea657600080fd5b50516040805163095ea7b360e01b81526001600160a01b038581166004830152600060248301819052925193945084169263095ea7b392604480840193602093929083900390910190829087803b158015610f0057600080fd5b505af1158015610f14573d6000803e3d6000fd5b505050506040513d6020811015610f2a57600080fd5b50506040805163095ea7b360e01b81526001600160a01b038481166004830152600019602483015291519183169163095ea7b3916044808201926020929091908290030181600087803b158015610f8057600080fd5b505af1158015610f94573d6000803e3d6000fd5b505050506040513d6020811015610faa57600080fd5b50506040805180820182526001600160a01b0393841681526000602080830182815299825260078152838220988252979097529520945185546001600160a01b03191692169190911784555050915160019091015550565b81518351146110425760405162461bcd60e51b8152600401808060200182810382526028815260200180612f1a6028913960400191505060405180910390fd5b6001600160a01b0384166110875760405162461bcd60e51b8152600401808060200182810382526025815260200180612dd96025913960400191505060405180910390fd5b61108f6121aa565b6001600160a01b0316856001600160a01b031614806110ba57506110ba856110b56121aa565b611af1565b6110f55760405162461bcd60e51b8152600401808060200182810382526032815260200180612dfe6032913960400191505060405180910390fd5b60006110ff6121aa565b905061110f8187878787876112f8565b60005b845181101561121057600085828151811061112957fe5b60200260200101519050600085838151811061114157fe5b602002602001015190506111ae816040518060600160405280602a8152602001612e53602a91396001600086815260200190815260200160002060008d6001600160a01b03166001600160a01b03168152602001908152602001600020546121af9092919063ffffffff16565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a16815220546111e59082612246565b60009283526001602081815260408086206001600160a01b038d168752909152909320555001611112565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561129657818101518382015260200161127e565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156112d55781810151838201526020016112bd565b5050505090500194505050505060405180910390a46112f88187878787876122a7565b505050505050565b60006101008410611342576040805162461bcd60e51b8152602060048201526007602482015266189859081c1a5960ca1b604482015290519081900360640190fd5b6101008310611382576040805162461bcd60e51b81526020600482015260076024820152661898590819da5960ca1b604482015290519081900360640190fd5b600160f01b82106113ce576040805162461bcd60e51b8152602060048201526011602482015270626164206372762070657220736861726560781b604482015290519081900360640190fd5b5060f883901b60f083901b1781179392505050565b606081518351146114255760405162461bcd60e51b8152600401808060200182810382526029815260200180612ef16029913960400191505060405180910390fd5b6060835167ffffffffffffffff8111801561143f57600080fd5b50604051908082528060200260200182016040528015611469578160200160208202803683370190505b50905060005b84518110156115595760006001600160a01b031685828151811061148f57fe5b60200260200101516001600160a01b031614156114dd5760405162461bcd60e51b8152600401808060200182810382526031815260200180612d5b6031913960400191505060405180910390fd5b600160008583815181106114ed57fe5b60200260200101518152602001908152602001600020600086838151811061151157fe5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000205482828151811061154657fe5b602090810291909101015260010161146f565b509392505050565b6007602090815260009283526040808420909152908252902080546001909101546001600160a01b039091169082565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b816001600160a01b03166115eb6121aa565b6001600160a01b031614156116315760405162461bcd60e51b8152600401808060200182810382526029815260200180612e9e6029913960400191505060405180910390fd5b806002600061163e6121aa565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff1916921515929092179091556116826121aa565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b60008060006116d684611a3d565b50600082815260076020908152604080832084845290915290205491935091506001600160a01b03168061173c576040805162461bcd60e51b81526020600482015260086024820152676e6f20676175676560c01b604482015290519081900360640190fd5b806001600160a01b03166382c630666040518163ffffffff1660e01b815260040160206040518083038186803b15801561177557600080fd5b505afa158015611789573d6000803e3d6000fd5b505050506040513d602081101561179f57600080fd5b505195945050505050565b50600160701b90565b60006002600454141561180d576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600455600019821415611829576118263384610869565b91505b600080600061183786611a3d565b925092509250611848338787612526565b6000838152600760209081526040808320858452909152902080546001600160a01b0316806118b5576040805162461bcd60e51b815260206004820152601460248201527319d85d59d9481b9bdd081c9959da5cdd195c995960621b604482015290519081900360640190fd5b6118be82611d64565b806001600160a01b0316632e1a7d4d886040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561190457600080fd5b505af1158015611918573d6000803e3d6000fd5b505050506119963388836001600160a01b03166382c630666040518163ffffffff1660e01b815260040160206040518083038186803b15801561195a57600080fd5b505afa15801561196e573d6000803e3d6000fd5b505050506040513d602081101561198457600080fd5b50516001600160a01b03169190612659565b60006119b4670de0b6b3a76400006119ae868b6126b0565b90612709565b905060006119e1670de0b6b3a76400006119db8b87600101546126b090919063ffffffff16565b90612730565b905081811115611a2a57611a2a336119f98385612772565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190612659565b5050600160045550929695505050505050565b60f881901c9160ff60f083901c16916001600160f01b031690565b6006546001600160a01b031681565b6006546001600160a01b03163314611ac6576040805162461bcd60e51b815260206004820152601860248201527f6e6f74207468652070656e64696e6720676f7665726e6f720000000000000000604482015290519081900360640190fd5b600680546001600160a01b03191690556005805462010000600160b01b031916336201000002179055565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6005546201000090046001600160a01b03163314611b77576040805162461bcd60e51b815260206004820152601060248201526f3737ba103a34329033b7bb32b93737b960811b604482015290519081900360640190fd5b600680546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038416611bde5760405162461bcd60e51b8152600401808060200182810382526025815260200180612dd96025913960400191505060405180910390fd5b611be66121aa565b6001600160a01b0316856001600160a01b03161480611c0c5750611c0c856110b56121aa565b611c475760405162461bcd60e51b8152600401808060200182810382526029815260200180612db06029913960400191505060405180910390fd5b6000611c516121aa565b9050611c71818787611c62886127b4565b611c6b886127b4565b876112f8565b611cb8836040518060600160405280602a8152602001612e53602a913960008781526001602090815260408083206001600160a01b038d16845290915290205491906121af565b60008581526001602090815260408083206001600160a01b038b81168552925280832093909355871681522054611cef9084612246565b60008581526001602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a8416938616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a46112f88187878787876127f8565b8054604080516370a0823160e01b815230600482015290516001600160a01b03928316926000927f0000000000000000000000000000000000000000000000000000000000000000909116916370a0823191602480820192602092909190829003018186803b158015611dd657600080fd5b505afa158015611dea573d6000803e3d6000fd5b505050506040513d6020811015611e0057600080fd5b5051604080516303aa30b960e11b815290519192506001600160a01b03841691630754617291600480820192602092909190829003018186803b158015611e4657600080fd5b505afa158015611e5a573d6000803e3d6000fd5b505050506040513d6020811015611e7057600080fd5b5051604080516335313c2160e11b81526001600160a01b03858116600483015291519190921691636a62784291602480830192600092919082900301818387803b158015611ebd57600080fd5b505af1158015611ed1573d6000803e3d6000fd5b5050505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015611f4457600080fd5b505afa158015611f58573d6000803e3d6000fd5b505050506040513d6020811015611f6e57600080fd5b505190506000611f7e8284612772565b90506000846001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015611fcf57600080fd5b505afa158015611fe3573d6000803e3d6000fd5b505050506040513d6020811015611ff957600080fd5b50519050811580159061200c5750600081115b156112f85761203561202a826119db85670de0b6b3a76400006126b0565b600188015490612246565b6001870155505050505050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261209c908590612969565b50505050565b6001600160a01b0384166120e75760405162461bcd60e51b8152600401808060200182810382526021815260200180612f426021913960400191505060405180910390fd5b60006120f16121aa565b905061210381600087611c62886127b4565b60008481526001602090815260408083206001600160a01b03891684529091529020546121309084612246565b60008581526001602090815260408083206001600160a01b03808b16808652918452828520959095558151898152928301889052815190948616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a46121a3816000878787876127f8565b5050505050565b335b90565b6000818484111561223e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156122035781810151838201526020016121eb565b50505050905090810190601f1680156122305780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156122a0576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6122b9846001600160a01b0316612a1a565b156112f857836001600160a01b031663bc197c8187878686866040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561234757818101518382015260200161232f565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561238657818101518382015260200161236e565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156123c25781810151838201526020016123aa565b50505050905090810190601f1680156123ef5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b15801561241457600080fd5b505af192505050801561243957506040513d602081101561243457600080fd5b505160015b6124ce57612445612c2e565b806124505750612497565b60405162461bcd60e51b81526020600482018181528351602484015283518493919283926044019190850190808383600083156122035781810151838201526020016121eb565b60405162461bcd60e51b8152600401808060200182810382526034815260200180612cd46034913960400191505060405180910390fd5b6001600160e01b0319811663bc197c8160e01b1461251d5760405162461bcd60e51b8152600401808060200182810382526028815260200180612d086028913960400191505060405180910390fd5b50505050505050565b6001600160a01b03831661256b5760405162461bcd60e51b8152600401808060200182810382526023815260200180612e306023913960400191505060405180910390fd5b60006125756121aa565b90506125a581856000612587876127b4565b612590876127b4565b604051806020016040528060008152506112f8565b6125ec82604051806060016040528060248152602001612d8c6024913960008681526001602090815260408083206001600160a01b038b16845290915290205491906121af565b60008481526001602090815260408083206001600160a01b03808a16808652918452828520959095558151888152928301879052815193949093908616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a450505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526126ab908490612969565b505050565b6000826126bf575060006108d5565b828202828482816126cc57fe5b04146122a05760405162461bcd60e51b8152600401808060200182810382526021815260200180612e7d6021913960400191505060405180910390fd5b600081612721600161271b8684612246565b90612772565b8161272857fe5b049392505050565b60006122a083836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250612a20565b60006122a083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506121af565b6040805160018082528183019092526060918291906020808301908036833701905050905082816000815181106127e757fe5b602090810291909101015292915050565b61280a846001600160a01b0316612a1a565b156112f857836001600160a01b031663f23a6e6187878686866040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612899578181015183820152602001612881565b50505050905090810190601f1680156128c65780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b1580156128e957600080fd5b505af192505050801561290e57506040513d602081101561290957600080fd5b505160015b61291a57612445612c2e565b6001600160e01b0319811663f23a6e6160e01b1461251d5760405162461bcd60e51b8152600401808060200182810382526028815260200180612d086028913960400191505060405180910390fd5b60606129be826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316612a859092919063ffffffff16565b8051909150156126ab578080602001905160208110156129dd57600080fd5b50516126ab5760405162461bcd60e51b815260040180806020018281038252602a815260200180612ec7602a913960400191505060405180910390fd5b3b151590565b60008183612a6f5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156122035781810151838201526020016121eb565b506000838581612a7b57fe5b0495945050505050565b6060612a948484600085612a9c565b949350505050565b6060612aa785612a1a565b612af8576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310612b375780518252601f199092019160209182019101612b18565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612b99576040519150601f19603f3d011682016040523d82523d6000602084013e612b9e565b606091505b50915091508115612bb2579150612a949050565b805115612bc25780518082602001fd5b60405162461bcd60e51b81526020600482018181528651602484015286518793919283926044019190850190808383600083156122035781810151838201526020016121eb565b604051806101400160405280600a906020820280368337509192915050565b60e01c90565b600060443d1015612c3e576121ac565b600481823e6308c379a0612c528251612c28565b14612c5c576121ac565b6040513d600319016004823e80513d67ffffffffffffffff8160248401118184111715612c8c57505050506121ac565b82840192508251915080821115612ca657505050506121ac565b503d83016020828401011115612cbe575050506121ac565b601f01601f191681016020016040529150509056fe455243313135353a207472616e7366657220746f206e6f6e2045524331313535526563656976657220696d706c656d656e746572455243313135353a204552433131353552656365697665722072656a656374656420746f6b656e73455243313135353a2062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2062617463682062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a206275726e20616d6f756e7420657863656564732062616c616e6365455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a207472616e7366657220746f20746865207a65726f2061646472657373455243313135353a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a206275726e2066726f6d20746865207a65726f2061646472657373455243313135353a20696e73756666696369656e742062616c616e636520666f72207472616e73666572536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77455243313135353a2073657474696e6720617070726f76616c2073746174757320666f722073656c665361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564455243313135353a206163636f756e747320616e6420696473206c656e677468206d69736d61746368455243313135353a2069647320616e6420616d6f756e7473206c656e677468206d69736d61746368455243313135353a206d696e7420746f20746865207a65726f2061646472657373a264697066735822122023ecb558802f984df514f48a0e48369c3fec546f8fe4e5a569897bb2a8374f4764736f6c634300060c0033496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564";
