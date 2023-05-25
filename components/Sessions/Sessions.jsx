import React from "react";
import { useRouter } from "next/router";

const SessionsComponent = ({ props }) => {
  console.log(props);
  const router = useRouter();

  return (
    <div className="md:mx-10 mx-5 py-8">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
        {props?.map((data) => (
          <div
            key={data._id}
            className="flex flex-col md:w-full md:mx-5 mt-5 md:px-10 px-2 py-3 shadow rounded-xl bg-white"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={data.sessionImgUrl}
                alt={data.sessionName}
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
            </div>
            <div className="p-6">
              <h1 className="md:text-2xl text-xl font-poppins mt-2 text-center text-black">
                {data.sessionName}
              </h1>
              <p className="text-sm mt-4 text-center text-black">
                Welcome to our {data.sessionName} session! Join us for a
                transformative experience that will invigorate your mind, body,
                and soul. Register now by clicking the button below and start
                your journey to a healthier, happier you!
              </p>
              <p className="mt-4 text-center">
                Instructor:{" "}
                <span className="font-poppins uppercase ml-1 text-xl text-[#f86454]">
                  {data.teacherName}
                </span>
              </p>
              <div className="flex flex-col items-start mt-6">
                <p className="text-lg text-center">
                  At Rs
                  <span className="font-poppins uppercase mx-2 text-[20px] text-[#f86454]">
                    {data.sessionPlan1Fee}
                  </span>
                  For {data.sessionPlan1Duration} Month
                </p>
                <p className="text-lg text-center">
                  At Rs
                  <span className="font-poppins uppercase mx-2 text-[20px] text-[#f86454]">
                    {data.sessionPlan2Fee}
                  </span>
                  For {data.sessionPlan2Duration} Month
                </p>
                <p className="text-lg text-center">
                  At Rs
                  <span className="font-poppins uppercase mx-2 text-[20px] text-[#f86454]">
                    {data.sessionPlan3Fee}
                  </span>
                  For {data.sessionPlan3Duration} Month
                </p>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  className="w-full md:w-[30%] bg-[#f86454] text-white hover:bg-white hover:text-[#f86454] border border-[#f86454] hover:border-[#f86454] px-5 py-2 rounded-xl text-sm"
                  onClick={() => {
                    router.push(`/session/${data.sessionId}`);
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

export default SessionsComponent;
