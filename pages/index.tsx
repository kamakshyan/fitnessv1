import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import hero from "../public/tyler-nix-Pd5bbWoIUis-unsplash.jpg";
import mdhero from "../public/omid-armin-rAh9rA53UWk-unsplash.jpg";

import { BsArrowRight } from "react-icons/bs";
import { useUser } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "400", "700", "800", "900"],
});

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(user)
  return (
    <>
      <Navbar />
      <div className={`resotho relative flex flex-col md:grid md:grid-cols-2 md:gap-x-20 px-7 my-10 items-center`}>
        <div className="mt-2 rounded-[50px] md:rounded-lg overflow-hidden">
          <Image className="md:hidden" src={hero} alt="hero" />
          <Image className="hidden md:block" src={mdhero} alt="hero" />
          {/* <span
            className={`${poppins.className} absolute p-5 text-5xl font-bold tracking-wider drop-shadow-lg uppercase top-1/2 mx-auto w-full text-center text-white`}
          >
            Be The Best You
          </span> */}
        </div>
        <div className="text-center mt-10">
        <span className="tracking-wider mt-10 text-center text-2xl">
          Unleash Your Ultimate{" "}
          <span className="text-purple-500">Fitness Potential</span> with FitPal
          !
        </span>
        <Link
          className="group mx-auto md:w-1/2 hover:-skew-x-12 hover:bg-slate-900 hover:text-white border border-slate-900 font-bold italic transition-all duration-500 overflow-hidden flex items-center gap-x-4 mt-5 tracking-widest text-lg px-7 py-3"
          href={user ? "/dashboard" : "/sign-up"}
        >
          <span className="mx-auto">{user ? "Dashboard" : "Get Started"}</span>
          <BsArrowRight className="group-hover:translate-x-2 transition-all ease-in-out duration-500" />
        </Link>
        </div>
      </div>
    </>
  );
}
