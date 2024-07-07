import image from '../assets/home.png'
import { Link } from "react-router-dom";
import {faqs } from "../assets/faq"
import Faq from '../components/Faq';
const Home = () => {
  return (
    <div className="bg-gradient-to-t from-custom-light to-custom-dark h-full p-4">
        <div className="flex flex-row justify-between min-h-[200px] p-6">
            <div className=" font-bold text-2xl">VoteX</div>
            <div>
                <Link to="/login"><button className="text-white bg-[#3D52A0] py-2 px-4 min-w-[120px] rounded-md">Login</button></Link>
            </div>
        </div>
        <div className="flex flex-row justify-center items-center p-6">
            <div className="flex flex-col p-8 gap-3 max-w-[500px]">
                <div>
                    <h1 className='text-4xl font-semibold'>Start voting in minutes</h1>
                </div>
                <div>
                    <p className=' text-gray-600'>Polling made easy. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                    <Link to="/login"><button className="text-white bg-[#3D52A0] py-2 px-4 min-w-[120px] rounded-md">Get Started</button></Link>
                </div>
            </div>
            <div className='p-8'>
                <img className='w-[600px]' src={image} alt="" />
            </div>
        </div>
        <div className='mt-4 w-[70%] justify-center items-center mx-auto pt-4'>
        <ul className='mt-[38px]'>
        {
            faqs.map((item,index)=> <Faq item={item} key={index}/>)
        }
        </ul>
        </div>
    </div>
  )
}

export default Home