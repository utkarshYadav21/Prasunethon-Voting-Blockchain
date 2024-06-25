import { Link } from "react-router-dom";
import VoteCount from "./VoteCount";
const Result = () => {
  return (
    <div className="bg-gradient-to-t from-custom-light to-custom-dark text-white h-[100dvh]">
        <div className="flex flex-row justify-around min-h-[150px] p-6 text-blue-950">
        <div className=" font-bold text-2xl">Logo/Name</div>
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
      <div className="w-[70%] mx-auto">
      <h1 className=" items-center ml-4 text-3xl mb-3 text-black">Winner</h1>
      <VoteCount/>
      </div>
      <h1 className=" items-center ml-[16%] text-3xl mb-3 text-black">Leaderboard</h1>
      <div className="w-[70%] mx-auto">
        <VoteCount/>
        <VoteCount/>
        <VoteCount/>
      </div>
    </div>
  )
}

export default Result