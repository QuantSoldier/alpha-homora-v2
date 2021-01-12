/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { WStakingRewards } from "../WStakingRewards";

export class WStakingRewards__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _staking: string,
    _underlying: string,
    _reward: string,
    overrides?: Overrides
  ): Promise<WStakingRewards> {
    return super.deploy(
      _staking,
      _underlying,
      _reward,
      overrides || {}
    ) as Promise<WStakingRewards>;
  }
  getDeployTransaction(
    _staking: string,
    _underlying: string,
    _reward: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _staking,
      _underlying,
      _reward,
      overrides || {}
    );
  }
  attach(address: string): WStakingRewards {
    return super.attach(address) as WStakingRewards;
  }
  connect(signer: Signer): WStakingRewards__factory {
    return super.connect(signer) as WStakingRewards__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WStakingRewards {
    return new Contract(address, _abi, signerOrProvider) as WStakingRewards;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "_reward",
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
        name: "",
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
    name: "reward",
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
    inputs: [],
    name: "staking",
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
    inputs: [],
    name: "underlying",
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
  "0x60e06040523480156200001157600080fd5b506040516200270138038062002701833981810160405260608110156200003757600080fd5b5080516020808301516040938401518451808601909552600f85526e575374616b696e675265776172647360881b928501929092529192620000806301ffc9a760e01b62000168565b6200008b81620001ed565b6200009d636cdb3d1360e11b62000168565b620000af6303a24d0760e21b62000168565b50600160049081556001600160601b0319606085811b821660805284811b821660a05283901b1660c0526040805163095ea7b360e01b81526001600160a01b0380871693820193909352600019602482015290519184169163095ea7b3916044808201926020929091908290030181600087803b1580156200013057600080fd5b505af115801562000145573d6000803e3d6000fd5b505050506040513d60208110156200015c57600080fd5b50620002a29350505050565b6001600160e01b03198082161415620001c8576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b80516200020290600390602084019062000206565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200024957805160ff191683800117855562000279565b8280016001018555821562000279579182015b82811115620002795782518255916020019190600101906200025c565b50620002879291506200028b565b5090565b5b808211156200028757600081556001016200028c565b60805160601c60a05160601c60c05160601c6123fc62000305600039806108385280611296525080610cfc5280610d8a5280610fd5528061117f525080610b5a5280610db45280610e345280611083528061110152806111b152506123fc6000f3fe608060405234801561001057600080fd5b50600436106100f45760003560e01c80636f307dc311610097578063af8002df11610066578063af8002df146105d6578063b390c0ab146105f3578063e985e9c514610616578063f242432a14610644576100f4565b80636f307dc314610566578063a0712d681461056e578063a22cb4651461058b578063a4775772146105b9576100f4565b8063228cb733116100d3578063228cb733146102045780632eb2c2d6146102285780634cf088d9146103eb5780634e1273f4146103f3576100f4565b8062fdd58e146100f957806301ffc9a7146101375780630e89341c14610172575b600080fd5b6101256004803603604081101561010f57600080fd5b506001600160a01b03813516906020013561070d565b60408051918252519081900360200190f35b61015e6004803603602081101561014d57600080fd5b50356001600160e01b03191661077f565b604080519115158252519081900360200190f35b61018f6004803603602081101561018857600080fd5b503561079e565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101c95781810151838201526020016101b1565b50505050905090810190601f1680156101f65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61020c610836565b604080516001600160a01b039092168252519081900360200190f35b6103e9600480360360a081101561023e57600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b81111561027157600080fd5b82018360208201111561028357600080fd5b803590602001918460208302840111600160201b831117156102a457600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156102f357600080fd5b82018360208201111561030557600080fd5b803590602001918460208302840111600160201b8311171561032657600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561037557600080fd5b82018360208201111561038757600080fd5b803590602001918460018302840111600160201b831117156103a857600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061085a945050505050565b005b61020c610b58565b6105166004803603604081101561040957600080fd5b810190602081018135600160201b81111561042357600080fd5b82018360208201111561043557600080fd5b803590602001918460208302840111600160201b8311171561045657600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156104a557600080fd5b8201836020820111156104b757600080fd5b803590602001918460208302840111600160201b831117156104d857600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610b7c945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561055257818101518382015260200161053a565b505050509050019250505060405180910390f35b61020c610cfa565b6101256004803603602081101561058457600080fd5b5035610d1e565b6103e9600480360360408110156105a157600080fd5b506001600160a01b0381351690602001351515610ee3565b61020c600480360360208110156105cf57600080fd5b5035610fd2565b610125600480360360208110156105ec57600080fd5b5035610ff7565b6101256004803603604081101561060957600080fd5b5080359060200135611000565b61015e6004803603604081101561062c57600080fd5b506001600160a01b03813581169160200135166112cc565b6103e9600480360360a081101561065a57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b81111561069957600080fd5b8201836020820111156106ab57600080fd5b803590602001918460018302840111600160201b831117156106cc57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506112fa945050505050565b60006001600160a01b0383166107545760405162461bcd60e51b815260040180806020018281038252602b815260200180612194602b913960400191505060405180910390fd5b5060008181526001602090815260408083206001600160a01b03861684529091529020545b92915050565b6001600160e01b03191660009081526020819052604090205460ff1690565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561082a5780601f106107ff5761010080835404028352916020019161082a565b820191906000526020600020905b81548152906001019060200180831161080d57829003601f168201915b50505050509050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b815183511461089a5760405162461bcd60e51b815260040180806020018281038252602881526020018061237e6028913960400191505060405180910390fd5b6001600160a01b0384166108df5760405162461bcd60e51b815260040180806020018281038252602581526020018061223d6025913960400191505060405180910390fd5b6108e76114c5565b6001600160a01b0316856001600160a01b0316148061091257506109128561090d6114c5565b6112cc565b61094d5760405162461bcd60e51b81526004018080602001828103825260328152602001806122626032913960400191505060405180910390fd5b60006109576114c5565b9050610967818787878787610b50565b60005b8451811015610a6857600085828151811061098157fe5b60200260200101519050600085838151811061099957fe5b60200260200101519050610a06816040518060600160405280602a81526020016122b7602a91396001600086815260200190815260200160002060008d6001600160a01b03166001600160a01b03168152602001908152602001600020546114ca9092919063ffffffff16565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a1681522054610a3d9082611561565b60009283526001602081815260408086206001600160a01b038d16875290915290932055500161096a565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610aee578181015183820152602001610ad6565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610b2d578181015183820152602001610b15565b5050505090500194505050505060405180910390a4610b508187878787876115c2565b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60608151835114610bbe5760405162461bcd60e51b81526004018080602001828103825260298152602001806123556029913960400191505060405180910390fd5b6060835167ffffffffffffffff81118015610bd857600080fd5b50604051908082528060200260200182016040528015610c02578160200160208202803683370190505b50905060005b8451811015610cf25760006001600160a01b0316858281518110610c2857fe5b60200260200101516001600160a01b03161415610c765760405162461bcd60e51b81526004018080602001828103825260318152602001806121bf6031913960400191505060405180910390fd5b60016000858381518110610c8657fe5b602002602001015181526020019081526020016000206000868381518110610caa57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054828281518110610cdf57fe5b6020908102919091010152600101610c08565b509392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060026004541415610d78576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600455610db26001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333085611841565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a694fc3a836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610e1857600080fd5b505af1158015610e2c573d6000803e3d6000fd5b5050505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663cd3daf9d6040518163ffffffff1660e01b815260040160206040518083038186803b158015610e8b57600080fd5b505afa158015610e9f573d6000803e3d6000fd5b505050506040513d6020811015610eb557600080fd5b5051604080516020810190915260008152909150610ed8903390839086906118a1565b600160045592915050565b816001600160a01b0316610ef56114c5565b6001600160a01b03161415610f3b5760405162461bcd60e51b81526004018080602001828103825260298152602001806123026029913960400191505060405180910390fd5b8060026000610f486114c5565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610f8c6114c5565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b507f000000000000000000000000000000000000000000000000000000000000000090565b50600160701b90565b60006002600454141561105a576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260045560001982141561107657611073338461070d565b91505b6110813384846119a9565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156110e757600080fd5b505af11580156110fb573d6000803e3d6000fd5b505050507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633d18b9126040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561115a57600080fd5b505af115801561116e573d6000803e3d6000fd5b506111a89250506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690503384611adc565b600083905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663cd3daf9d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561120857600080fd5b505afa15801561121c573d6000803e3d6000fd5b505050506040513d602081101561123257600080fd5b505190506000611254670de0b6b3a764000061124e8588611b33565b90611b8c565b90506000611274670de0b6b3a764000061126e8589611b33565b90611bb3565b9050818111156112bd576112bd3361128c8385611bf5565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169190611adc565b50506001600455949350505050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6001600160a01b03841661133f5760405162461bcd60e51b815260040180806020018281038252602581526020018061223d6025913960400191505060405180910390fd5b6113476114c5565b6001600160a01b0316856001600160a01b0316148061136d575061136d8561090d6114c5565b6113a85760405162461bcd60e51b81526004018080602001828103825260298152602001806122146029913960400191505060405180910390fd5b60006113b26114c5565b90506113d28187876113c388611c37565b6113cc88611c37565b87610b50565b611419836040518060600160405280602a81526020016122b7602a913960008781526001602090815260408083206001600160a01b038d16845290915290205491906114ca565b60008581526001602090815260408083206001600160a01b038b811685529252808320939093558716815220546114509084611561565b60008581526001602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a8416938616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a4610b50818787878787611c7b565b335b90565b600081848411156115595760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561151e578181015183820152602001611506565b50505050905090810190601f16801561154b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000828201838110156115bb576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6115d4846001600160a01b0316611dec565b15610b5057836001600160a01b031663bc197c8187878686866040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561166257818101518382015260200161164a565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156116a1578181015183820152602001611689565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156116dd5781810151838201526020016116c5565b50505050905090810190601f16801561170a5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b15801561172f57600080fd5b505af192505050801561175457506040513d602081101561174f57600080fd5b505160015b6117e957611760612092565b8061176b57506117b2565b60405162461bcd60e51b815260206004820181815283516024840152835184939192839260440191908501908083836000831561151e578181015183820152602001611506565b60405162461bcd60e51b81526004018080602001828103825260348152602001806121386034913960400191505060405180910390fd5b6001600160e01b0319811663bc197c8160e01b146118385760405162461bcd60e51b815260040180806020018281038252602881526020018061216c6028913960400191505060405180910390fd5b50505050505050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261189b908590611df2565b50505050565b6001600160a01b0384166118e65760405162461bcd60e51b81526004018080602001828103825260218152602001806123a66021913960400191505060405180910390fd5b60006118f06114c5565b9050611902816000876113c388611c37565b60008481526001602090815260408083206001600160a01b038916845290915290205461192f9084611561565b60008581526001602090815260408083206001600160a01b03808b16808652918452828520959095558151898152928301889052815190948616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a46119a281600087878787611c7b565b5050505050565b6001600160a01b0383166119ee5760405162461bcd60e51b81526004018080602001828103825260238152602001806122946023913960400191505060405180910390fd5b60006119f86114c5565b9050611a2881856000611a0a87611c37565b611a1387611c37565b60405180602001604052806000815250610b50565b611a6f826040518060600160405280602481526020016121f06024913960008681526001602090815260408083206001600160a01b038b16845290915290205491906114ca565b60008481526001602090815260408083206001600160a01b03808a16808652918452828520959095558151888152928301879052815193949093908616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a450505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611b2e908490611df2565b505050565b600082611b4257506000610779565b82820282848281611b4f57fe5b04146115bb5760405162461bcd60e51b81526004018080602001828103825260218152602001806122e16021913960400191505060405180910390fd5b600081611ba46001611b9e8684611561565b90611bf5565b81611bab57fe5b049392505050565b60006115bb83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611ea3565b60006115bb83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506114ca565b604080516001808252818301909252606091829190602080830190803683370190505090508281600081518110611c6a57fe5b602090810291909101015292915050565b611c8d846001600160a01b0316611dec565b15610b5057836001600160a01b031663f23a6e6187878686866040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611d1c578181015183820152602001611d04565b50505050905090810190601f168015611d495780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b158015611d6c57600080fd5b505af1925050508015611d9157506040513d6020811015611d8c57600080fd5b505160015b611d9d57611760612092565b6001600160e01b0319811663f23a6e6160e01b146118385760405162461bcd60e51b815260040180806020018281038252602881526020018061216c6028913960400191505060405180910390fd5b3b151590565b6060611e47826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611f089092919063ffffffff16565b805190915015611b2e57808060200190516020811015611e6657600080fd5b5051611b2e5760405162461bcd60e51b815260040180806020018281038252602a81526020018061232b602a913960400191505060405180910390fd5b60008183611ef25760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561151e578181015183820152602001611506565b506000838581611efe57fe5b0495945050505050565b6060611f178484600085611f1f565b949350505050565b6060611f2a85611dec565b611f7b576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611fba5780518252601f199092019160209182019101611f9b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461201c576040519150601f19603f3d011682016040523d82523d6000602084013e612021565b606091505b50915091508115612035579150611f179050565b8051156120455780518082602001fd5b60405162461bcd60e51b815260206004820181815286516024840152865187939192839260440191908501908083836000831561151e578181015183820152602001611506565b60e01c90565b600060443d10156120a2576114c7565b600481823e6308c379a06120b6825161208c565b146120c0576114c7565b6040513d600319016004823e80513d67ffffffffffffffff81602484011181841117156120f057505050506114c7565b8284019250825191508082111561210a57505050506114c7565b503d83016020828401011115612122575050506114c7565b601f01601f191681016020016040529150509056fe455243313135353a207472616e7366657220746f206e6f6e2045524331313535526563656976657220696d706c656d656e746572455243313135353a204552433131353552656365697665722072656a656374656420746f6b656e73455243313135353a2062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2062617463682062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a206275726e20616d6f756e7420657863656564732062616c616e6365455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a207472616e7366657220746f20746865207a65726f2061646472657373455243313135353a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a206275726e2066726f6d20746865207a65726f2061646472657373455243313135353a20696e73756666696369656e742062616c616e636520666f72207472616e73666572536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77455243313135353a2073657474696e6720617070726f76616c2073746174757320666f722073656c665361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564455243313135353a206163636f756e747320616e6420696473206c656e677468206d69736d61746368455243313135353a2069647320616e6420616d6f756e7473206c656e677468206d69736d61746368455243313135353a206d696e7420746f20746865207a65726f2061646472657373a264697066735822122062f6d69d80dbba9709b34a235138efa152cef0fde6a39e13f6ae46e2d8611d1564736f6c634300060c0033";
