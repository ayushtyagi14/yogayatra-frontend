import React from "react";
import { useState, useEffect } from "react";

const Testimonial = () => {

  

  return (
    <>
      <div className="mx-10 my-40">
        <h1 className="md:text-[40px] text-[30px] text-center leading-none">
          We Asked People What They Like <br /> About Our{" "}
          <span className="text-[#f86454]">Yoga and Fitness</span>
        </h1>
        <div className="bg-white text-black md:h-[400px] mt-40 grid md:grid-cols-2 grid-cols-1 md:relative rounded-lg items-center">
          <div>
            <img
              src="/assets/sakina-vagh.png"
              alt="testimonial"
              className="md:absolute md:bottom-0 md:-mt-8 -mt-16"
              width="480px"
            />
          </div>
          <div className="flex flex-col md:items-start items-center md:text-left text-center">
            <div className="my-10">
              <h1 className="text-[24px]">Jacob Jones</h1>
              <p className="text-[#5c5c5c] my-2">Freelance Product Designer</p>
              <span>⭐⭐⭐⭐</span>
            </div>
            <p className="text-[17px] md:text-left md:mx-0 mx-2">
              Best part is that you can order food online from your favourite{" "}
              restaurant with ease. You can get special discounts from
              restaurants. You can select a range of menu easily.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
