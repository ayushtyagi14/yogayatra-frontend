import React from "react";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <div className="relative md:pb-16 pb-36">
        <div className="h-[95vh]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="brightness-[65%] w-full h-full object-cover"
          >
            <source src={"/assets/hero-banner.mp4"} type="video/mp4" />
          </video>
        </div>

        <div className="relative text-center">
          <div className="z-[999] md:mt-[-330px] mt-[-360px] text-white md:text-[65px] text-[40px] text-center leading-tight uppercase font-extrabold">
            <p> Welcome To YogaYatra </p>
          </div>
          <button
            className="rounded-lg py-2 px-6 text-white bg-[#353746]"
            onClick={() => router.push("/sessions")}
          >
            Book a Class
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
