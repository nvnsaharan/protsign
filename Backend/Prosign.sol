pragma solidity >=0.7.0 <0.9.0;

contract Prosign {
    mapping (string => Block) blocks;

    function makeQR(string memory id,string memory reason, string memory name) public{
        Block memory newblock = Block(reason,name);
        blocks[id] = newblock;
    }

    function getQR(string memory id) public view returns(string memory, string memory){
        return (blocks[id].reason,blocks[id].name);
    }
}

struct Block {
    string reason;
    string name;
}