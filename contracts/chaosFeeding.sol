// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0;
import './chaosFactory.sol';

contract ChaosFeeding is ChaosFactory{
    
    event Feeding(
        bool Fed
    );
    event Dead(
        bool Hell,
        bool Paradise
    );
    
    modifier onlyOwnerOf(uint chaosId){
        require(chaosToOwner[chaosId] == msg.sender, 'you are not owner');
        _;
    }
    modifier canEat(uint eatId,uint foodId){
        require(eatId != foodId, 'chaos cant eat itself');
        require(chaoses[eatId].level == chaoses[foodId].level, 'chaos are not the same level');
        _;
    }
    modifier thereExistChaosWith(uint chaosId){
        require(chaoses.length - 1 >= chaosId, 'that chaos does not exist');
        _;
    }
    modifier stillAliveChaosWith(uint chaosId){
        require(chaoses[chaosId].life, 'that chaos is dead');
        _;
    }
    modifier stillLevelChaosOf(uint chaosId){
        require(chaoses[chaosId].level <= 5, 'that chaos is max level');
        _;
    }
    modifier itTimeToFeedOf(uint chaosId){
        require(chaoses[chaosId].feedTime <= uint64(block.timestamp), 'it is full');
        _;
    }
    
    function _goToHell(uint _chaosId) private{
        chaosToOwner[_chaosId]=address(0);
        ownerChaosCount[msg.sender]--;
        chaoses[_chaosId].life = false;
        emit Dead(true, false);
    }
    function _goToParadise(uint _chaosId) private{
        chaosToOwner[_chaosId]=address(1);
        ownerChaosCount[msg.sender]--;
        chaoses[_chaosId].life = false;
        emit Dead(false, true);
    }
    function _goodChaos(uint _chaosId) private view returns(bool){
        Chaos memory _chaos = chaoses[_chaosId];
        _chaos.dna = ((_chaos.dna/10**8)%10)%2;
        if(_chaos.dna == 0){
            return true;
        } else {
            return false;
        }
    }
    function _wasEaten(uint _chaosId) private{
        bool result = _goodChaos(_chaosId);
        if(result == true){
            _goToParadise(_chaosId);
        } else {
            _goToHell(_chaosId);
        }
    }
    function chaosFeeding(uint chaosId,uint foodId)
    public
    onlyOwnerOf(foodId) thereExistChaosWith(chaosId)
    stillAliveChaosWith(chaosId) stillLevelChaosOf(chaosId)
    itTimeToFeedOf(chaosId) canEat(chaosId,foodId)
    {
        Chaos memory _chaos = chaoses[chaosId];
        _wasEaten(foodId);
        _chaos.level++;
        _chaos.feedTime = uint64(block.timestamp + 15*60*_chaos.level);
        chaoses[chaosId] = _chaos;
        emit Feeding(true);
    }
}
