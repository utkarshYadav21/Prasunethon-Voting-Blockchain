import React, { useState, useEffect } from "react";
import Voting from "../abi/Voting.json";
import { ethers } from "ethers";

const App = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [voting, setVoting] = useState(null);
  const [account, setAccount] = useState(null);

  const loadBlockchainData = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);

      const network = await provider.getNetwork();
      console.log("Network:", network);

      const signer = provider.getSigner();
      setSigner(signer);

      const voting = new ethers.Contract(
        "0xF5592E9D89DFB7C7359c48Ddeb6c2B6ab18469A1", 
        Voting,
        signer
      );
      setVoting(voting);
      console.log("Voting Contract:", voting);
    } else {
      console.log("MetaMask not connected");
    }
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  const handleConnect = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts.length > 0) {
        const account = ethers.utils.getAddress(accounts[0]);
        setAccount(account);
        console.log("Connected account:", account);
      } else {
        console.log("User denied account access");
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const endElection = async () => {
    try {
      const tx = await voting.endElection();
      await tx.wait();
      console.log("Election ended successfully:", tx);
    } catch (error) {
      console.error("Error ending election:", error);
    }
  };
  const authorizeVoter = async () => {
    try {
      const tx = await voting.authorizeVoter("0xb1cD729cbdFcC241a7A3e29B2f3836F949cA768f");
      await tx.wait();
      console.log("Voter authorized:", tx);
    } catch (error) {
      console.error("Error authorizing voter:", error);
    }
  };

  const vote = async () => {
    try {
      const candidateId = 1; // Replace with the actual candidate ID
      const tx = await voting.vote(candidateId);
      await tx.wait();
      console.log("Vote cast:", tx);
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  const getCandidates = async () => {
    try {
      const candidates = await voting.candidates(2);
      console.log("Candidates:", candidates);
    } catch (error) {
      console.error("Error getting candidates:", error);
    }
  };

  const getCandidatesCount = async () => {
    try {
      const count = await voting.candidatesCount();
      console.log("Candidates count:", count);
    } catch (error) {
      console.error("Error getting candidates count:", error);
    }
  };

  const getTotalVotes = async () => {
    try {
      // const latestBlock = await provider.getBlockNumber();
      // const totalVotes = await voting.totalVotes({ blockTag: latestBlock });
      const totalVotes = await voting.totalVotes();
      console.log("Total votes:", totalVotes);
    } catch (error) {
      console.error("Error getting total votes:", error);
    }
  };

  const addCandidate = async () => {
    try {
      const tx = await voting.connect(signer).addCandidate("tushar");
      await tx.wait();
      console.log("Candidate added:", tx);
    } catch (error) {
      console.error("Error adding candidate:", error);
    }
  };

  const getResult = async () => {
    try {
      const result = await voting.getResult(2);
      console.log("Election result:", result);
    } catch (error) {
      console.error("Error getting result:", error);
    }
  };

  const getElectionName = async () => {
    try {
      const result = await voting.electionName();
      console.log("Election name:", result);
    } catch (error) {
      console.error("Error getting name:", error);
    }
  };

  return (
    <div className="gap-6 flex flex-col">
      <button type="button" onClick={handleConnect}>
        {account ? account.slice(0, 6) + "..." + account.slice(38, 42) : "Connect"}
      </button>
      <button onClick={authorizeVoter}>Authorize</button>
      <button onClick={vote}>Vote</button>
      <button onClick={getCandidates}>Get Candidates</button>
      <button onClick={getCandidatesCount}>Candidates Count</button>
      <button onClick={getTotalVotes}>Total Votes</button>
      <button onClick={addCandidate}>Add Candidate</button>
      <button onClick={getResult}>Get Result</button>
      <button onClick={getElectionName}>electionName</button>
      <button onClick={endElection}>endElection</button>

    </div>
  );
};

export default App;
