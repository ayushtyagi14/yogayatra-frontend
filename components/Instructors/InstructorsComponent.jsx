import React from "react";
import { useRouter } from "next/router";

const InstructorsComponent = () => {
  const router = useRouter();

  return (
    <>
      <div className="mx-4">
        <h1 className="text-center md:text-[40px] text-[26px] uppercase font-epilogue leading-none mt-12">
          Meet the best{" "}
          <span className="text-[#f86454]"> Yoga Instructors </span>
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-5 gap-4">
          <div className="flex flex-col items-center pb-4 md:w-1/2 md:mx-auto rounded shadow bg-white">
            <div className="w-full flex justify-center">
              <img
                src="/assets/sakina-vagh.png"
                alt="yoga-teacher"
                className="h-60 w-60 object-cover rounded-t"
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Sakina Vagh
              </h2>
              <button
                className="text-[#f86454] bg-transparent border border-[#f86454] px-4 py-2 rounded-full font-medium transition duration-300 ease-in-out hover:bg-[#f86454] hover:text-white"
                onClick={() => router.push("/instructors/sakina-vagh")}
              >
                View Profile
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center pb-4 md:w-1/2 md:mx-auto rounded shadow bg-white">
            <div className="w-full flex justify-center">
              <img
                src="/assets/rathnavel-pandian.png"
                alt="yoga-teacher"
                className="h-60 w-60 object-cover rounded-t"
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Rathnavel Pandian
              </h2>
              <button
                className="text-[#f86454] bg-transparent border border-[#f86454] px-4 py-2 rounded-full font-medium transition duration-300 ease-in-out hover:bg-[#f86454] hover:text-white"
                onClick={() => router.push("/instructors/rathnavel-pandian")}
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorsComponent;
