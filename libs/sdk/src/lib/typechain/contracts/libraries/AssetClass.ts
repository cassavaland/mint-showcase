/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface AssetClassInterface extends utils.Interface {
  functions: {
    "ERC1155()": FunctionFragment;
    "ERC20()": FunctionFragment;
    "ERC721()": FunctionFragment;
    "TFUEL()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "ERC1155" | "ERC20" | "ERC721" | "TFUEL"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "ERC1155", values?: undefined): string;
  encodeFunctionData(functionFragment: "ERC20", values?: undefined): string;
  encodeFunctionData(functionFragment: "ERC721", values?: undefined): string;
  encodeFunctionData(functionFragment: "TFUEL", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ERC1155", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ERC20", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ERC721", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TFUEL", data: BytesLike): Result;

  events: {};
}

export interface AssetClass extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AssetClassInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ERC1155(overrides?: CallOverrides): Promise<[string]>;

    ERC20(overrides?: CallOverrides): Promise<[string]>;

    ERC721(overrides?: CallOverrides): Promise<[string]>;

    TFUEL(overrides?: CallOverrides): Promise<[string]>;
  };

  ERC1155(overrides?: CallOverrides): Promise<string>;

  ERC20(overrides?: CallOverrides): Promise<string>;

  ERC721(overrides?: CallOverrides): Promise<string>;

  TFUEL(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    ERC1155(overrides?: CallOverrides): Promise<string>;

    ERC20(overrides?: CallOverrides): Promise<string>;

    ERC721(overrides?: CallOverrides): Promise<string>;

    TFUEL(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    ERC1155(overrides?: CallOverrides): Promise<BigNumber>;

    ERC20(overrides?: CallOverrides): Promise<BigNumber>;

    ERC721(overrides?: CallOverrides): Promise<BigNumber>;

    TFUEL(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ERC1155(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ERC20(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ERC721(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TFUEL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
