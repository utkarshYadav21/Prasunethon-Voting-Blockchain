import { Link } from "react-router-dom";
import VoteCount from "./VoteCount";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";


const Result = ({ voting }) => {
  const [candidatesResult, setCandidatesResult] = useState([]);

  useEffect(() => {
    const getResult = async () => {
      try {
        const candidatesCountBN = await voting.candidatesCount();
        const candidatesCount = candidatesCountBN.toNumber();
        const results = [];
        for (let i = 1; i <= candidatesCount; i++) {
          const result = await voting.getResult(i);
          results.push({ name: result.name, voteCount: result.voteCount.toNumber() });
        }
        results.sort((a, b) => b.voteCount - a.voteCount);
        setCandidatesResult(results);
        console.log(candidatesResult)
      } catch (error) {
        toast.error("Error getting results");
        console.error("Error getting result:", error);
      }
    };

    getResult();
  }, [voting]);

  return (
    <div className="bg-gradient-to-t from-custom-light to-custom-dark text-white h-[100dvh]">
      <div className="flex flex-row justify-around min-h-[150px] p-6 text-blue-950">
        <div className="font-bold text-2xl">VoteX</div>
        <div className="flex flex-row">
          <Link className="text-xl font-semibold mx-[36px]" to="/profile">
            Profile
          </Link>
          <Link className="text-xl font-semibold mx-[36px]" to="/elections">
            Elections
          </Link>
          <Link className="text-xl font-semibold mx-[36px]" to="/result">
            Result
          </Link>
        </div>
      </div>
      <div className="w-[70%] mx-auto">
        <h1 className="items-center ml-4 text-3xl mb-3 text-black">Winner</h1>
        <VoteCount candidate={candidatesResult[0]}/>
      </div>
      <h1 className="items-center ml-[16%] text-3xl mb-3 text-black">
        Leaderboard
      </h1>
      <div className="w-[70%] mx-auto">
        {candidatesResult.map((candidate, index) => (
          <VoteCount key={index} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default Result;
