import React from "react";

const VotersCard = () => {
  return (
    <>
      <div className="lg:w-1/3 px-2 mb-4 ">
        <div className="text-center shadow-md bg-[#EDE8F5] p-4 pt-5 rounded-xl transform transition-transform duration-300 hover:scale-105">
          <h3 className="mt-3 text-xl mb-1 font-bold">Vimal Kumar</h3>
          <h6 className="text-lg ">
            Age: <span className="text-[#3D52A0] font-bold">34</span>
          </h6>
          <h4 className="mt-2 mb-3 text-lg">
            Account Id:{" "}
            <span className="text-[#3D52A0] font-bold">
              234682346238hsj3jx23ngsjwfw
            </span>
          </h4>

          <button className="bg-[#3D52A0] text-white font-bold text-s py-2 px-4 rounded ml-2 transform transition-transform duration-300 hover:scale-105">
            Authorize
          </button>
        </div>
      </div>
    </>
  );
};

export default VotersCard;
