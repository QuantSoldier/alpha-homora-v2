/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ProxyOracle } from "../ProxyOracle";

export class ProxyOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_source: string, overrides?: Overrides): Promise<ProxyOracle> {
    return super.deploy(_source, overrides || {}) as Promise<ProxyOracle>;
  }
  getDeployTransaction(
    _source: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_source, overrides || {});
  }
  attach(address: string): ProxyOracle {
    return super.attach(address) as ProxyOracle;
  }
  connect(signer: Signer): ProxyOracle__factory {
    return super.connect(signer) as ProxyOracle__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyOracle {
    return new Contract(address, _abi, signerOrProvider) as ProxyOracle;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IBaseOracle",
        name: "_source",
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
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "borrowFactor",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "collateralFactor",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "liqIncentive",
            type: "uint16",
          },
        ],
        indexed: false,
        internalType: "struct ProxyOracle.Oracle",
        name: "info",
        type: "tuple",
      },
    ],
    name: "SetOracle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "ok",
        type: "bool",
      },
    ],
    name: "SetWhitelist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "UnsetOracle",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "asETHBorrow",
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
        internalType: "address",
        name: "token",
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
    ],
    name: "asETHCollateral",
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
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenOutId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "convertForLiquidation",
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
        name: "",
        type: "address",
      },
    ],
    name: "oracles",
    outputs: [
      {
        internalType: "uint16",
        name: "borrowFactor",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "collateralFactor",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "liqIncentive",
        type: "uint16",
      },
    ],
    stateMutability: "view",
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
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "borrowFactor",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "collateralFactor",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "liqIncentive",
            type: "uint16",
          },
        ],
        internalType: "struct ProxyOracle.Oracle[]",
        name: "info",
        type: "tuple[]",
      },
    ],
    name: "setOracles",
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
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "ok",
        type: "bool",
      },
    ],
    name: "setWhitelistERC1155",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "support",
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
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "unsetOracles",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "whitelistERC1155",
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
  "0x60a06040523480156200001157600080fd5b50604051620019873803806200198783398101604081905262000034916200011b565b6001600160601b0319606082901b166080526200005062000057565b5062000199565b600054610100900460ff16806200007357506200007362000115565b8062000082575060005460ff16155b620000aa5760405162461bcd60e51b8152600401620000a1906200014b565b60405180910390fd5b600054610100900460ff16158015620000d6576000805460ff1961ff0019909116610100171660011790555b6000805462010000600160b01b031916336201000002179055600180546001600160a01b0319169055801562000112576000805461ff00191690555b50565b303b1590565b6000602082840312156200012d578081fd5b81516001600160a01b038116811462000144578182fd5b9392505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60805160601c6117c1620001c6600039806103cc52806109ae5280610d725280610dfd52506117c16000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80637790b6af1161008c578063c38e795c11610066578063c38e795c146101b5578063e3056a34146101c8578063e58bb639146101d0578063f235757f146101d8576100cf565b80637790b6af1461016d5780637851323014610180578063addd509914610193576100cf565b80630744addc146100d45780630c340a24146100fd5780630cab20701461011257806336c96cc014610127578063446f033f14610147578063495621fb1461015a575b600080fd5b6100e76100e23660046111ba565b6101eb565b6040516100f49190611723565b60405180910390f35b61010561049c565b6040516100f49190611395565b6101256101203660046111ee565b6104b1565b005b61013a61013536600461118f565b6105ed565b6040516100f49190611401565b610125610155366004611229565b6106c3565b61013a610168366004611112565b610914565b6100e761017b36600461118f565b610929565b61012561018e366004611329565b610a24565b6101a66101a1366004611112565b610b04565b6040516100f493929190611705565b6100e76101c336600461114a565b610b2f565b610105610efe565b610125610f0d565b6101256101e6366004611112565b610f62565b6001600160a01b03831660009081526003602052604081205460ff1661022c5760405162461bcd60e51b815260040161022390611523565b60405180910390fd5b60405163523babb960e11b81526000906001600160a01b0386169063a47757729061025b908790600401611723565b60206040518083038186803b15801561027357600080fd5b505afa158015610287573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ab919061112e565b90506000856001600160a01b031663af8002df866040518263ffffffff1660e01b81526004016102db9190611723565b60206040518083038186803b1580156102f357600080fd5b505afa158015610307573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061032b919061137d565b90506000610347600160701b6103418785610fb4565b90610ff5565b9050610351611069565b506001600160a01b0383166000908152600260209081526040918290208251606081018452905461ffff8082168352620100008204811693830193909352600160201b9004909116918101829052906103bc5760405162461bcd60e51b81526004016102239061145f565b600061046c600160701b610341857f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ab9aadfe8a6040518263ffffffff1660e01b81526004016104169190611395565b60206040518083038186803b15801561042e57600080fd5b505afa158015610442573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610466919061137d565b90610fb4565b905061048f612710610341846020015161ffff1684610fb490919063ffffffff16565b9998505050505050505050565b6000546201000090046001600160a01b031681565b6000546201000090046001600160a01b031633146104e15760405162461bcd60e51b8152600401610223906114f9565b60005b81518110156105e9576040518060600160405280600061ffff168152602001600061ffff168152602001600061ffff168152506002600084848151811061052757fe5b6020908102919091018101516001600160a01b031682528181019290925260409081016000208351815493850151949092015161ffff1990931661ffff9283161763ffff0000191662010000948316949094029390931765ffff000000001916600160201b919092160217905581517f16faa10a7fdc21b8be670780521991b3b134bbe64fa43756c0b57bda2c20a2ec908390839081106105c457fe5b60200260200101516040516105d99190611395565b60405180910390a16001016104e4565b5050565b6001600160a01b03821660009081526003602052604081205460ff16610615575060006106bd565b60405163523babb960e11b81526000906001600160a01b0385169063a477577290610644908690600401611723565b60206040518083038186803b15801561065c57600080fd5b505afa158015610670573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610694919061112e565b6001600160a01b0316600090815260026020526040902054600160201b900461ffff1615159150505b92915050565b6000546201000090046001600160a01b031633146106f35760405162461bcd60e51b8152600401610223906114f9565b80518251146107145760405162461bcd60e51b8152600401610223906116a1565b60005b825181101561090f5761271082828151811061072f57fe5b60200260200101516000015161ffff16101561075d5760405162461bcd60e51b815260040161022390611633565b61271082828151811061076c57fe5b60200260200101516020015161ffff16111561079a5760405162461bcd60e51b8152600401610223906115b6565b6127108282815181106107a957fe5b60200260200101516040015161ffff1610156107d75760405162461bcd60e51b8152600401610223906115fc565b614e208282815181106107e657fe5b60200260200101516040015161ffff1611156108145760405162461bcd60e51b8152600401610223906116ce565b81818151811061082057fe5b60200260200101516002600085848151811061083857fe5b6020908102919091018101516001600160a01b031682528181019290925260409081016000208351815493850151949092015161ffff1990931661ffff9283161763ffff0000191662010000948316949094029390931765ffff000000001916600160201b919092160217905582517fc72e42f766aa8b5d544af248fe6808c0efdf908b4907c0c984bedd9b594847d5908490839081106108d557fe5b60200260200101518383815181106108e957fe5b60200260200101516040516108ff9291906113c4565b60405180910390a1600101610717565b505050565b60036020526000908152604090205460ff1681565b6000610933611069565b506001600160a01b0383166000908152600260209081526040918290208251606081018452905461ffff8082168352620100008204811693830193909352600160201b90049091169181018290529061099e5760405162461bcd60e51b815260040161022390611546565b60006109f8600160701b610341867f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ab9aadfe8a6040518263ffffffff1660e01b81526004016104169190611395565b9050610a1b612710610341846000015161ffff1684610fb490919063ffffffff16565b95945050505050565b6000546201000090046001600160a01b03163314610a545760405162461bcd60e51b8152600401610223906114f9565b60005b825181101561090f578160036000858481518110610a7157fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff0219169083151502179055507ff6019ec0a78d156d249a1ec7579e2321f6ac7521d6e1d2eacf90ba4a184dcceb838281518110610add57fe5b602002602001015183604051610af49291906113a9565b60405180910390a1600101610a57565b60026020526000908152604090205461ffff80821691620100008104821691600160201b9091041683565b6001600160a01b03831660009081526003602052604081205460ff16610b675760405162461bcd60e51b815260040161022390611523565b60405163523babb960e11b81526000906001600160a01b0386169063a477577290610b96908790600401611723565b60206040518083038186803b158015610bae57600080fd5b505afa158015610bc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be6919061112e565b90506000856001600160a01b031663af8002df866040518263ffffffff1660e01b8152600401610c169190611723565b60206040518083038186803b158015610c2e57600080fd5b505afa158015610c42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c66919061137d565b9050610c70611069565b506001600160a01b0387166000908152600260209081526040918290208251606081018452905461ffff8082168352620100008204811693830193909352600160201b900490911691810191909152610cc7611069565b506001600160a01b0383166000908152600260209081526040918290208251606081018452905461ffff8082168352620100008204811693830193909352600160201b90048216818401529183015116610d335760405162461bcd60e51b815260040161022390611676565b604081015161ffff16610d585760405162461bcd60e51b815260040161022390611496565b6040516355cd56ff60e11b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ab9aadfe90610da7908d90600401611395565b60206040518083038186803b158015610dbf57600080fd5b505afa158015610dd3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df7919061137d565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ab9aadfe876040518263ffffffff1660e01b8152600401610e479190611395565b60206040518083038186803b158015610e5f57600080fd5b505afa158015610e73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e97919061137d565b90506000610ea9826103418b86610fb4565b9050610ebd8661034183600160701b610fb4565b9050610eee6305f5e100610341866040015161ffff16610466896040015161ffff1686610fb490919063ffffffff16565b9c9b505050505050505050505050565b6001546001600160a01b031681565b6001546001600160a01b03163314610f375760405162461bcd60e51b8152600401610223906114c2565b600180546001600160a01b03191690556000805462010000600160b01b031916336201000002179055565b6000546201000090046001600160a01b03163314610f925760405162461bcd60e51b8152600401610223906114f9565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600082610fc3575060006106bd565b82820282848281610fd057fe5b0414610fee5760405162461bcd60e51b815260040161022390611575565b9392505050565b6000610fee83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250600081836110535760405162461bcd60e51b8152600401610223919061140c565b50600083858161105f57fe5b0495945050505050565b604080516060810182526000808252602082018190529181019190915290565b600082601f830112611099578081fd5b81356110ac6110a782611753565b61172c565b8181529150602080830190848101818402860182018710156110cd57600080fd5b60005b848110156110f55781356110e381611773565b845292820192908201906001016110d0565b505050505092915050565b803561ffff811681146106bd57600080fd5b600060208284031215611123578081fd5b8135610fee81611773565b60006020828403121561113f578081fd5b8151610fee81611773565b6000806000806080858703121561115f578283fd5b843561116a81611773565b9350602085013561117a81611773565b93969395505050506040820135916060013590565b600080604083850312156111a1578182fd5b82356111ac81611773565b946020939093013593505050565b6000806000606084860312156111ce578283fd5b83356111d981611773565b95602085013595506040909401359392505050565b6000602082840312156111ff578081fd5b813567ffffffffffffffff811115611215578182fd5b61122184828501611089565b949350505050565b600080604080848603121561123c578283fd5b833567ffffffffffffffff80821115611253578485fd5b61125f87838801611089565b9450602091508186013581811115611275578485fd5b86019050601f81018713611287578384fd5b80356112956110a782611753565b818152838101908385016060808502860187018c10156112b3578889fd5b8895505b848610156113185780828d0312156112cd578889fd5b6112d68161172c565b6112e08d84611100565b81526112ee8d898501611100565b888201526112fe8d8a8501611100565b818a015284526001959095019492860192908101906112b7565b50979a909950975050505050505050565b6000806040838503121561133b578182fd5b823567ffffffffffffffff811115611351578283fd5b61135d85828601611089565b92505060208301358015158114611372578182fd5b809150509250929050565b60006020828403121561138e578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b039290921682521515602082015260400190565b6001600160a01b03929092168252805161ffff90811660208085019190915282015181166040808501919091529091015116606082015260800190565b901515815260200190565b6000602080835283518082850152825b818110156114385785810183015185820160400152820161141c565b818111156114495783604083870101525b50601f01601f1916929092016040019392505050565b60208082526019908201527f62616420756e6465726c79696e6720636f6c6c61746572616c00000000000000604082015260600190565b602080825260129082015271189859081d5b99195c9b1e5a5b99c81bdd5d60721b604082015260600190565b60208082526018908201527f6e6f74207468652070656e64696e6720676f7665726e6f720000000000000000604082015260600190565b60208082526010908201526f3737ba103a34329033b7bb32b93737b960811b604082015260600190565b6020808252600990820152683130b2103a37b5b2b760b91b604082015260600190565b60208082526015908201527462616420756e6465726c79696e6720626f72726f7760581b604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b60208082526026908201527f636f6c6c61746572616c20666163746f72206d757374206265206174206d6f7360408201526574203130302560d01b606082015260800190565b6020808252601f908201527f696e63656e74697665206d757374206265206174206c65617374203130302500604082015260600190565b60208082526023908201527f626f72726f7720666163746f72206d757374206265206174206c65617374203160408201526230302560e81b606082015260800190565b6020808252601190820152703130b2103ab73232b9363cb4b7339034b760791b604082015260600190565b6020808252601390820152720d2dcc6dedce6d2e6e8cadce840d8cadccee8d606b1b604082015260600190565b6020808252601e908201527f696e63656e74697665206d757374206265206174206d6f737420323030250000604082015260600190565b61ffff93841681529183166020830152909116604082015260600190565b90815260200190565b60405181810167ffffffffffffffff8111828210171561174b57600080fd5b604052919050565b600067ffffffffffffffff821115611769578081fd5b5060209081020190565b6001600160a01b038116811461178857600080fd5b5056fea2646970667358221220a726a24a0cca4e75a2d8bb7dcb6a77aac71ac55fb39f6a9472bb6c349643815264736f6c634300060c0033";
