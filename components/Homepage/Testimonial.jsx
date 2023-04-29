import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="mx-10 my-40">
        <h1 className="md:text-[40px] text-[30px] text-center leading-none">
          We Asked People What They Like <br /> About Our{" "}
          <span className="text-[#f86454]">Yoga and Fitness</span>
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 mt-10">
          <div className="flex flex-col items-center text-center rounded shadow md:mx-5 mt-5 md:mt-0 bg-white py-4">
            <img src="/assets/comma.png" alt="testimonial" width="100px" />
            <p className="font-poppins">
              Great company! The staff is so knowledgeable and the classes are
              very well done. I&apos;m really enjoying it!
            </p>
            <img
              src="/assets/customer-1.webp"
              alt="yoga-customer"
              width="60px"
              className="rounded-full my-5"
            />
            <h1 className="text-[20px] text-[#f86454]">Customer Name</h1>
          </div>
          <div className="flex flex-col items-center text-center rounded shadow md:mx-5 mt-5 md:mt-0 bg-white py-4">
            <img src="/assets/comma.png" alt="testimonial" width="100px" />
            <p className="font-poppins">
              Great company! The staff is so knowledgeable and the classes are
              very well done. I&apos;m really enjoying it!
            </p>
            <img
              src="/assets/customer-2.webp"
              alt="yoga-customer"
              width="60px"
              className="rounded-full my-5"
            />
            <h1 className="text-[20px] text-[#f86454]">Customer Name</h1>
          </div>
          <div className="flex flex-col items-center text-center rounded shadow md:mx-5 mt-5 md:mt-0 bg-white py-4">
            <img src="/assets/comma.png" alt="testimonial" width="100px" />
            <p className="font-poppins">
              Great company! The staff is so knowledgeable and the classes are
              very well done. I&apos;m really enjoying it!
            </p>
            <img
              src="/assets/sakina-vagh.png"
              alt="yoga-customer"
              width="60px"
              className="rounded-full my-5"
            />
            <h1 className="text-[20px] text-[#f86454]">Customer Name</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
