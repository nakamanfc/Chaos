// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0;
import './chaosFeeding.sol';

contract ChaosBreeding is ChaosFeeding{
    
    modifier chaosIsOppositeSex(uint idChaos, uint otherIdChaos){
        require((chaoses[idChaos].dna%10)%2 != (chaoses[otherIdChaos].dna%10)%2, "we don't do that here");
        _;
    }
    
    function _dnaBreeding(uint idChaos, uint otherIdChaos) private view returns(uint){
        uint rand = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, idChaos, otherIdChaos)));
        return rand % dnaModulus;
    }
    
    function chaosBreeding(uint idChaos, uint otherIdChaos) public
    chaosIsOppositeSex(idChaos, otherIdChaos)
    {
        uint Dna = _dnaBreeding(idChaos, otherIdChaos);
        _createChaos(Dna);
    }
}