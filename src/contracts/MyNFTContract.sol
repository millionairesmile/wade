// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// MyNFTContract contract, inheriting from ERC721 and Ownable
contract MyNFTContract is ERC721, Ownable {
    // Counter to keep track of the token ID
    uint256 private _tokenIdCounter;

    // Constructor for initializing the contract
    constructor() ERC721("MyNFTContract", "MNFT") Ownable(msg.sender) {
        // Mint the first NFT to the contract owner
        _safeMint(msg.sender, getNextTokenId());
    }

    // Function to get the next available token ID
    function getNextTokenId() public view returns (uint256) {
        return _tokenIdCounter + 1;
    }

    // Mint function to allow others to mint NFTs
    function mint() external payable {
        // Ensure that the sender has sent 0 Ether
        require(msg.value == 0, "Incorrect payment amount");

        // Increment the token ID counter
        _tokenIdCounter++;

        // Mint a new NFT to the sender
        _safeMint(msg.sender, getNextTokenId());
    }
}
