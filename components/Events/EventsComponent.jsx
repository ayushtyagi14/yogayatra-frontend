import React from "react";
import { useRouter } from "next/router";

const EventsComponent = ({ props }) => {
  const router = useRouter();

  return (
    <div className="md:mx-10 mx-5 py-8">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {props?.map((data) => (
          <div
            key={data._id}
            className="flex flex-col md:mx-5 mt-5 md:px-10 py-3 shadow-lg rounded-lg bg-white"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={data.eventImgUrl}
                alt={data.eventName}
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
            </div>
            <div className="p-6">
              <h1 className="text-2xl font-poppins mt-2 text-center text-gray-800">
                {data.eventName}
              </h1>
              <p className="text-sm mt-4 text-center text-gray-600">
                Welcome to our {data.eventName} event! Join us for a
                transformative experience that will invigorate your mind, body,
                and soul. Register now by clicking the button below and start
                your journey to a healthier, happier you!
              </p>
              <p className="mt-4 text-center">
                Instructor:{" "}
                <span className="font-poppins uppercase ml-1 text-lg text-[#f86454]">
                  {data.teacherName}
                </span>
              </p>
              <div className="flex justify-center mt-6">
                <div className="flex items-center mr-6">
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/stickers/20/calendar.png"
                    alt="calendar"
                  />
                  <span className="text-sm font-poppins uppercase">
                    <b>{data.eventDate}</b>
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-poppins uppercase">
                    At Just Rs
                    <b className="text-lg ml-2 text-[#f86454]">
                      {data.eventFee}
                    </b>
                  </span>
                </div>
              </div>
              <p className="text-xl text-center mt-6">
                <span className="font-poppins">{data.eventTime}</span>
              </p>
              <div className="flex justify-center mt-6">
                <button
                  className="w-full md:w-[30%] bg-[#f86454] text-white hover:bg-white hover:text-[#f86454] border border-[#f86454] hover:border-[#f86454] px-5 py-2 rounded-xl text-sm"
                  onClick={() => {
                    router.push(`/event/${data.eventId}`);
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsComponent;
