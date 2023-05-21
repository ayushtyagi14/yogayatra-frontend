import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Head from "next/head";
import MyHead from "../MyHead";

const Layout = ({ children, title, description }) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const router = useRouter();

  return (
    <>
      <MyHead title={title} description={description} />
      {colorChange ? (
        <div className="fixed top-0 w-full bg-[#B4AAA7] shadow z-[999]">
          <Navbar />
        </div>
      ) : (
        <div className="fixed top-0 w-full z-[999]">
          <Navbar />
        </div>
      )}
      <main style={{ marginBottom: 20 }}>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          id="page-transition-container"
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
