/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WTFUEL, WTFUELInterface } from "../../contracts/WTFUEL";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "rolesManager_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WTFUEL_Cannot_Deposit_To_WTFUEL",
    type: "error",
  },
  {
    inputs: [],
    name: "WTFUEL_Exchange_Address_Is_Not_A_Contract",
    type: "error",
  },
  {
    inputs: [],
    name: "WTFUEL_Must_Deposit_Non_Zero_Amount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositFor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
  {
    inputs: [],
    name: "rolesManager",
    outputs: [
      {
        internalType: "contract IRoles",
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
    name: "supportedTokens",
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
    name: "symbol",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    ],
    name: "withdraw",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawFrom",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawFromTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
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
  "0x60806040523480156200001157600080fd5b506040516200146a3803806200146a8339810160408190526200003491620001b8565b604080518082018252600d81526c15dc985c1c1959081511955153609a1b60208083019182528351808501909452600684526515d51195515360d21b908401528151919291620000879160039162000112565b5080516200009d90600490602084019062000112565b505050620000bf816001600160a01b03166200010360201b6200086e1760201c565b620000dd576040516379619f4760e11b815260040160405180910390fd5b600680546001600160a01b0319166001600160a01b039290921691909117905562000226565b6001600160a01b03163b151590565b8280546200012090620001ea565b90600052602060002090601f0160209004810192826200014457600085556200018f565b82601f106200015f57805160ff19168380011785556200018f565b828001600101855582156200018f579182015b828111156200018f57825182559160200191906001019062000172565b506200019d929150620001a1565b5090565b5b808211156200019d5760008155600101620001a2565b600060208284031215620001cb57600080fd5b81516001600160a01b0381168114620001e357600080fd5b9392505050565b600181811c90821680620001ff57607f821691505b6020821081036200022057634e487b7160e01b600052602260045260246000fd5b50919050565b61123480620002366000396000f3fe6080604052600436106101485760003560e01c80634a4089cc116100c0578063a3574c5b11610074578063a9059cbb11610059578063a9059cbb14610397578063d0e30db0146103b7578063dd62ed3e146103bf57600080fd5b8063a3574c5b1461033f578063a457c2d71461037757600080fd5b806370a08231116100a557806370a08231146102d45780639470b0bd1461030a57806395d89b411461032a57600080fd5b80634a4089cc1461028757806368c4ac26146102a757600080fd5b806323b872dd116101175780632f4f21e2116100fc5780632f4f21e214610238578063313ce5671461024b578063395093511461026757600080fd5b806323b872dd146101f85780632e1a7d4d1461021857600080fd5b806306fdde031461015e578063095ea7b31461018957806318160ddd146101b9578063205c2878146101d857600080fd5b36610159576101573334610405565b005b600080fd5b34801561016a57600080fd5b5061017361048f565b6040516101809190611018565b60405180910390f35b34801561019557600080fd5b506101a96101a4366004611089565b610521565b6040519015158152602001610180565b3480156101c557600080fd5b506002545b604051908152602001610180565b3480156101e457600080fd5b506101576101f3366004611089565b610539565b34801561020457600080fd5b506101a96102133660046110b3565b610544565b34801561022457600080fd5b506101576102333660046110ef565b610568565b610157610246366004611089565b610576565b34801561025757600080fd5b5060405160128152602001610180565b34801561027357600080fd5b506101a9610282366004611089565b610580565b34801561029357600080fd5b506101576102a23660046110b3565b6105bf565b3480156102b357600080fd5b506101ca6102c2366004611108565b60056020526000908152604090205481565b3480156102e057600080fd5b506101ca6102ef366004611108565b6001600160a01b031660009081526020819052604090205490565b34801561031657600080fd5b50610157610325366004611089565b6106b2565b34801561033657600080fd5b5061017361079b565b34801561034b57600080fd5b5060065461035f906001600160a01b031681565b6040516001600160a01b039091168152602001610180565b34801561038357600080fd5b506101a9610392366004611089565b6107aa565b3480156103a357600080fd5b506101a96103b2366004611089565b610854565b610157610862565b3480156103cb57600080fd5b506101ca6103da36600461112a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b8060000361043f576040517f41b9388300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b306001600160a01b03831603610481576040517f895ddd6200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048b828261087d565b5050565b60606003805461049e9061115d565b80601f01602080910402602001604051908101604052809291908181526020018280546104ca9061115d565b80156105175780601f106104ec57610100808354040283529160200191610517565b820191906000526020600020905b8154815290600101906020018083116104fa57829003601f168201915b5050505050905090565b60003361052f81858561095c565b5060019392505050565b61048b338383610ab4565b600033610552858285610ad1565b61055d858585610b63565b506001949350505050565b610573333383610ab4565b50565b61048b8282610405565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061052f90829086906105ba9087906111ad565b61095c565b6006546040516336b87bd760e11b81523360048201526001600160a01b0390911690636d70f7ae90602401602060405180830381865afa158015610607573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062b91906111c5565b6106a25760405162461bcd60e51b815260206004820152602e60248201527f57544655454c3a2043616c6c657220646f6573206e6f7420686176652074686560448201527f204f70657261746f7220726f6c6500000000000000000000000000000000000060648201526084015b60405180910390fd5b6106ad838383610ab4565b505050565b6006546040516336b87bd760e11b81523360048201526001600160a01b0390911690636d70f7ae90602401602060405180830381865afa1580156106fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071e91906111c5565b6107905760405162461bcd60e51b815260206004820152602e60248201527f57544655454c3a2043616c6c657220646f6573206e6f7420686176652074686560448201527f204f70657261746f7220726f6c650000000000000000000000000000000000006064820152608401610699565b61048b823383610ab4565b60606004805461049e9061115d565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156108475760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610699565b61055d828686840361095c565b60003361052f818585610b63565b61086c3334610405565b565b6001600160a01b03163b151590565b6001600160a01b0382166108d35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610699565b80600260008282546108e591906111ad565b90915550506001600160a01b038216600090815260208190526040812080548392906109129084906111ad565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0383166109d75760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610699565b6001600160a01b038216610a535760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610699565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b610abe8382610d7a565b6106ad6001600160a01b03831682610eff565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610b5d5781811015610b505760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610699565b610b5d848484840361095c565b50505050565b6001600160a01b038316610bdf5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610699565b6001600160a01b038216610c5b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610699565b6001600160a01b03831660009081526020819052604090205481811015610cea5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610699565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610d219084906111ad565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d6d91815260200190565b60405180910390a3610b5d565b6001600160a01b038216610df65760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610699565b6001600160a01b03821660009081526020819052604090205481811015610e855760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610699565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610eb49084906111e7565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b80471015610f4f5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610699565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610f9c576040519150601f19603f3d011682016040523d82523d6000602084013e610fa1565b606091505b50509050806106ad5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610699565b600060208083528351808285015260005b8181101561104557858101830151858201604001528201611029565b81811115611057576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461108457600080fd5b919050565b6000806040838503121561109c57600080fd5b6110a58361106d565b946020939093013593505050565b6000806000606084860312156110c857600080fd5b6110d18461106d565b92506110df6020850161106d565b9150604084013590509250925092565b60006020828403121561110157600080fd5b5035919050565b60006020828403121561111a57600080fd5b6111238261106d565b9392505050565b6000806040838503121561113d57600080fd5b6111468361106d565b91506111546020840161106d565b90509250929050565b600181811c9082168061117157607f821691505b60208210810361119157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156111c0576111c0611197565b500190565b6000602082840312156111d757600080fd5b8151801515811461112357600080fd5b6000828210156111f9576111f9611197565b50039056fea2646970667358221220fd31736c61407aaac0b54f63f695f83ef3f9f43cb7ad099661fc07e8b92eded864736f6c634300080d0033";

type WTFUELConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WTFUELConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WTFUEL__factory extends ContractFactory {
  constructor(...args: WTFUELConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    rolesManager_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<WTFUEL> {
    return super.deploy(rolesManager_, overrides || {}) as Promise<WTFUEL>;
  }
  override getDeployTransaction(
    rolesManager_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(rolesManager_, overrides || {});
  }
  override attach(address: string): WTFUEL {
    return super.attach(address) as WTFUEL;
  }
  override connect(signer: Signer): WTFUEL__factory {
    return super.connect(signer) as WTFUEL__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WTFUELInterface {
    return new utils.Interface(_abi) as WTFUELInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WTFUEL {
    return new Contract(address, _abi, signerOrProvider) as WTFUEL;
  }
}