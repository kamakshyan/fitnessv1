import Navbar from "./components/Navbar";
import { useRouter } from "next/router";
export default function beginner() {
    const router = useRouter();
    const formSubmit =  async(e:any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);
        await router.push('/exercise')

    }
  return (
    <>
      <Navbar />
      <div className={`resotho relative flex flex-col px-7 mb-10 items-center`}>
        <span className="text-center text-xl my-10">
          Answer some questions to get started
        </span>
        <form onSubmit={formSubmit} className="flex flex-col items-center gap-y-5">
          <div className="flex flex-col items-center gap-x-3 w-full">
            <label>Enter Age</label>
            <input name="age" className="p-1 border text-black border-black focus:outline-none" type="number" min={16} />
          </div>
          <div className="flex flex-col items-center gap-x-3 w-full">
            <label>Enter Weight (kgs)</label>
            <input name="weight" className="p-1 text-black border border-black focus:outline-none" type="number" />
          </div>
          <div className="flex flex-col items-center gap-x-3 w-full">
            <label>Enter Height (cms)</label>
            <input name="height" className="p-1 border text-black  border-black focus:outline-none" type="number" />
          </div>
          <div className="flex flex-col items-center gap-x-3 w-full">
            <label>Your goals</label>
            <textarea className="h-32 border text-black border-black px-3 py-1 focus:outline-none" placeholder="I expect to reduce my weight and increase muscle mass"></textarea>
          </div>
          <input className="mx-auto w-full text-center hover:-skew-x-12 hover:bg-slate-900 hover:text-white border border-slate-900 font-bold italic transition-all duration-500 overflow-hidden mt-5 tracking-widest hover:cursor-pointer px-7 py-3" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
