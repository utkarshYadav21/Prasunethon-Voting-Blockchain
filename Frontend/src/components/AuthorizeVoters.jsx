import React from "react";
import VotersCard from "./VotersCard";

const AuthorizeVoters = () => {
  return (
    <div className=" bg-[#7091E6] h-screen flex flex-col justify-center items-center">
      <h2 className=" text-2xl font-bold -mb-12 text-[#EDE8F5] ">Authorize the Voters</h2>
      <div className="flex flex-wrap  p-24">
        <VotersCard />
        <VotersCard />
        <VotersCard />
        <VotersCard />
        <VotersCard />
        <VotersCard />
      </div>
    </div>
  );
};
export default AuthorizeVoters;
