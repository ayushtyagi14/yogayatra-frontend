import React, { useState, useEffect } from "react";
import { useStateContext } from "../../context/StateContext";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ onPageChange }) => {
  const { isSidebarOpen, setIsSidebarOpen } = useStateContext();

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate={isSidebarOpen ? "visible" : "hidden"}
        exit="hidden"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -10 },
        }}
      >
        <div
          className={`${
            isSidebarOpen ? "md:w-[12rem] w-[20rem] block" : "w-0 hidden"
          }
          fixed left-0 top-0 flex flex-col items-center justify-between h-screen bg-[#B4AAA7] transition-all duration-500 ease-in-out`}
        >
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden absolute top-0 right-0 m-4 text-[40px] text-white cursor-pointer"
          >
            &times;
          </button>
          <div className="flex flex-col h-full p-4 md:p-8">
            <img
              src="/assets/logo.png"
              alt="logo"
              width="50px"
              className="mr-2 rounded-full"
            />
            <ul className="flex-1 flex flex-col mt-5 text-[24px] md:text-[16px]">
              <li>
                <div
                  onClick={() => {
                    setIsSidebarOpen(false);
                    onPageChange("users");
                  }}
                  className="p-2 mb-4 rounded-lg hover:bg-gray-100 cursor-pointer w-full"
                >
                  Users
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    setIsSidebarOpen(false);
                    onPageChange("sessions");
                  }}
                  className="p-2 mb-4 rounded-lg hover:bg-gray-100 cursor-pointer w-full"
                >
                  Sessions
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    setIsSidebarOpen(false);
                    onPageChange("events");
                  }}
                  className="p-2 mb-4 rounded-lg hover:bg-gray-100 cursor-pointer w-full"
                >
                  Events
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    setIsSidebarOpen(false);
                    onPageChange("testimonials");
                  }}
                  className="p-2 mb-4 rounded-lg hover:bg-gray-100 cursor-pointer w-full"
                >
                  Testimonials
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    setIsSidebarOpen(false);
                    onPageChange("instructors");
                  }}
                  className="p-2 mb-4 rounded-lg hover:bg-gray-100 cursor-pointer w-full"
                >
                  Instructors
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    setIsSidebarOpen(false);
                    onPageChange("blogs");
                  }}
                  className="p-2 mb-4 rounded-lg hover:bg-gray-100 cursor-pointer w-full"
                >
                  Blogs
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    setIsSidebarOpen(false);
                    onPageChange("gallery");
                  }}
                  className="p-2 mb-4 rounded-lg hover:bg-gray-100 cursor-pointer w-full"
                >
                  Gallery
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    setIsSidebarOpen(false);
                    onPageChange("faq");
                  }}
                  className="p-2 mb-4 rounded-lg hover:bg-gray-100 cursor-pointer w-full"
                >
                  FAQ
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
