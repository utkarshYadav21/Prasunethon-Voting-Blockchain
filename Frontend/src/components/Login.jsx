import { Link } from "react-router-dom";
import image from "../assets/signup.jpg"
const Login = () => {
  return (
    <div className="h-[100dvh] bg-[#7091E6] flex justify-center items-center">
      <div className="bg-white h-[450px] w-[500px] rounded-md flex flex-row gap-3 min-w-[900px] justify-between">
        <div className="m-8 mt-0 p-4 min-w-[400px]">
            <form className="py-4" action="">
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-gray-600 pb-8">Login with your email and password</p>
            <div className="mb-5 pt-2">
            <label htmlFor="">Email</label>
            <input className=" w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer" placeholder="Enter your email" type="text" />
            </div>
            <div className="mb-5 pt-2">
            <label htmlFor="">Password</label>
            <input className="w-full px-4 py-3 border border-solid border-[#3D52A0] text-[16px] leading-7 rounded-md cursor-pointer" placeholder="Enter your password" type="password" />
            </div>
            <div>
                <Link to="/profile"><button className="text-white bg-[#3D52A0] py-2 px-4 min-w-[120px] rounded-md">Login</button></Link>
            </div>
            </form>
            <div>
                <p>Not registered yet? <span className="text-[#3D52A0]"><Link to="/signup"> Signup</Link></span></p>
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
