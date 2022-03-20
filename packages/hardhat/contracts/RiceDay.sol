pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./ERC721A.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract RiceDay is Ownable, ERC721A, ReentrancyGuard {

    //total Supply
    uint256 public constant MAX_SUPPLY = 8866;

    //sale status variable
    enum SalePhase {
		Locked,
		PreSale,
		PublicSale
	}
    SalePhase public phase = SalePhase.PreSale;
    mapping(address => uint8) private _allowList;

    mapping(address => uint8) private _teamList;
    
    string baseURI;
    bool public revealed = true;
    uint256 public constant riceDayPricePublic = 0.15 ether;

    constructor() ERC721A("RiceDay", "RICE", 5, 8866) {} 

    modifier callerIsUser() {
        require(tx.origin == msg.sender, "The caller is another contract");
        _;
    }

    function publicSaleMint(uint8 numberOfTokens) external payable callerIsUser {
        require(phase == SalePhase.PublicSale, "Public sale minting is not active");
        require(
            numberOfTokens + totalSupply() <= MAX_SUPPLY,
            "Purchase would exceed max tokens"
        );
        // require(
        //     riceDayPricePublic * numberOfTokens <= msg.value,
        //     "Ether value sent is not correct"
        // );
        uint256 senderBalance = balanceOf(msg.sender);
        require(senderBalance <= 10, "cannot request that many"); //erc721 checks how many they can mint at a time
        _safeMint(msg.sender, numberOfTokens);
    }
    bytes32 public merkleRoot =
        0x86d827069bd9d1891d9bbfd29c2a4174c4f95798c5a20f8074b8bbaf4c2bb8f5;
    mapping(address => uint8) public allwListClaimed;

    function prepChefMint(uint8 numberOfTokens, bytes32[] calldata _merkleProof) external payable callerIsUser {
        require(phase == SalePhase.PreSale, "Presale sale minting is not active");
        require(allwListClaimed[msg.sender] < 1, "Address already claimed");
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(
            MerkleProof.verify(_merkleProof, merkleRoot, leaf),
            "Invalid Merkle Proof."
        );

        allwListClaimed[msg.sender] = numberOfTokens;
        _safeMint(msg.sender, numberOfTokens);
    }


    function teamMint(uint8 numberOfTokens) external payable callerIsUser {
        uint8 allowedToMint = _teamList[msg.sender];
        require(
            numberOfTokens <= allowedToMint,
            "Exceeded Max Available to Purchase"
        );
        require(
            numberOfTokens + totalSupply() <= MAX_SUPPLY,
            "Purchase would exceed max tokens"
        );
        _teamList[msg.sender] = allowedToMint - numberOfTokens;
        _safeMint(msg.sender, numberOfTokens);
    }

    //changePhase
    function changePhase(SalePhase phase_) external onlyOwner {
		phase = phase_;
	}

    function withdrawMoney() external onlyOwner nonReentrant {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "Transfer failed.");
    }

    // internal
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }


    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }


    

  
}