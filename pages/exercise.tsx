import Navbar from "./components/Navbar";
import Webcam from "react-webcam";
import { useState } from "react";

export default function exercise() {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [mode, setMode] = useState("exercise"); // ["exercise", "yoga"]
  const [exercise, setExercise] = useState("pushup"); // ["pushup", "situp", "squat"]
  const vidSrc = `/${exercise}.mp4`;
  console.log(exercise);
  console.log(vidSrc);
  console.log(mode)
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row md:max-h-[85vh]">
        <div
          className={`md:sticky md:w-2/3 md:border-r  md:border-black flex flex-col px-7 mb-10 items-center`}
        >
          <span className="text-center uppercase tracking-widest text-xl my-10">Live Exercise</span>
          {isCameraOn ? (
            <Webcam width={500} height={500} audio={false} />
          ) : (
            <div className="h-[250px] w-[335px] md:w-[500px] md:h-[375px] aspect-video bg-gray-200 animate-pulse"></div>
          )}
          <button
            onClick={() => setIsCameraOn(!isCameraOn)}
            className="bg-black text-white w-full p-3 md:w-1/3 mt-10"
          >
            {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
          </button>
        </div>
        <div className="flex md:w-1/3 flex-col gap-y-5 p-10 md:overflow-x-hidden overflow-y-scroll ">
          <span className="text-xl">Choose Exercise and level: </span>
          <select className="px-1 py-2 focus:outline-none border border-black" name="" id="" onChange={(e) => setMode(e.target.value) }>
            <option value="exercise">Exercise</option>
            <option value="yoga">Yoga</option>
          </select>
          <hr />
          {mode === "exercise" ? (
            <select
              onChange={(e) => setExercise(e.target.value)}
              className="px-1 py-2 focus:outline-none border border-black"
            >
              {" "}
              <option defaultChecked disabled value="Exercise">
                Exercise
              </option>
              <option value="pushup">Pushup</option>
              <option value="situp">Situp</option>
              <option value="squat">Squat</option>
            </select>
          ) : (
            <select
              onChange={(e) => setExercise(e.target.value)}
              className="px-1 py-2 focus:outline-none border border-black"
            >
              {" "}
              <option defaultChecked disabled value="Exercise">
                Yoga
              </option>
              <option value="yoga">Asana 1</option>
              <option value=".">Asana 2</option>
            </select>
          )}

          <form className="flex justify-between">
            <div className="flex gap-x-2 items-center">
              <input type="radio" name="beginner" id="beginner" />
              <label htmlFor="beginner">Beginner</label>
            </div>
            <div className="flex gap-x-2 items-center">
              <input type="radio" name="beginner" id="beginner" />
              <label htmlFor="beginner">Intermediate</label>
            </div>
            <div className="flex gap-x-2 items-center">
              <input type="radio" name="beginner" id="beginner" />
              <label htmlFor="beginner">Advanced</label>
            </div>
          </form>
          <span className="text-xl">Exercise Demo: </span>
          <hr />
          <video src={vidSrc} autoPlay loop muted></video>
          <span className="text-xl">Exercise Description: </span>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            minima ut quo dolores, perferendis temporibus vero at excepturi
            tempora quis assumenda autem molestiae libero? Neque consectetur
            deserunt numquam non enim perspiciatis nihil!
          </p>
        </div>
      </div>
    </>
  );
}
