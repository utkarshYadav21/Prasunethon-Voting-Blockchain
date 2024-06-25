import { Link } from "react-router-dom";
const Signup = () => {
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
                    className=" w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
                <div className="mb-3 pt-2">
                  <label htmlFor="">Email</label>
                  <input
                    className=" w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer"
                    placeholder="Enter your email"
                    type="text"
                  />
                </div>
                <div className="mb-3 pt-2">
                  <label htmlFor="">Password</label>
                  <input
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
                    className=" w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer"
                    placeholder="Enter your ID"
                    type="text"
                  />
                </div>
                <div className="mb-3 pt-2">
                  <label htmlFor="">DOB</label>
                  <input
                    className=" w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer"
                    placeholder="Enter your DOB"
                    type="date"
                  />
                </div>
                <div className="mb-3 pt-2">
                  <label htmlFor="">Age</label>
                  <input
                    className=" w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer"
                    placeholder="Enter your Age"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div>
              <Link to="/login">
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
