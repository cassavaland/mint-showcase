/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ExchangeAuction,
  ExchangeAuctionInterface,
} from "../../../contracts/exchange/ExchangeAuction";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "ExchangeAuction_Already_Listed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
    ],
    name: "ExchangeAuction_Bid_Must_Be_At_Least_Min_Amount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
    ],
    name: "ExchangeAuction_Cannot_Bid_Lower_Than_Reserve_Price",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "ExchangeAuction_Cannot_Bid_On_Ended_Auction",
    type: "error",
  },
  {
    inputs: [],
    name: "ExchangeAuction_Cannot_Bid_On_Nonexistent_Auction",
    type: "error",
  },
  {
    inputs: [],
    name: "ExchangeAuction_Cannot_Finalize_Already_Settled_Auction",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "ExchangeAuction_Cannot_Finalize_Auction_In_Progress",
    type: "error",
  },
  {
    inputs: [],
    name: "ExchangeAuction_Cannot_Rebid_Over_Outstanding_Bid",
    type: "error",
  },
  {
    inputs: [],
    name: "ExchangeAuction_Cannot_Update_Auction_In_Progress",
    type: "error",
  },
  {
    inputs: [],
    name: "ExchangeAuction_Must_Set_Non_Zero_Reserve_Price",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ExchangeAuction_Only_Owner_Can_Update_Auction",
    type: "error",
  },
  {
    inputs: [],
    name: "ExchangeAuction_Price_Already_Set",
    type: "error",
  },
  {
    inputs: [],
    name: "ExchangeAuction_Too_Much_Value_Provided",
    type: "error",
  },
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
    name: "TransferExecutor_Address_Is_Not_A_Contract",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferManager_New_Treasury_Address_Is_Not_A_Acontract",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "AuctionCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "AuctionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "protocolFeeAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ownerRevenue",
        type: "uint256",
      },
    ],
    name: "AuctionFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "AuctionInvalidated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
    ],
    name: "AuctionUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "NewBid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "assetType",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proxy",
        type: "address",
      },
    ],
    name: "TransferProxyUpdated",
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
    name: "TransferToWTfuelExchange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "bid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "cancelAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "createAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultTreasury",
    outputs: [
      {
        internalType: "address payable",
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
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "finalizeAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "getAuction",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "seller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "bidder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ExchangeAuction.Auction",
        name: "auction",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getAuctionIdFor",
    outputs: [
      {
        internalType: "uint256",
        name: "auctionId",
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
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "getMinBidAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "minimum",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    inputs: [],
    name: "protocolFee",
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
        internalType: "address payable",
        name: "_defaultTreasury",
        type: "address",
      },
    ],
    name: "setDefaultTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_protocolFee",
        type: "uint256",
      },
    ],
    name: "setProtocolFee",
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
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "setTokenTreasury",
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
    name: "treasuries",
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
        name: "auctionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reservePrice",
        type: "uint256",
      },
    ],
    name: "updateAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

export class ExchangeAuction__factory {
  static readonly abi = _abi;
  static createInterface(): ExchangeAuctionInterface {
    return new utils.Interface(_abi) as ExchangeAuctionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExchangeAuction {
    return new Contract(address, _abi, signerOrProvider) as ExchangeAuction;
  }
}