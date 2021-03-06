/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOperatorRole,
  IOperatorRoleInterface,
} from "../../../contracts/interfaces/IOperatorRole";

const _abi = [
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
];

export class IOperatorRole__factory {
  static readonly abi = _abi;
  static createInterface(): IOperatorRoleInterface {
    return new utils.Interface(_abi) as IOperatorRoleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOperatorRole {
    return new Contract(address, _abi, signerOrProvider) as IOperatorRole;
  }
}
