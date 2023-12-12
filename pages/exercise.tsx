import Navbar from "./components/Navbar";
import Webcam from "react-webcam";
import { useState } from "react";

export default function exercise() {
    const [isCameraOn, setIsCameraOn] = useState(false);
  return (
    <>
    <Navbar/>
    <div className={`resotho relative flex flex-col px-7 mb-10 items-center`}>
        <span className='text-center text-xl my-10'>Live Exercise</span>
        {
            isCameraOn && <Webcam 
            audio={false}
            />
        }
        <button onClick={() => setIsCameraOn(!isCameraOn)} className='bg-purple-500 text-white w-full p-3 md:w-1/3 mt-10'>{isCameraOn ? "Turn Off Camera" : "Turn On Camera"}</button>
      </div>
    </>
  )
}
