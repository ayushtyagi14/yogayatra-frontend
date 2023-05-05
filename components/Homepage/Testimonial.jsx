import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState({});

  const getTestimonial = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://yogayatra.in/api/admin/getAllTestimonials", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        setTestimonials(data.testimonials);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getTestimonial();
  }, []);

  return (
    <>
      <div className="mx-10 my-40">
        <h1 className="md:text-[40px] text-[30px] text-center leading-none">
          We Asked People What They Like <br /> About Our{" "}
          <span className="text-[#f86454]">Yoga and Fitness</span>
        </h1>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {testimonials.length > 0 &&
            testimonials.map((item) => (
              <div key={item._id}>
                <div className="bg-white text-black h-max min-h-[250px] mt-20 grid md:grid-cols-2 grid-cols-1 rounded-lg items-center w-[90%] mx-auto md:pb-0 pb-5">
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
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
