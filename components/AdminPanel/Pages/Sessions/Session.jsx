import React from "react";
import { useState, useEffect } from "react";

const Session = () => {
  const [sessions, setSessions] = useState({});

  const getAllSessions = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.BACKEND + "admin/getAllSessions", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const data = result.sessions;
        console.log(data);
        setSessions(data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllSessions();
  }, []);

  return (
    <>
      <div className="md:mx-10 mx-5 py-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-4">
          {sessions.length > 0 &&
            sessions.map((data) => (
              <div
                key={data._id}
                className="flex flex-col md:w-full md:mx-5 mt-5 md:px-10 py-3 shadow"
              >
                <img
                  src={data.sessionImg}
                  alt={data.sessionName}
                  className="md:w-[50%] w-[80%] rounded-xl h-48 object-cover object-center mx-auto"
                />
                <h1 className="md:text-[34px] text-[28px] font-poppins mt-2 text-center">
                  {data.sessionName}
                </h1>
                <p className="text-[14px] mt-2 text-center">
                  At out yoga studio, we provide a welcoming and supportive
                  environment for beginners to explore the transformative power
                  of yoga! If you are new to yoga, you may feel intimidated or
                  overwhelmed by the various poses and practices that come with
                  this ancient practice. At our studio, we understand that
                  starting something new can be challenging, and that&apos;s why
                  we offer classes specifically designed for each levels.
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
                    {data.sessionDuration}
                  </span>
                  days At Just ₹
                  <span className="font-poppins uppercase mx-2 text-[22px] text-[#f86454]">
                    {data.sessionFee}
                  </span>
                </p>
                <div className="flex flex-row items-center w-[40%] mx-auto justify-between">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Session;
