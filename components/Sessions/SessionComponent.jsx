import React from "react";

const SessionComponent = ({ props }) => {
  return (
    <>
      <div className=" mt-5 md:mx-10">
        <div className="flex md:flex-row flex-col pb-10 md:h-screen">
          <div className="flex flex-col md:mt-0 mt-3 overflow-y-scroll scrollbar md:w-[70%] mx-5">
            <div className="my-3">
              <h1 className="md:text-[30px] text-[19px] text-center md:text-left">
                What Is <span>{props.sessionName}</span> ?
              </h1>
              <p className="font-poppins md:w-[80%] w-[95%] mx-auto md:mx-0 md:text-[16px] text-[14px] mt-2 text-center md:text-left">
                <span>{props.sessionDesc}</span>
              </p>
            </div>
            <div className="my-3 md:w-[40%]">
              <h1 className="md:text-[30px] text-[20px] text-center md:text-left mb-2">
                About this Program:{" "}
              </h1>
              <p className="flex flex-row w-full justify-between">
                Instructor:{" "}
                <span className="text-right">{props.teacherName}</span>
              </p>
              <p className="flex flex-row w-full justify-between">
                Timings: <span className="text-right">{props.sessionTime}</span>
              </p>
              <p className="flex flex-row w-full justify-between">
                Duration of Program:{" "}
                <span className="text-right">{props.sessionDuration} days</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:w-[30%] w-[90%] md:mt-auto mt-3 md:mx-0 mx-auto md:h-[40%] my-auto justify-center md:px-10 px-4 py-2 shadow-lg rounded-lg bg-[#f6f6f6]">
            <p>
              Program Fees: ₹{" "}
              <span className="font-poppins">{props.sessionFee} </span>
            </p>
            <p>
              Duration Of Program:{" "}
              <span className="font-poppins">
                {props.sessionDuration} days{" "}
              </span>
            </p>
            <button className="rounded-lg py-2 bg-[#f86454] text-white w-[80%] mx-auto mt-4 border">
              Book This Class
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionComponent;
