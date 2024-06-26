import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/signup.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
      if (data.status) {
        localStorage.setItem("voter", data.user);
        localStorage.setItem("token", data.token);
        navigate("/profile");
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="h-screen bg-[#7091E6] flex justify-center items-center">
      <div className="bg-white h-[450px] w-[500px] rounded-md flex flex-row gap-3 min-w-[900px] justify-between">
        <div className="m-8 mt-0 p-4 min-w-[400px]">
          <form className="py-4" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-gray-600 pb-8">
              Login with your email and password
            </p>
            <div className="mb-5 pt-2">
              <label htmlFor="">Email</label>
              <input
                value={formData.email}
                onChange={handleChange}
                name="email"
                className="w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer"
                placeholder="Enter your email"
                type="text"
              />
            </div>
            <div className="mb-5 pt-2">
              <label htmlFor="">Password</label>
              <input
                value={formData.password}
                onChange={handleChange}
                name="password"
                className="w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <div>
              <button
                className="text-white bg-[#3D52A0] py-2 px-4 min-w-[120px] rounded-md"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div>
            <p>
              Not registered yet?{" "}
              <span className="text-[#3D52A0]">
                <Link to="/signup">Signup</Link>
              </span>
            </p>
          </div>
        </div>
        <div className="items-center justify-between flex">
          <img className="w-[400px]" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
