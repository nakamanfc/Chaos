// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0;
import './chaosBreeding.sol';

contract ChaosOwnerShip is ChaosBreeding{
    
    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
    mapping (uint => address) public chaosApprovals;
    
    function balanceOf(address owner) external view returns (uint256 balance){
        return ownerChaosCount[owner];
    }
    function ownerOf(uint256 tokenId) external view returns (address owner){
        return chaosToOwner[tokenId];
    }
     function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external {
        require (chaosToOwner[tokenId] == msg.sender || chaosApprovals[tokenId] == msg.sender);
        chaosToOwner[tokenId] = to;
        ownerChaosCount[from]--;
        ownerChaosCount[to]++;
        emit Transfer(from, to, tokenId);
    }
    function approve(address to, uint256 tokenId) external thereExistChaosWith(tokenId) onlyOwnerOf(tokenId) {
        chaosApprovals[tokenId] = to;
        emit Approval(msg.sender, to, tokenId);
    }
}