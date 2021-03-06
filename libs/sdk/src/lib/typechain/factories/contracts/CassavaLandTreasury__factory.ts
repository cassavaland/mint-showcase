/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CassavaLandTreasury,
  CassavaLandTreasuryInterface,
} from "../../contracts/CassavaLandTreasury";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CassavaLandTreasury_Cannot_Withdraw_To_Address_Zero",
    type: "error",
  },
  {
    inputs: [],
    name: "CassavaLandTreasury_Cannot_Withdraw_To_Self",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsWithdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    name: "addAdmin",
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
    ],
    name: "addOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        name: "account",
        type: "address",
      },
    ],
    name: "isAdmin",
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
        name: "account",
        type: "address",
      },
    ],
    name: "isOperator",
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
        name: "account",
        type: "address",
      },
    ],
    name: "removeAdmin",
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
    ],
    name: "removeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
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
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610f37380380610f3783398101604081905261002f916100ee565b8061003b600082610042565b505061011e565b61004c8282610050565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661004c576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556100aa3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006020828403121561010057600080fd5b81516001600160a01b038116811461011757600080fd5b9392505050565b610e0a8061012d6000396000f3fe6080604052600436106100e15760003560e01c8063704802751161007f578063a217fddf11610059578063a217fddf14610286578063ac8a584a1461029b578063c1075329146102bb578063d547741f146102db57600080fd5b8063704802751461020257806391d14854146102225780639870d7fe1461026657600080fd5b806324d7806c116100bb57806324d7806c146101825780632f2ff15d146101a257806336568abe146101c25780636d70f7ae146101e257600080fd5b806301ffc9a7146100ed5780631785f53c14610122578063248a9ca31461014457600080fd5b366100e857005b600080fd5b3480156100f957600080fd5b5061010d610108366004610b77565b6102fb565b60405190151581526020015b60405180910390f35b34801561012e57600080fd5b5061014261013d366004610bce565b610394565b005b34801561015057600080fd5b5061017461015f366004610beb565b60009081526020819052604090206001015490565b604051908152602001610119565b34801561018e57600080fd5b5061010d61019d366004610bce565b6103a2565b3480156101ae57600080fd5b506101426101bd366004610c04565b6103ad565b3480156101ce57600080fd5b506101426101dd366004610c04565b6103d8565b3480156101ee57600080fd5b5061010d6101fd366004610bce565b610469565b34801561020e57600080fd5b5061014261021d366004610bce565b610474565b34801561022e57600080fd5b5061010d61023d366004610c04565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561027257600080fd5b50610142610281366004610bce565b61047f565b34801561029257600080fd5b50610174600081565b3480156102a757600080fd5b506101426102b6366004610bce565b6104a9565b3480156102c757600080fd5b506101426102d6366004610c34565b6104d3565b3480156102e757600080fd5b506101426102f6366004610c04565b610635565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061038e57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b61039f600082610635565b50565b600061038e8261065b565b6000828152602081905260409020600101546103c9813361069b565b6103d38383610719565b505050565b6001600160a01b038116331461045b5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b61046582826107b7565b5050565b600061038e82610836565b61039f6000826103ad565b61039f7fa994cb12bf95bd47083c2da737df49b9d1e292c410967945d76d28eb5c8717ee826103ad565b61039f7fa994cb12bf95bd47083c2da737df49b9d1e292c410967945d76d28eb5c8717ee82610635565b6104dc3361065b565b61054e5760405162461bcd60e51b815260206004820152602160248201527f41646d696e526f6c653a2063616c6c6572206973206e6f7420616e2041646d6960448201527f6e000000000000000000000000000000000000000000000000000000000000006064820152608401610452565b806000036105595750475b6001600160a01b038216610599576040517f656009b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b306001600160a01b038316036105db576040517fafc9c4d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105ee6001600160a01b03831682610876565b816001600160a01b03167f99a7b857d177a9f5962228b830aa679ade0f8465fbb4fef3a472a060c6d8f8e88260405161062991815260200190565b60405180910390a25050565b600082815260208190526040902060010154610651813361069b565b6103d383836107b7565b6001600160a01b03811660009081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604081205460ff1661038e565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610465576106d7816001600160a01b0316601461098f565b6106e283602061098f565b6040516020016106f3929190610c90565b60408051601f198184030181529082905262461bcd60e51b825261045291600401610d11565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610465576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556107733390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1615610465576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b03811660009081527f89ffcfd1ea4294bb55f5b29bd11b5a3a9f6ed7e5250746c8171122211c9c1618602052604081205460ff1661038e565b804710156108c65760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610452565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610913576040519150601f19603f3d011682016040523d82523d6000602084013e610918565b606091505b50509050806103d35760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610452565b6060600061099e836002610d5a565b6109a9906002610d79565b67ffffffffffffffff8111156109c1576109c1610d91565b6040519080825280601f01601f1916602001820160405280156109eb576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610a2257610a22610da7565b60200101906001600160f81b031916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610a6d57610a6d610da7565b60200101906001600160f81b031916908160001a9053506000610a91846002610d5a565b610a9c906001610d79565b90505b6001811115610b21577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110610add57610add610da7565b1a60f81b828281518110610af357610af3610da7565b60200101906001600160f81b031916908160001a90535060049490941c93610b1a81610dbd565b9050610a9f565b508315610b705760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610452565b9392505050565b600060208284031215610b8957600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610b7057600080fd5b6001600160a01b038116811461039f57600080fd5b600060208284031215610be057600080fd5b8135610b7081610bb9565b600060208284031215610bfd57600080fd5b5035919050565b60008060408385031215610c1757600080fd5b823591506020830135610c2981610bb9565b809150509250929050565b60008060408385031215610c4757600080fd5b8235610c5281610bb9565b946020939093013593505050565b60005b83811015610c7b578181015183820152602001610c63565b83811115610c8a576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610cc8816017850160208801610c60565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351610d05816028840160208801610c60565b01602801949350505050565b6020815260008251806020840152610d30816040850160208701610c60565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610d7457610d74610d44565b500290565b60008219821115610d8c57610d8c610d44565b500190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081610dcc57610dcc610d44565b50600019019056fea264697066735822122020fb5929f106c631811e77b485d6b198e27097825230e961a330ff3b7679e5ab64736f6c634300080d0033";

type CassavaLandTreasuryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CassavaLandTreasuryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CassavaLandTreasury__factory extends ContractFactory {
  constructor(...args: CassavaLandTreasuryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CassavaLandTreasury> {
    return super.deploy(admin, overrides || {}) as Promise<CassavaLandTreasury>;
  }
  override getDeployTransaction(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin, overrides || {});
  }
  override attach(address: string): CassavaLandTreasury {
    return super.attach(address) as CassavaLandTreasury;
  }
  override connect(signer: Signer): CassavaLandTreasury__factory {
    return super.connect(signer) as CassavaLandTreasury__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CassavaLandTreasuryInterface {
    return new utils.Interface(_abi) as CassavaLandTreasuryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CassavaLandTreasury {
    return new Contract(address, _abi, signerOrProvider) as CassavaLandTreasury;
  }
}
