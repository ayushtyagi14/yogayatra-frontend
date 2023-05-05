import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <div className="md:h-[85vh] h-[55vh]">
        <Image
          src={"/assets/testimonial.jpg"}
          alt="yogayatra testimonials"
          fill
          className="brightness-[65%] object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
        <h1 className="md:text-[60px] text-[30px] mt-10 md:mt-0 font-bold md:mb-4">
          Testimonials
        </h1>
      </div>
    </div>
  );
};

export default Hero;
