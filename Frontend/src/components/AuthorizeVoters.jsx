import React, { useEffect, useState } from "react";
import VotersCard from "./VotersCard";
import { useNavigate ,Link} from "react-router-dom";
import { toast } from "react-toastify";

const AuthorizeVoters = ({ voting }) => {
  const [voters, setVoters] = useState([]);
  let role = localStorage.getItem("role");
  const navigate = useNavigate();
  if (!(role === "admin")) {
    navigate("/");
  }
  const getVoters = async (e) => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/voter/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.success) {
        setVoters(data.voters);
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  useEffect(() => {
    getVoters();
  }, []);
  return (
    <div className="bg-gradient-to-t from-custom-light to-custom-dark">
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
      <div className=" flex flex-col justify-center items-center">
        <h2 className=" text-2xl font-bold -mb-16 text-blue-950 -mt-6">
          Authorize the Voters
        </h2>
        <div className="flex flex-wrap p-24  justify-center">
          {voters.map((voter, index) => {
            return <VotersCard key={index} data={voter} voting={voting} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default AuthorizeVoters;
