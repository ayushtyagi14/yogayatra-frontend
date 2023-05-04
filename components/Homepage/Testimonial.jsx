import React from "react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import SwiperCore, { Swiper, Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Testimonial = () => {
  const swiperRef = useRef();

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
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          speed={1500}
          modules={[Navigation, Autoplay]}
          className="mySwiper flex justify-center"
        >
          {testimonials.length > 0 &&
            testimonials.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="bg-white text-black h-max min-h-[250px] mt-20 grid md:grid-cols-2 grid-cols-1 rounded-lg items-center w-[90%] mx-auto">
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
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="flex float-right my-5">
          <button
            className="border-2 border-r-0 py-4 px-3 rounded-l-lg"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src="https://img.icons8.com/ios-glyphs/20/ffffff/chevron-left.png" />
          </button>
          <button
            className="border-2 border-l-1 py-4 px-3 rounded-r-lg"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src="https://img.icons8.com/ios-glyphs/20/ffffff/chevron-right.png" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
