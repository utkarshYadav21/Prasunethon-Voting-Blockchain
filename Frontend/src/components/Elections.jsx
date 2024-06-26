import { Link } from "react-router-dom";
import Candidate from "./Candidate";
import { useEffect, useState } from "react";
const Elections = ({ data }) => {
  const [name, setName] = useState("");
  const [candidates, setCandidates] = useState([]);

  const fetchCandidates = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/candidate/get",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (result.success) {
        setCandidates(result.candidates);
      }
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  useEffect(() => {
    console.log("from", data);
    setName(data.electionName);
  }, [data]);
  return (
    <div className="bg-gradient-to-t from-custom-light to-custom-dark text-white h-[100dvh]">
      <div className="flex flex-row justify-around min-h-[150px] p-6 text-blue-950">
        <div className=" font-bold text-2xl">Logo/Name</div>
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
      <h1 className=" items-center ml-[16%] text-3xl mb-3 text-black">
        {name}{" "}
      </h1>
      <div className="w-[70%] mx-auto">
        {candidates.map((candidate, index) => (
          <Candidate key={index} data={candidate} />
        ))}
      </div>
    </div>
  );
};

export default Elections;
