import { TbMenu } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useClerk, useUser } from "@clerk/nextjs";
import router from "next/router";

export default function Navbar() {
  // const { isSignedIn, user, isLoaded } = useUser();
  function showMenu() {
    const menu = document.querySelector(".menu");
    menu?.classList.toggle("hidden");
  }
  const menuList = [
    {
      name: "Home",
      path: "/",
    },
    // {
    //   name: "Login",
    //   path: "/sign-in",
    // },
    // {
    //   name: "Register",
    //   path: "/sign-up",
    // },
    {
      name: "Exercise",
      path: "/exercise",
    },
    // {
    //   name: "Profile",
    //   path: "/profile",
    // },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    // {
    //   name: "Signout",
    //   path: "/sign-out",
    // },
  ];
  // const updatedMenu = user ? menuList.filter((item,index) => index === 0 || index>=3 && index <= 5) : menuList.slice(0,3);

  // const {signOut} = useClerk();

  return (
    <>
      <div className="flex items-center justify-between p-5 border-b border-b-black">
        <Link href={"/"} className="uppercase tracking-widest text-lg bg-black text-white px-5 py-2">
          Fitz
        </Link>
        <TbMenu className="md:hidden" onClick={showMenu} />
        <div className="hidden md:flex gap-x-4 uppercase tracking-wider">
        {/* {updatedMenu.map((item, index) => {
          if (item.name === "Signout")
            return (
              <span onClick={() => signOut(() => router.push("/"))} key={index} className="text-left">
                <span className="flex hover:-translate-y-1 transition-all ease-in-out duration-300 hover:cursor-pointer items-center justify-between">
                  {item.name}
                </span>
              </span>
            );
          else
            return (
              <Link href={item.path} key={index} className="text-left hover:-translate-y-1 transition-all ease-in-out duration-300">
                <span className="flex items-center justify-between">
                  {item.name}
                </span>
              </Link>
            );
        })} */}
        {
          menuList.map((item,index) => {
            return (
              <Link href={item.path} key={index} className="text-left hover:-translate-y-1 transition-all ease-in-out duration-300">
                <span className="flex items-center justify-between">
                  {item.name}
                </span>
              </Link>
            );
          })
        }
      </div>
      </div>
      
      <div className="hidden flex flex-col gap-y-3 text-lg resotho h-screen menu px-5 uppercase tracking-wider">
        {/* {updatedMenu.map((item, index) => {
          if (item.name === "Signout")
            return (
              <span onClick={() => signOut(() => router.push("/"))} key={index} className="text-left">
                <span className="flex items-center justify-between">
                  {item.name} <BsArrowRight />
                </span>
              </span>
            );
          else
            return (
              <Link href={item.path} key={index} className="text-left">
                <span className="flex items-center justify-between">
                  {item.name} <BsArrowRight />
                </span>
              </Link>
            );
        })} */}
        {
          menuList.map((item,index) => {
            return (
              <Link href={item.path} key={index} className="text-left">
                <span className="flex items-center justify-between">
                  {item.name} <BsArrowRight />
                </span>
              </Link>
            );
          })
        }
      </div>
    </>
  );
}
