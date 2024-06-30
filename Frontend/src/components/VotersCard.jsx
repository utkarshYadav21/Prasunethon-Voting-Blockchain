import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const VotersCard = ({ data ,voting}) => {
  const [age, setAge] = useState("");

  function calculateAge(dobString) {
    const dob = new Date(dobString);
    const now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();
    const dayDiff = now.getDate() - dob.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    setAge(age);
  }
  useEffect(() => {
    calculateAge(data.dob);
  }, []);

  const authorizeVoter = async (accid) => {
    console.log(accid);

    try {
      const tx = await voting.authorizeVoter(accid);
      await tx.wait();
      toast.success("Voter Authorized");
      console.log("Voter authorized:", tx);
    } catch (error) {
      toast.error("Error authorizing voter");
      console.error("Error authorizing voter:", error);
    }
  };

  return (
    <>
      <div className=" lg:w-[600px] px-2 mb-4  ">
        <div className="text-center shadow-md bg-[#EDE8F5] p-4 pt-5 rounded-xl transform transition-transform duration-300 hover:scale-105">
          <h3 className="mt-3 text-xl mb-1 font-bold">{data.name}</h3>
          <h6 className="text-lg ">
            Age: <span className="text-[#3D52A0] font-bold">{age}</span>
          </h6>
          <h4 className="mt-2 mb-3 text-lg">
            Account Id:{" "}
            <span className="text-[#3D52A0] font-bold">{data.accid}</span>
          </h4>

          <button
            onClick={() => authorizeVoter(data.accid)}
            className="bg-[#3D52A0] text-white font-bold text-s py-2 px-4 rounded ml-2 transform transition-transform duration-300 hover:scale-105"
          >
            Authorize
          </button>
        </div>
      </div>
    </>
  );
};

export default VotersCard;
