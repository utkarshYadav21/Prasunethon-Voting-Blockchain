import image from "../assets/home.png"
const VoteCount = () => {
  return (
    <div>
        <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#3D52A0] mb-5 cursor-pointer'>
        <div className="flex items-center justify-between gap-5">
            <h4 className='text-[16px] text-black leading-7 lg:text-[22px] lg:leading-8 text-headingColor'>Candidate Name</h4>
            <img className='w-[80px] h-[50px]' src={image} alt="" />
            <p className='text-gray-500'>Voting Count</p>
            </div>
            </div>
    </div>
  )
}

export default VoteCount