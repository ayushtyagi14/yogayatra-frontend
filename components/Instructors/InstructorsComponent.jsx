import React from "react";

const InstructorsComponent = () => {
  return (
    <>
      <div className="mx-4">
        <h1 className="text-center md:text-[40px] text-[26px] uppercase font-epilogue leading-none mt-12">
          Meet the best{" "}
          <span className="text-[#f86454]"> Yoga Instructors </span>
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-5">
          <div className="flex flex-col items-center pb-2 md:w-[50%] md:mx-auto mb-10 md:mb-0 rounded-lg shadow bg-[#f1f1f1]">
            <div className="bg-[#b4aaa7] w-full flex justify-center">
              <img
                src="/assets/sakina-vagh.png"
                alt="yoga-teacher"
                width="250px"
              />
            </div>
            <span className="text-[24px] mt-3">Sakina Vagh</span>
            <button
              className=" text-[#f86454] mb-3"
              onClick={() => router.push("/instructors/sakina-vagh")}
            >
              View Profile
            </button>
          </div>
          <div className="flex flex-col items-center pb-2 md:w-[50%] md:mx-auto rounded-lg shadow bg-[#f1f1f1]">
            <div className="bg-[#b4aaa7] w-full flex justify-center">
              <img
                src="/assets/rathnavel-pandian.png"
                alt="yoga-teacher"
                width="250px"
              />
            </div>
            <span className="text-[24px] mt-3">Rathnavel Pandian</span>
            <button
              className="text-[#f86454] mb-3"
              onClick={() => router.push("/instructors/rathnavel-pandian")}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorsComponent;
