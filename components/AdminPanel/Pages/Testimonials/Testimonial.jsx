import React, { useEffect, useState } from "react";
import Image from "next/image";
import MakeTestimonial from "./MakeTestimonial";
import EditTestimonial from "./EditTestimonial";
import DeleteTestimonial from "./DeleteTestimonial";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  const getAllTestimonials = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.BACKEND + "admin/getAllTestimonials", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const data = result.testimonials;
        console.log(data);
        setTestimonials(data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllTestimonials();
  }, []);

  return (
    <>
      <div className="my-20">
        <MakeTestimonial getAllTestimonials={getAllTestimonials} />
        {testimonials.length > 0 &&
          testimonials.map((item) => (
            <div key={item._id}>
              <div className="bg-white text-black h-max min-h-[250px] grid md:grid-cols-2 grid-cols-1 rounded-lg items-center w-[90%] mx-auto mt-12 md:pb-0 pb-5">
                <div className="flex justify-center md:justify-start">
                  <Image
                    src={item.testimonialImgUrl}
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
                  <div className="flex flex-row items-center w-full justify-around mt-5">
                    <span>
                      <EditTestimonial
                        testimonialId={item.testimonialId}
                        getAllTestimonials={getAllTestimonials}
                      />
                    </span>
                    <span className="px-2 py-1 rounded-lg shadow">
                      <DeleteTestimonial
                        testimonialId={item.testimonialId}
                        getAllTestimonials={getAllTestimonials}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Testimonial;
