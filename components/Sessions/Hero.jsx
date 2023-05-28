import React from "react";
import Image from "next/image";

const Hero = ({ name, isClass }) => {
  return (
    <div className="relative">
      <div className="md:h-[75vh] h-[55vh]">
        <Image
          src={"/assets/session-banner.webp"}
          alt="yogayatra-sessions"
          fill
          className="brightness-[65%] object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <h1 className="md:text-[50px] text-[30px] mt-10 md:mt-0 font-bold md:mb-4">
          {name}
        </h1>
        {isClass && (
          <button className="rounded-lg py-2 px-6 text-white bg-[#353746] md:mt-0 mt-4">
            Book This Class
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;
