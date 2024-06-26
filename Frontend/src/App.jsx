import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthorizeVoters from "./components/AuthorizeVoters";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Elections from "./components/Elections";
import Result from "./components/Result";
import Voting from "./abi/Voting.json";
import { ethers } from "ethers";

const App = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [votingContract, setVotingContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [data, setData] = useState({
    // candidatesArray: [],
    candidatesCount: 0,
    totalVotes: 0,
    electionName: "",
  });

  const loadBlockchainData = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);

      const signer = provider.getSigner();
      setSigner(signer);

      const voting = new ethers.Contract(
        "0xF5592E9D89DFB7C7359c48Ddeb6c2B6ab18469A1",
        Voting,
        signer
      );
      setVotingContract(voting);

      try {
        const candidatesCount = await voting.candidatesCount();
        const totalVotes = await voting.totalVotes();
        const electionName = await voting.electionName();

        setData({
          candidatesCount: candidatesCount.toNumber(),
          totalVotes: totalVotes.toNumber(),
          electionName,
        });

        // let candidatesArray = [];
        // for (let i = 1; i <= candidatesCount.toNumber(); i++) {
        //   const candidate = await voting.candidates(i);
        //   candidatesArray.push({
        //     id: candidate.id.toNumber(),
        //     name: candidate.name,
        //     voteCount: candidate.voteCount.toNumber(),
        //   });
        // }

        // setData((prevData) => ({
        //   ...prevData,
        //   candidatesArray,
        // }));

        console.log("Blockchain data loaded:", {
          candidatesCount: candidatesCount.toNumber(),
          totalVotes: totalVotes.toNumber(),
          electionName,
          // candidatesArray,
        });
      } catch (error) {
        console.error("Error loading blockchain data:", error);
      }
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/home" element={<Home data={data} />} />
        <Route
          path="/login"
          element={<Login handleConnect={handleConnect} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile account={account} />} />
        <Route path="/elections" element={<Elections data={data} />} />
        <Route path="/result" element={<Result data={data} />} />
        <Route path="/authorize" element={<AuthorizeVoters />} />
      </Routes>
    </Router>
  );
};

export default App;
