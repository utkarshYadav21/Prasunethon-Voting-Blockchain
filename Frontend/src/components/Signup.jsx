import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    accid: "",
    dob: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Name: ${name}, Value: ${value}`);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        console.log(data)
        navigate("/login");
      } else {
        console.error("Signup failed:", data.message);
      }
    } catch (error) {
      console.error("Signup failed:", error.message);
    }
  };
  return (
    <div className="h-[100dvh] bg-[#7091E6] flex justify-center items-center">
      <div className="bg-white h-[540px] rounded-md flex flex-row justify-between">
        <div className="m-8 mt-0 p-4 min-w-[400px]">
          <form className="py-4" action="">
            <h1 className="text-2xl font-bold">Signup</h1>
            <p className="text-gray-600 pb-8">Create a new account</p>
            <div className="flex flex-row justify-between gap-[24px]">
              <div>
                <div className="mb-3 pt-2">
                  <label htmlFor="">Name</label>
                  <input
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    id="name"
                    className=" w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
                <div className="mb-3 pt-2">
                  <label htmlFor="">Email</label>
                  <input
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    id="email"
                    className=" w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer"
                    placeholder="Enter your email"
                    type="text"
                  />
                </div>
                <div className="mb-3 pt-2">
                  <label htmlFor="">Password</label>
                  <input
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                    id="password"
                    className="w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer"
                    placeholder="Enter your password"
                    type="password"
                  />
                </div>
              </div>
              <div>
                <div className="mb-3 pt-2">
                  <label htmlFor="">ID</label>
                  <input
                    value={formData.accid}
                    onChange={handleChange}
                    name="accid"
                    id="accid"
                    className=" w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer"
                    placeholder="Enter your ID"
                    type="text"
                  />
                </div>
                <div className="mb-3 pt-2">
                  <label htmlFor="">DOB</label>
                  <input
                    value={formData.dob}
                    onChange={handleChange}
                    name="dob"
                    id="dob"
                    className=" w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer"
                    placeholder="Enter your DOB"
                    type="date"
                  />
                </div>
                {/* <div className="mb-3 pt-2">
                  <label htmlFor="">Age</label>
                  <input
                    value={formData.age}
                    onChange={handleChange}
                    className=" w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer"
                    placeholder="Enter your Age"
                    type="text"
                  />
                </div> */}
              </div>
            </div>
            <div>
              <Link to="/login" onClick={handleSubmit}>
                <button className="text-white bg-[#3D52A0] py-2 px-4 min-w-[120px] rounded-md">
                  Signup
                </button>
              </Link>
            </div>
          </form>
          <div>
            <p>
              Already have an account?{" "}
              <span className="text-[#3D52A0]">
                <Link to="/login"> Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
