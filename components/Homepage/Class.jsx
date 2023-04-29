import React from "react";
import { useRouter } from "next/router";

const Class = () => {
  const router = useRouter();

  return (
    <>
      <div className="mt-40 mx-10 flex flex-col">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
          <p className="md:text-[40px] text-[30px] leading-none text-center md:text-start">
            Classes For you at <br /> Each{" "}
            <span className="text-[#f86454]"> Level </span>{" "}
          </p>
          <p className="font-poppins md:text-[16px] text-[14px] text-center md:text-start mt-5 md:mt-0">
            Were consistently improving our offerings and services, and pride
            ourselves creating connections with our members and delivering the
            most porsonalized fitness experience possible.
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 mt-8">
          <div className="p-10 md:mx-3 my-5 text-center shadow bg-[#f1f1f1]">
            <h1 className="text-[24px] text-[#f86454]">Beginner Level</h1>
            <p className="font-poppins text-[14px] my-3">
              At our studio, we understand that starting something new can be
              challenging, and that&apos;s why we offer classes specifically
              designed for each levels.
            </p>
            <button
              className="border border-[#b4aaa7] bg-[#b4aaa7] text-white px-5 py-1 rounded-xl mt-3"
              onClick={() => router.push("/levels/beginner-level")}
            >
              Learn More
            </button>
          </div>
          <div className="p-10 md:mx-3 my-5 text-center shadow bg-[#f1f1f1]">
            <h1 className="text-[24px] text-[#f86454]">Intermediate Level</h1>
            <p className="font-poppins text-[14px] my-3">
              At our studio, we understand that starting something new can be
              challenging, and that&apos;s why we offer classes specifically
              designed for each levels.
            </p>
            <button
              className="border border-[#b4aaa7] bg-[#b4aaa7] text-white px-5 py-1 rounded-xl mt-3"
              onClick={() => router.push("/levels/intermediate-level")}
            >
              Learn More
            </button>
          </div>
          <div className="p-10 md:mx-3 my-5 text-center shadow bg-[#f1f1f1]">
            <h1 className="text-[24px] text-[#f86454]">Advanced Level</h1>
            <p className="font-poppins text-[14px] my-3">
              At our studio, we understand that starting something new can be
              challenging, and that&apos;s why we offer classes specifically
              designed for each levels.
            </p>
            <button
              className="border border-[#b4aaa7] bg-[#b4aaa7] text-white px-5 py-1 rounded-xl mt-3"
              onClick={() => router.push("/levels/advanced-level")}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Class;
