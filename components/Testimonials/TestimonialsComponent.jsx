import React from "react";
import Image from "next/image";

const TestimonialsComponent = ({ props }) => {
  return (
    <>
      <h1 className="text-center md:text-[40px] text-[26px] uppercase font-epilogue leading-none mt-12">
        See what our <span className="text-[#f86454]"> customers </span> <br />{" "}
        are saying about us
      </h1>
      {props.length > 0 &&
        props.map((item) => (
          <div key={item._id}>
            <div className="bg-white text-black h-max min-h-[250px] grid md:grid-cols-2 grid-cols-1 rounded-lg items-center w-[90%] mx-auto mt-12 md:pb-0 pb-5">
              <div className="flex justify-center md:justify-start">
                <Image
                  src={item.testimonialImg}
                  alt={item.testimonialPersonName}
                  className="md:ml-20 p-5 h-[300px] object-cover"
                  width={250}
                  height={200}
                />
              </div>
              <div className="flex flex-col md:items-start items-center md:text-left text-center">
                <div className="my-5">
                  <h1 className="text-[24px] uppercase">
                    {item.testimonialPersonName}
                  </h1>
                  <p className="text-[#5c5c5c] my-2">
                    {item.testimonialPersonDesig}
                  </p>
                </div>
                <p className="text-[17px] md:text-left md:mx-0 mx-2">
                  &apos;&apos; {item.testimonialContent} &apos;&apos;
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default TestimonialsComponent;
