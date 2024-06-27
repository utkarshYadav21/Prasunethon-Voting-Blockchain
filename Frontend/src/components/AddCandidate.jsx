import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddCandidate = ({ voting }) => {
  
  const [image, setImage] = useState("");
  const [candidateData, setCandidateData] = useState({
    name: "",
    partyname: "",
    dob: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCandidateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const convertToBase64 = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (err) => {
      console.log(err);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", { candidateData, image });

    try {
      let tx, added, candidatesCount;
      try {
        const candidatesBigNumberCount = await voting.candidatesCount();
        candidatesCount=candidatesBigNumberCount.toNumber()
        console.log("Candidates count:", candidatesCount);

        tx = await voting.addCandidate(candidateData.name);
        await tx.wait();
        console.log("Candidate added:", tx);

        added = true;
      } catch (error) {
        console.error("Error adding candidate:", error);
      }
      if (added) {
        const response = await fetch(
          "http://localhost:5000/api/v1/candidate/add",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              formData: candidateData,
              image: image,
              candidateId: candidatesCount + 1,
            }),
          }
        );

        const data = await response.json();
        if (data.success) {
          console.log(data);
        } else {
          console.error("Login failed:", data.message);
        }
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
    setCandidateData({
      name: "",
      partyname: "",
      dob: "",
      description: "",
    });
    setImage(null);
  };

  return (
    <div className="bg-gradient-to-t from-custom-light to-custom-dark min-h-screen flex flex-col gap-10">
      <div className="flex flex-row justify-around p-6 text-blue-950">
        <div className="font-bold text-2xl">Logo/Name</div>
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
      <div className="flex-grow">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 max-w-xl mx-auto"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="name"
            >
              Candidate Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Candidate Name"
              name="name"
              value={candidateData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="partyName"
            >
              Party Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="partyName"
              type="text"
              placeholder="Party Name"
              name="partyName"
              value={candidateData.partyName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="dob"
            >
              Date of Birth
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              type="date"
              placeholder="Date of Birth"
              name="dob"
              value={candidateData.dob}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Description"
              name="description"
              value={candidateData.description}
              onChange={handleInputChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              accept="image/*"
              type="file"
              name="image"
              onChange={convertToBase64}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-[#3D52A0] text-white font-bold text-s py-2 px-4 rounded ml-2 transform transition-transform duration-300 hover:scale-105"
              type="submit"
            >
              Add Candidate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCandidate;
