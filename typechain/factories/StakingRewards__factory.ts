/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StakingRewards } from "../StakingRewards";

export class StakingRewards__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rewardsDistribution: string,
    _rewardsToken: string,
    _stakingToken: string,
    overrides?: Overrides
  ): Promise<StakingRewards> {
    return super.deploy(
      _rewardsDistribution,
      _rewardsToken,
      _stakingToken,
      overrides || {}
    ) as Promise<StakingRewards>;
  }
  getDeployTransaction(
    _rewardsDistribution: string,
    _rewardsToken: string,
    _stakingToken: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardsDistribution,
      _rewardsToken,
      _stakingToken,
      overrides || {}
    );
  }
  attach(address: string): StakingRewards {
    return super.attach(address) as StakingRewards;
  }
  connect(signer: Signer): StakingRewards__factory {
    return super.connect(signer) as StakingRewards__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingRewards {
    return new Contract(address, _abi, signerOrProvider) as StakingRewards;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardsDistribution",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardsToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakingToken",
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
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "earned",
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
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRewardForDuration",
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
    name: "lastTimeRewardApplicable",
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
    name: "lastUpdateTime",
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
    name: "periodFinish",
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
    name: "rewardPerToken",
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
    name: "rewardPerTokenStored",
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
    name: "rewardRate",
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
        name: "",
        type: "address",
      },
    ],
    name: "rewards",
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
  {
    inputs: [],
    name: "rewardsDuration",
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
    name: "rewardsToken",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "stakeWithPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
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
    inputs: [],
    name: "totalSupply",
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
        name: "",
        type: "address",
      },
    ],
    name: "userRewardPerTokenPaid",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006004556000600555624f1a0060065534801561002157600080fd5b506040516113d63803806113d68339818101604052606081101561004457600080fd5b508051602082015160409092015160018055600280546001600160a01b039485166001600160a01b031991821617909155600380549285169282169290921790915560008054939092169216919091179055611331806100a56000396000f3fe608060405234801561001057600080fd5b50600436106101415760003560e01c80637b0a47ee116100b8578063cd3daf9d1161007c578063cd3daf9d146102ad578063d1af0c7d146102b5578063df136d65146102bd578063e9fad8ee146102c5578063ebe2b12b146102cd578063ecd9ba82146102d557610141565b80637b0a47ee1461025257806380faa57d1461025a5780638b87634714610262578063a694fc3a14610288578063c8f33c91146102a557610141565b8063386a95251161010a578063386a9525146101d35780633c6b16ab146101db5780633d18b912146101f85780633fc6df6e1461020057806370a082311461022457806372f702f31461024a57610141565b80628cc262146101465780630700037d1461017e57806318160ddd146101a45780631c1f78eb146101ac5780632e1a7d4d146101b4575b600080fd5b61016c6004803603602081101561015c57600080fd5b50356001600160a01b031661030d565b60408051918252519081900360200190f35b61016c6004803603602081101561019457600080fd5b50356001600160a01b031661038b565b61016c61039d565b61016c6103a4565b6101d1600480360360208110156101ca57600080fd5b50356103c2565b005b61016c610545565b6101d1600480360360208110156101f157600080fd5b503561054b565b6101d161077e565b6102086108a2565b604080516001600160a01b039092168252519081900360200190f35b61016c6004803603602081101561023a57600080fd5b50356001600160a01b03166108b1565b6102086108cc565b61016c6108db565b61016c6108e1565b61016c6004803603602081101561027857600080fd5b50356001600160a01b03166108ef565b6101d16004803603602081101561029e57600080fd5b5035610901565b61016c610a82565b61016c610a88565b610208610ad6565b61016c610ae5565b6101d1610aeb565b61016c610b0e565b6101d1600480360360a08110156102eb57600080fd5b5080359060208101359060ff6040820135169060608101359060800135610b14565b6001600160a01b0381166000908152600a60209081526040808320546009909252822054610385919061037f90670de0b6b3a7640000906103799061035a90610354610a88565b90610d24565b6001600160a01b0388166000908152600c602052604090205490610d6d565b90610dc6565b90610e08565b92915050565b600a6020526000908152604090205481565b600b545b90565b60006103bd600654600554610d6d90919063ffffffff16565b905090565b60026001541415610408576040805162461bcd60e51b815260206004820152601f6024820152600080516020611267833981519152604482015290519081900360640190fd5b600260015533610416610a88565b6008556104216108e1565b6007556001600160a01b038116156104685761043c8161030d565b6001600160a01b0382166000908152600a60209081526040808320939093556008546009909152919020555b600082116104b1576040805162461bcd60e51b8152602060048201526011602482015270043616e6e6f74207769746864726177203607c1b604482015290519081900360640190fd5b600b546104be9083610d24565b600b55336000908152600c60205260409020546104db9083610d24565b336000818152600c6020526040902091909155600354610507916001600160a01b039091169084610e62565b60408051838152905133917f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5919081900360200190a2505060018055565b60065481565b6000546001600160a01b031633146105945760405162461bcd60e51b815260040180806020018281038252602a8152602001806112a8602a913960400191505060405180910390fd5b600061059e610a88565b6008556105a96108e1565b6007556001600160a01b038116156105f0576105c48161030d565b6001600160a01b0382166000908152600a60209081526040808320939093556008546009909152919020555b600454421061060f57600654610607908390610dc6565b600555610652565b60045460009061061f9042610d24565b9050600061063860055483610d6d90919063ffffffff16565b60065490915061064c906103798684610e08565b60055550505b600254604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561069d57600080fd5b505afa1580156106b1573d6000803e3d6000fd5b505050506040513d60208110156106c757600080fd5b50516006549091506106da908290610dc6565b6005541115610730576040805162461bcd60e51b815260206004820152601860248201527f50726f76696465642072657761726420746f6f20686967680000000000000000604482015290519081900360640190fd5b4260078190556006546107439190610e08565b6004556040805184815290517fde88a922e0d3b88b24e9623efeb464919c6bf9f66857a65e2bfcf2ce87a9433d9181900360200190a1505050565b600260015414156107c4576040805162461bcd60e51b815260206004820152601f6024820152600080516020611267833981519152604482015290519081900360640190fd5b6002600155336107d2610a88565b6008556107dd6108e1565b6007556001600160a01b03811615610824576107f88161030d565b6001600160a01b0382166000908152600a60209081526040808320939093556008546009909152919020555b336000908152600a6020526040902054801561089a57336000818152600a6020526040812055600254610863916001600160a01b039091169083610e62565b60408051828152905133917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a25b505060018055565b6000546001600160a01b031681565b6001600160a01b03166000908152600c602052604090205490565b6003546001600160a01b031681565b60055481565b60006103bd42600454610eb9565b60096020526000908152604090205481565b60026001541415610947576040805162461bcd60e51b815260206004820152601f6024820152600080516020611267833981519152604482015290519081900360640190fd5b600260015533610955610a88565b6008556109606108e1565b6007556001600160a01b038116156109a75761097b8161030d565b6001600160a01b0382166000908152600a60209081526040808320939093556008546009909152919020555b600082116109ed576040805162461bcd60e51b815260206004820152600e60248201526d043616e6e6f74207374616b6520360941b604482015290519081900360640190fd5b600b546109fa9083610e08565b600b55336000908152600c6020526040902054610a179083610e08565b336000818152600c6020526040902091909155600354610a44916001600160a01b03909116903085610ecf565b60408051838152905133917f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d919081900360200190a2505060018055565b60075481565b6000600b5460001415610a9e57506008546103a1565b6103bd610acd600b54610379670de0b6b3a7640000610ac7600554610ac76007546103546108e1565b90610d6d565b60085490610e08565b6002546001600160a01b031681565b60085481565b336000908152600c6020526040902054610b04906103c2565b610b0c61077e565b565b60045481565b60026001541415610b5a576040805162461bcd60e51b815260206004820152601f6024820152600080516020611267833981519152604482015290519081900360640190fd5b600260015533610b68610a88565b600855610b736108e1565b6007556001600160a01b03811615610bba57610b8e8161030d565b6001600160a01b0382166000908152600a60209081526040808320939093556008546009909152919020555b60008611610c00576040805162461bcd60e51b815260206004820152600e60248201526d043616e6e6f74207374616b6520360941b604482015290519081900360640190fd5b600b54610c0d9087610e08565b600b55336000908152600c6020526040902054610c2a9087610e08565b336000818152600c602052604080822093909355600354835163d505accf60e01b81526004810193909352306024840152604483018a90526064830189905260ff8816608484015260a4830187905260c4830186905292516001600160a01b039093169263d505accf9260e480820193929182900301818387803b158015610cb157600080fd5b505af1158015610cc5573d6000803e3d6000fd5b5050600354610ce292506001600160a01b03169050333089610ecf565b60408051878152905133917f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d919081900360200190a250506001805550505050565b6000610d6683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610f2f565b9392505050565b600082610d7c57506000610385565b82820282848281610d8957fe5b0414610d665760405162461bcd60e51b81526004018080602001828103825260218152602001806112876021913960400191505060405180910390fd5b6000610d6683836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610fc6565b600082820183811015610d66576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610eb490849061102b565b505050565b6000818310610ec85781610d66565b5090919050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610f2990859061102b565b50505050565b60008184841115610fbe5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f83578181015183820152602001610f6b565b50505050905090810190601f168015610fb05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600081836110155760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610f83578181015183820152602001610f6b565b50600083858161102157fe5b0495945050505050565b6060611080826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166110dc9092919063ffffffff16565b805190915015610eb45780806020019051602081101561109f57600080fd5b5051610eb45760405162461bcd60e51b815260040180806020018281038252602a8152602001806112d2602a913960400191505060405180910390fd5b60606110eb84846000856110f3565b949350505050565b60606110fe85611260565b61114f576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b6020831061118e5780518252601f19909201916020918201910161116f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146111f0576040519150601f19603f3d011682016040523d82523d6000602084013e6111f5565b606091505b509150915081156112095791506110eb9050565b8051156112195780518082602001fd5b60405162461bcd60e51b8152602060048201818152865160248401528651879391928392604401919085019080838360008315610f83578181015183820152602001610f6b565b3b15159056fe5265656e7472616e637947756172643a207265656e7472616e742063616c6c00536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7743616c6c6572206973206e6f742052657761726473446973747269627574696f6e20636f6e74726163745361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212209bb339eecc8c12a8970bdb373feb86e0ea7ea057e58d6a9dd737dbec3c3635f964736f6c634300060c0033";
