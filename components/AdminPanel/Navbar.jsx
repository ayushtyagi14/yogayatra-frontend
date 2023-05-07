import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useStateContext } from "../../context/StateContext";

const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useStateContext();

  const router = useRouter();

  return (
    <>
      <div className="flex flex-row justify-between items-center w-full py-1 px-4">
        <div className="cursor-pointer md:hover:shadow-xl md:hover:bg-white p-1 rounded-lg">
          <img
            src="https://img.icons8.com/ios-glyphs/26/null/menu-rounded.png"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>

        <Link href={"/"} className="">
          <div className="flex flex-row items-center">
            <img
              src="/assets/logo.png"
              alt="logo"
              width="50px"
              className="rounded-full"
            />
            <h1 className="ml-4 md:block hidden">YogaYatra</h1>
          </div>
        </Link>

        <button
          className="flex flex-row items-center bg-[#B4AAA7] text-white rounded-xl py-1.5 px-4 w-max hover:bg-[#d6cac7]"
          onClick={() => {
            router.push("/admin-login"), localStorage.removeItem("isAdmin");
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
