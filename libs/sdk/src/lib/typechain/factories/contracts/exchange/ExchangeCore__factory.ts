/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ExchangeCore,
  ExchangeCoreInterface,
} from "../../../contracts/exchange/ExchangeCore";

const _abi = [
  {
    inputs: [],
    name: "ExchangeCore_Address_Is_Not_A_Contract",
    type: "error",
  },
  {
    inputs: [],
    name: "ExchangeCore_Only_WTFUEL_Can_Transfer_TFUEL",
    type: "error",
  },
  {
    inputs: [],
    name: "getWtfuelAddress",
    outputs: [
      {
        internalType: "address",
        name: "wtfuelAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

export class ExchangeCore__factory {
  static readonly abi = _abi;
  static createInterface(): ExchangeCoreInterface {
    return new utils.Interface(_abi) as ExchangeCoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExchangeCore {
    return new Contract(address, _abi, signerOrProvider) as ExchangeCore;
  }
}