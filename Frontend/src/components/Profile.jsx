import image from "../assets/home.png";
import { Link, useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  let user = localStorage.getItem("voter");
  if (!user) {
    navigate("/");
  }
  user = JSON.parse(user);
  let role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("voter");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-t from-custom-light to-custom-dark text-white h-[100dvh]">
      <div className="flex flex-row justify-around min-h-[150px] p-6 text-blue-950">
        <div className="font-bold text-2xl">VoteX</div>
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
      <div className="flex flex-row justify-around items-center">
        <div className="grid gap-10 min-w-[30%]">
          <div className="pb-[50px] px-[30px] rounded-md">
            <div className="flex items-center justify-center">
              <figure className="w-[300px] h-[300px] rounded-full border-2 border-solid border-primaryColor">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              </figure>
            </div>
            <div className="text-center mt-4"></div>
            <div className="mt-[50px] md:mt-[80px]">
              <button
                className="md:w-full w-[40%] bg-blue-950 p-3 text-[16px] leading-7 rounded-md text-white"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="-mt-20">
          <div className="w-[700px] md:w-[500px] p-4 shadow-lg rounded-lg mt-6 text-gray-500">
            <div>
              <h3 className="heading text-xl text-headingColor mb-2">Name</h3>
              <span className="text-para rounded-full px-2 my-2">
                {user.name}
              </span>
            </div>
          </div>
          <div className="w-[700px] md:w-[500px] p-4 shadow-lg rounded-lg mt-6 text-gray-500">
            <div>
              <h3 className="heading text-xl text-headingColor mb-2">Email</h3>
              <span className="text-para rounded-full px-2 my-2">
                {user.email}
              </span>
            </div>
          </div>
          <div className="w-[700px] md:w-[500px] p-4 shadow-lg rounded-lg mt-6 text-gray-500">
            <div>
              <h3 className="heading text-xl text-headingColor mb-2">Voter ID</h3>
              <span className="text-para rounded-full px-2 my-2">
                {user.accid}
              </span>
            </div>
          </div>
          {role === "admin" && (
            <div className="w-[700px] md:w-[500px] p-4 shadow-lg rounded-lg mt-6 text-gray-500">
              <div className="flex justify-evenly">
                <button
                  onClick={() => navigate("/authorize")}
                  className="bg-[#3D52A0] text-white font-bold text-s py-2 px-4 rounded ml-2"
                >
                  Authorize the voters
                </button>
                <button
                  onClick={() => navigate("/addCandidate")}
                  className="bg-[#3D52A0] text-white font-bold text-s py-2 px-4 rounded ml-2"
                >
                  Add candidates
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
