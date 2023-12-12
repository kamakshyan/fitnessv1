import Image from "next/image";
import Navbar from "./components/Navbar";
import { useUser } from "@clerk/nextjs";

export default function profile() {
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(user);
  const imageUrl = user && user.imageUrl || "https://avatars.dicebear.com/api/initials/John%20Doe.svg";
  return (
    <>
      <Navbar />
      <div className="relative mt-24 min-h-full py-10 bg-slate-100 flex flex-col items-center">  
        <Image
          className="absolute -top-20 h-44 w-auto rounded-full"
          height={500}
          width={500}
          src={imageUrl}
          alt="profile"
        />
        <span className="mt-20 resotho text-xl">{isSignedIn && isLoaded ? user.fullName : "Loading .."}</span>
        <span className="mt-2 text-xl">{isSignedIn && isLoaded ? user.emailAddresses[0].emailAddress : "Loading .."}</span>
      </div>
    </>
  );
}
