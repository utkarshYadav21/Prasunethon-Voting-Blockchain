import { useEffect, useState } from "react";
import image from "../assets/home.png";

const VoteCount = ({ candidate }) => {
  const [name, setName] = useState("");
  const [voteCount, setVoteCount] = useState("");

  useEffect(() => {
    if (candidate) {
      setName(candidate.name);
      setVoteCount(candidate.voteCount);
    }
  }, [candidate]);

  return (
    <div>
      <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#3D52A0] mb-5 cursor-pointer">
        <div className="flex items-center justify-between gap-5">
          <h4 className="text-[16px] text-black leading-7 lg:text-[22px] lg:leading-8 text-headingColor">{name}</h4>
          <img className="w-[80px] h-[50px]" src={image} alt="" />
          <p className="text-gray-500">{voteCount}</p>
        </div>
      </div>
    </div>
  );
};

export default VoteCount;
