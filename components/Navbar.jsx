import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("authenticated"));
  }, []);

  const router = useRouter();

  return (
    <>
      <div
        className={`grid grid-cols-3 px-4 md:px-10 pt-3 pb-2 md:pb-2 text-white ${
          dropdown ? "bg-[#B4AAA7]" : "bg-none"
        }`}
      >
        <div className="flex flex-row items-center">
          <div className="cursor-pointer">
            {!dropdown && (
              <img
                src="https://img.icons8.com/ios-glyphs/26/ffffff/null/menu-rounded.png"
                onClick={() => setDropdown(true)}
              />
            )}
            {dropdown && (
              <img
                src="https://img.icons8.com/material-outlined/26/ffffff/null/multiply--v1.png"
                onClick={() => setDropdown(false)}
              />
            )}
          </div>
          <Link href="/about" className="mx-2 ml-4 hidden md:block">
            <div>About Us</div>
          </Link>
          <Link href="/sessions" className="mx-2 hidden md:block">
            <div>Sessions</div>
          </Link>
          <Link href="/events" className="mx-2 hidden md:block">
            <div>Events</div>
          </Link>
        </div>

        <Link href={"/"}>
          <div className="flex flex-row items-center justify-center">
            <img
              src="/assets/logo.png"
              alt="logo"
              width="50px"
              className="rounded-full"
            />
            <h1 className="ml-4 text-[22px]">YogaYatra</h1>
          </div>
        </Link>

        <button
          className="flex flex-row items-center justify-end"
          onClick={() =>
            router.push(` ${isAuthenticated ? "/dashboard" : "/login"}`)
          }
        >
          <img
            src="https://img.icons8.com/small/26/ffffff/null/user.png"
            className="cursor-pointer"
          />
          {isAuthenticated ? (
            <span className="hidden md:block">Dashboard</span>
          ) : (
            <span className="hidden md:block">Login</span>
          )}
        </button>
      </div>

      <AnimatePresence>
        {dropdown && (
          <motion.div
            initial="hidden"
            animate={dropdown ? "visible" : "hidden"}
            exit="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -10 },
            }}
          >
            <>
              <div className="h-max flex flex-col md:px-10 px-5 text-white bg-[#B4AAA7]">
                <Link href="/about" className="md:my-3 my-1 block md:hidden">
                  <div>About Us</div>
                </Link>
                <Link href="/sessions" className="md:my-3 my-1 block md:hidden">
                  <div>Sessions</div>
                </Link>
                <Link href="/events" className="md:my-3 my-1 block md:hidden">
                  <div>Events</div>
                </Link>
                <Link href="/" className="md:my-3 my-1">
                  <div>Instructors</div>
                </Link>
                <Link href="/guru" className="md:my-3 my-1">
                  <div>Guru</div>
                </Link>
                <Link href="/" className="md:my-3 my-1">
                  <div>Testimonials</div>
                </Link>
                <Link href="/" className="md:my-3 my-1">
                  <div>FAQ</div>
                </Link>
                <Link href="/" className="md:my-3 my-1">
                  <div>Blog</div>
                </Link>
                <Link href="/" className="md:my-3 my-1">
                  <div>Gallery</div>
                </Link>
                <Link href="/" className="md:my-3 my-1">
                  <div>Contact Us</div>
                </Link>
                <button
                  className="my-3 py-2 px-4 rounded block md:hidden"
                  onClick={() => router.push("/login")}
                >
                  Login
                </button>
              </div>
            </>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
