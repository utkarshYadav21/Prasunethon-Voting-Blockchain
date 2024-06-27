import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import image from "../assets/home.png";

const Candidate = ({ data, voting }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const handleVote = async () => {
    console.log(data.candidateId);
    let id = data.candidateId;

    try {
      console.log(id)
      const tx = await voting.vote(id);
      await tx.wait();
      console.log("Vote cast:", tx);
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#3D52A0] mb-5 cursor-pointer">
      <div className="flex items-center justify-between gap-5">
        <button
          className="bg-[#3D52A0] text-white font-bold text-s py-2 px-4 rounded ml-2"
          onClick={handleVote}
        >
          Vote
        </button>
        <h4 className="text-[16px] text-black leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
          {data.name}
        </h4>
        <img className="w-[80px] h-[50px]" src={image} alt="" />
        <div
          onClick={toggleAccordion}
          className={`${
            isOpen && "bg-primaryColor text-white border-none"
          } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} mt-3`}>
        <h4 className="text-[12px] text-gray-500 leading-7 lg:text-[18px] lg:leading-8 text-headingColor">
          <span className="text-[12px] leading-7 lg:text-[18px] lg:leading-8 text-black">
            Party Name:
          </span>{" "}
          {data.partyname}
        </h4>
        <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-gray-500">
          <span className="text-[12px] leading-7 lg:text-[18px] lg:leading-8 text-black">
            Description:
          </span>{" "}
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default Candidate;
