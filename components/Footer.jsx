import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#353746] py-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/4 flex flex-col items-center md:items-start">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="h-16 mb-6 rounded-full"
            />
            <p className="text-white leading-tight text-[14px] font-poppins">
              YogaYatra is a platform for yoga enthusiasts to connect with
              instructors and fellow yogis, and explore their practice in a
              supportive community.
            </p>
          </div>
          <div className="md:w-1/4 mt-8 md:mt-0 md:ml-10 md:text-center">
            <h3 className="text-white mb-4 text-[24px]">Explore</h3>
            <ul>
              <li>
                <Link href="/">
                  <div className="text-white hover:text-white transition duration-150 ease-in-out">
                    About Us
                  </div>
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/">
                  <div className="text-white hover:text-white transition duration-150 ease-in-out">
                    Calendar
                  </div>
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/">
                  <div className="text-white hover:text-white transition duration-150 ease-in-out">
                    Instructors
                  </div>
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/">
                  <div className="text-white hover:text-white transition duration-150 ease-in-out">
                    FAQ
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 mt-8 md:mt-0 md:text-center">
            <h3 className="text-white text-[24px] mb-4">Contact Us</h3>
            <ul>
              <li>
                <div
                  href="mailto:yogayatra.in@gmail.com"
                  className="text-white hover:text-white cursor-pointer transition duration-150 ease-in-out"
                >
                  yogayatra.in@gmail.com
                </div>
              </li>
              <li className="mt-3">
                <div
                  href="tel:+919629333344"
                  className="text-white hover:text-white cursor-pointer transition duration-150 ease-in-out"
                >
                  +91 9629333344
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/4 mt-8 md:mt-0 md:text-center">
            <h3 className="text-white text-[24px] mb-4">Follow Us</h3>
            <ul className="flex">
              <li>
                <div
                  href="#"
                  className="text-white hover:text-white transition duration-150 ease-in-out"
                >
                  <span className="sr-only">Facebook</span>
                </div>
              </li>
              <li className="ml-4">
                <div
                  href="#"
                  className="text-white hover:text-white transition duration-150 ease-in-out"
                >
                  <span className="sr-only">Twitter</span>
                  {/* Insert Twitter icon SVG here */}
                </div>
              </li>
              <li className="ml-4">
                <div
                  href="#"
                  className="text-white hover:text-white transition duration-150 ease-in-out"
                >
                  <span className="sr-only">Instagram</span>
                  {/* Insert Instagram icon SVG here */}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white">
            Copyright © {new Date().getFullYear()}
            YogaYatra, Inc. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0">
            <Link href="/">
              <div className="text-white hover:text-white transition duration-150 ease-in-out">
                Privacy Policy
              </div>
            </Link>
            <span className="mx-2 text-white">•</span>
            <Link href="/">
              <div className="text-white hover:text-white transition duration-150 ease-in-out">
                Terms of Service
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
