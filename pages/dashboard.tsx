import Navbar from "./components/Navbar";

export default function dashboard() {
  return (
    <>
    <Navbar />
      <div className={`resotho relative flex flex-col px-7 mb-10 items-center`}>
        <span className="text-center text-xl my-10">
          DASHBOARD
        </span>
        
      </div>
    </>
  )
}
