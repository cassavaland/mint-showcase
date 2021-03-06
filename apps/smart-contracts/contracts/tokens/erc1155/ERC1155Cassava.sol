// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "./ERC1155Base.sol";

contract ERC1155Cassava is ERC1155Base {
    uint256 private _nextTokenId;

    event CreateERC1155Cassava(address owner, string name, string symbol);

    event Minted(
        address indexed creator,
        uint256 indexed tokenId,
        string indexed tokenURI
    );

    constructor(
        string memory name,
        string memory symbol,
        string memory baseURI_
    ) ERC1155("") ERC1155Base(name, symbol) {
        _nextTokenId = 1;
        _setBaseURI(baseURI_);

        emit CreateERC1155Cassava(_msgSender(), name, symbol);
    }

    function mint(uint256 amount, string calldata tokenURI_)
        public
        onlyOwner
        returns (uint256 tokenId)
    {
        unchecked {
            tokenId = _nextTokenId++;
        }
        _mint(_msgSender(), tokenId, amount, "");
        _setTokenCreator(tokenId, payable(_msgSender()));
        _setTokenURI(tokenId, tokenURI_);

        emit Minted(_msgSender(), tokenId, tokenURI_);
    }

    function mintWithRoyalty(
        uint256 amount,
        string calldata tokenURI_,
        address receiver,
        uint96 feeNumerator
    ) external returns (uint256 tokenId) {
        tokenId = mint(amount, tokenURI_);
        _setTokenRoyalty(tokenId, receiver, feeNumerator);

        emit SetTokenRoyalty(tokenId, receiver, feeNumerator);
    }
}
