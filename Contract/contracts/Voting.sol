// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }
    
    struct Voter {
        bool authorized;
        bool voted;
        uint vote;
    }
    
    address public owner;
    string public electionName;
    uint public electionEndTime;
    
    mapping(address => Voter) public voters;
    mapping(uint => Candidate) public candidates;
    uint public candidatesCount;
    uint public totalVotes;
    
    modifier ownerOnly() {
        require(msg.sender == owner, "Not authorized");
        _;
    }
    
    modifier duringElection() {
        require(block.timestamp < electionEndTime, "Election ended");
        _;
    }
    
    constructor(string memory _name, uint _duration) {
        owner = msg.sender;
        electionName = _name;
        electionEndTime = block.timestamp + _duration;
    }
    
    function addCandidate(string memory _name) public ownerOnly {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
    
    function authorizeVoter(address _voter) public ownerOnly {
        voters[_voter].authorized = true;
    }
    
    function vote(uint _candidateId) public duringElection {
        require(voters[msg.sender].authorized, "Not authorized to vote");
        require(!voters[msg.sender].voted, "Already voted");
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate");
        
        voters[msg.sender].voted = true;
        voters[msg.sender].vote = _candidateId;
        
        candidates[_candidateId].voteCount++;
        totalVotes++;
    }
    
    function endElection() public ownerOnly {
        electionEndTime = block.timestamp;
    }
    
    function getResult(uint _candidateId) public view returns (string memory name, uint voteCount) {
        require(block.timestamp >= electionEndTime, "Election not ended yet");
        name = candidates[_candidateId].name;
        voteCount = candidates[_candidateId].voteCount;
    }
}
