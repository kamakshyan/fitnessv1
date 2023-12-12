import { SignIn } from "@clerk/nextjs";
import Navbar from "../components/Navbar";


export default function Signin() {
  return (
    <>
      
      <div className="flex flex-col items-center justify-center h-screen ">
      <p className="resotho text-center mb-2 text-lg">FITPAL</p>
        <SignIn />
      </div>
    </>
  );
}
