import React from "react";
import { useRouter } from "next/router";

const EventsComponent = ({ props }) => {
  const router = useRouter();

  return (
    <div className="md:mx-10 mx-5 py-8">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
        {props?.map((data) => (
          <div
            key={data._id}
            className="flex flex-col md:w-full md:mx-5 mt-5 md:px-10 py-3 shadow"
          >
            <img
              src={data.eventImg}
              alt={data.eventName}
              className="md:w-[50%] w-[80%] rounded-xl h-48 object-cover object-center mx-auto"
            />
            <h1 className="md:text-[34px] text-[28px] font-poppins mt-2 text-center">
              {data.eventName}
            </h1>
            <p className="text-[14px] mt-2 text-center">
              At out yoga studio, we provide a welcoming and supportive
              environment for beginners to explore the transformative power of
              yoga! If you are new to yoga, you may feel intimidated or
              overwhelmed by the various poses and practices that come with this
              ancient practice. At our studio, we understand that starting
              something new can be challenging, and that&apos;s why we offer
              classes specifically designed for each levels.
            </p>
            <p className="mt-2 text-center text-[14px]">
              Instructor :{" "}
              <span className="font-poppins uppercase ml-1 text-[18px] text-[#f86454]">
                {data.teacherName}
              </span>
            </p>
            <p className="text-[20px] text-center my-4">
              For
              <span className="font-poppins uppercase mx-2 text-[22px] text-[#f86454]">
                {data.eventDuration}
              </span>
              days At Just ₹
              <span className="font-poppins uppercase mx-2 text-[22px] text-[#f86454]">
                {data.eventFee}
              </span>
            </p>
            <button
              className="md:w-[30%] w-[70%] mx-auto border border-[#b4aaa7] bg-[#b4aaa7] text-[#ececec] hover:bg-[#ececec] hover:text-[#b4aaa7] hover:border-[#ececec] px-5 py-1 rounded-xl mt-2"
              onClick={() => {
                router.push(`/event/${data.eventId}`);
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsComponent;
