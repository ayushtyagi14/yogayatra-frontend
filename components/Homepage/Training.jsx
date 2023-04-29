import React from "react";
import { useRouter } from "next/router";

const Training = () => {
  const router = useRouter();

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 mx-10 mt-40">
        <div className="flex flex-col md:items-start items-center justify-between py-10">
          <h1 className="md:text-[40px] text-[30px] leading-none my-4 md:my-0">
            <span className="text-[#f86454]"> Training Programs </span> <br />{" "}
            We Offer For You
          </h1>
          <p className="text-center md:text-start font-poppins md:w-[90%] my-4 md:my-0">
            Starting a yoga routine can be intimidating, but it helps to have an
            idea of what to expect before joining any class.
          </p>
          <button
            className="bg-[#B4AAA7] border border-[#B4AAA7] hover:bg-[#ececec] px-5 py-3 rounded-xl text-white hover:text-[#B4AAA7] my-4 md:my-0"
            onClick={() => router.push("/sessions")}
          >
            Learn More
          </button>
        </div>
        <img src="/assets/pose1.jpg" alt="yoga-pose" className="rounded-xl" />
      </div>
    </>
  );
};

export default Training;
