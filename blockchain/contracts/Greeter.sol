// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract GameItem is ERC721, Ownable {

    string public _sourceURI = '';
    constructor() ERC721("GameItem", "ITM") {}

    function _setBaseURI(string memory uri) public onlyOwner {
        _sourceURI = uri;
    }

    function returnURI() public view onlyOwner returns (string memory) {}
}
