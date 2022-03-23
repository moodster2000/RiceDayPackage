pragma solidity ^0.8.9;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./ERC721A.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract RiceDay is Ownable, ERC721A, ReentrancyGuard {
    using ECDSA for bytes32;

    //total Supply
    uint256 public constant MAX_SUPPLY = 8866;

    address private prepChefSigner;
    address private execChefSigner;

    //sale status variable
    enum SalePhase {
        Locked,
        PreSale,
        PublicSale
    }

    SalePhase public phase = SalePhase.Locked;
    mapping(address => uint8) private _devList;
    mapping(address => uint8) private _prepAlreadyMint;
    mapping(address => uint8) private _execAlreadyMint;

    string baseURI;
    bool public revealed = true;
    uint256 public pricePublic = 0.15 ether;
    uint256 public pricePresale = 0.125 ether;

    constructor() ERC721A("RiceDay", "RICE", 3, 8866) {}

    modifier callerIsUser() {
        require(tx.origin == msg.sender, "The caller is another contract");
        _;
    }

    function publicSaleMint(uint8 numberOfTokens)
        external
        payable
        callerIsUser
    {
        require(
            phase == SalePhase.PublicSale,
            "Public sale minting is not active"
        );
        require(
            numberOfTokens + totalSupply() <= MAX_SUPPLY,
            "Purchase would exceed max tokens"
        );
        require(
            pricePublic * numberOfTokens <= msg.value,
            "Ether value sent is not correct"
        );
        uint256 senderBalance = balanceOf(msg.sender);
        require(senderBalance <= 3, "cannot request that many"); //erc721 checks how many they can mint at a time
        _safeMint(msg.sender, numberOfTokens);
    }

    function prepChefMint(bytes calldata signature)
        external
        payable
        callerIsUser
    {
        require(
            phase == SalePhase.PreSale,
            "Presale minting not active"
        );
        require(
            1 + totalSupply() <= MAX_SUPPLY,
            "Purchase would exceed max tokens"
        );
        require(
            pricePublic <= msg.value,
            "Ether value sent is not correct"
        );
        require(
            _prepAlreadyMint[msg.sender] == 0,
            "Already minted"
        );
        _prepAlreadyMint[msg.sender] = 1;
        
        require(prepChefSigner == keccak256(
            abi.encodePacked(
                "\x19Ethereum Signed Message:\n32",
                bytes32(uint256(uint160(msg.sender)))
            )
        ).recover(signature), "Signer address mismatch.");
        _safeMint(msg.sender, 1);
    }

    function recoverSender(bytes calldata signature) external view returns (address) {
      return keccak256(
            abi.encodePacked(
                "\x19Ethereum Signed Message:\n32",
                bytes32(uint256(uint160(msg.sender)))
            )
        ).recover(signature);
    }
    
    function testBytesReturn() external view returns (bytes32) {
        return bytes32(uint256(uint160(msg.sender)));
    }

    function execChefMint(uint8 numberOfTokens, bytes calldata signature)
        external
        payable
        callerIsUser
    {
        require(
            phase == SalePhase.PreSale,
            "Presale minting not active"
        );
        require(
            numberOfTokens + totalSupply() <= MAX_SUPPLY,
            "Purchase would exceed max tokens"
        );
        require(
            numberOfTokens <= 2,
            "Cannot purchase that many"
        );
        require(
            _execAlreadyMint[msg.sender] <= 2,
            "Already minted"
        );
        _execAlreadyMint[msg.sender] += numberOfTokens;
                
        require(execChefSigner == keccak256(
            abi.encodePacked(
                "\x19Ethereum Signed Message:\n32",
                bytes32(uint256(uint160(msg.sender)))
            )
        ).recover(signature), "Signer address mismatch.");

        require(
            pricePublic * numberOfTokens <= msg.value,
            "Ether value sent is not correct"
        );

        _safeMint(msg.sender, numberOfTokens);
    }

    function devMint() external payable callerIsUser {
        require(_devList[msg.sender] > 0, "already claimed");
        uint8 allowedToMint = _devList[msg.sender];
        require(
            allowedToMint + totalSupply() <= MAX_SUPPLY,
            "Purchase would exceed max tokens"
        );
        _safeMint(msg.sender, allowedToMint);
        _devList[msg.sender] = 0;
    }

    //changePhase
    function changePhase(SalePhase phase_) external onlyOwner {
        phase = phase_;
    }

    //set Price
    function setPublicPrice(uint256 newPrice) external onlyOwner {
        pricePublic = newPrice;
    }

    function setPrivatePrice(uint256 newPrice) external onlyOwner {
        pricePresale = newPrice;
    }

    function setSigners(address _prepChefSigner, address _execChefSigner)
        external
        onlyOwner
    {
        prepChefSigner = _prepChefSigner;
        execChefSigner = _execChefSigner;
    }

    // internal
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function setDevMint(address[] calldata _addresses, uint8 amount)
        public
        onlyOwner
    {
        for (uint256 i = 0; i < _addresses.length; i++) {
            _devList[_addresses[i]] = amount;
        }
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    address public constant DEVELOPMENT_FUND_ADDRESS =
        0xB77DF549E859919F0C8d09Dfc22cA1D489a67084;
    address public constant OXY_ADDRESS =
        0x43b5F6D6C1B5c57153578025c76E091D8025C114; // Oxy needs to be updated
    address public constant FOUNDER_ADDRESS_1 =
        0x4D343925Df00700c4838112f22EbA49A0D4D07ae; // Nam
    address public constant FOUNDER_ADDRESS_2 =
        0xC929b6bD739a8564BcB35e978Afe4ffF5b6c3cEF; // Giang needs to be updated
    address public constant COMMUNITYLEAD_ADDRESS =
        0x5774883C9dDAB26954d0D2CABeA2F97dbEe7CC1a; // Vi
    address public constant TECHLEAD_ADDRESS =
        0x19b260a039eDa8b896F4c7463445Fb94b4C86a85; // Moodi
    address public constant GENARTIST_ADDRESS =
        0xc54003e08b17f127196Eb3562bc2085BeD3332D5; // Trung
    address public constant RARITYARTIST_ADDRESS =
        0xa1B636D2e7D1C53Eba425e3e76B9BbEcf4D5Da56; // Hai

    function withdrawAll() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "Balance is 0");
        payable(DEVELOPMENT_FUND_ADDRESS).transfer((balance * 5000) / 10000);
        payable(OXY_ADDRESS).transfer((balance * 1250) / 10000);
        payable(FOUNDER_ADDRESS_1).transfer((balance * 965) / 10000);
        payable(FOUNDER_ADDRESS_2).transfer((balance * 965) / 10000);
        payable(COMMUNITYLEAD_ADDRESS).transfer((balance * 450) / 10000);
        payable(TECHLEAD_ADDRESS).transfer((balance * 450) / 10000);
        payable(GENARTIST_ADDRESS).transfer((balance * 600) / 10000);
        payable(RARITYARTIST_ADDRESS).transfer((balance * 320) / 10000);
    }
}
