// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0;

contract ChaosFactory{
    
    uint maxChaosInTheWorld = 50;
    uint chaosInTheWorld = 0;
    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;
    
    event Birth(
        uint id,
        address sponsor
    );
    
    modifier f0IsNotMax(){
        require(chaosInTheWorld < maxChaosInTheWorld, 'the number of f0 has reached the maximum');
        _;
    }
    
    struct Chaos{
        uint dna;
        uint64 birthTime;
        uint64 feedTime;
        uint8 level;
        bool life;
    }
    // constructor(){
    //     chaoses.push(_chaos);
    //     uint id = uint(chaoses.length - 1);
    //     chaosToOwner[id] = msg.sender;
    //     ownerChaosCount[msg.sender] = id;
    // }
    
    Chaos[] public chaoses;
    mapping(uint => address) internal chaosToOwner;
    mapping(address => uint) internal ownerChaosCount;
    
    function _createChaos(uint _dna) internal returns(uint){
        Chaos memory _chaos = Chaos(_dna, uint64(block.timestamp), uint64(block.timestamp), 1, true);
        chaoses.push(_chaos);
        uint id = uint(chaoses.length - 1);
        chaosToOwner[id] = msg.sender;
        ownerChaosCount[msg.sender]++;
        return id;
    }
    
    function _createRandomDna() private view returns(uint){
        uint rand = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, ownerChaosCount[msg.sender])));
        return rand % dnaModulus;
    }
    
    function createRandomChaos() external f0IsNotMax{
        uint randDna = _createRandomDna();
        _createChaos(randDna);
        chaosInTheWorld++;
    }

    function mintChaos(uint dna) external {
        _createChaos(dna);
    }

    function getChaosOfOwner(address owner) external view returns(uint[] memory){
        uint size = 0;
        for(uint i = 0; i < chaoses.length; i++){
            if(owner == chaosToOwner[i]){
                size++;
            }
        }
        uint [] memory result = new uint[](size);
        uint count = 0;
        for(uint i = 0; i < chaoses.length; i++){
            if(owner == chaosToOwner[i]){
                result[count] = i;
                count++;
            }
        }
        return result;
    }
}