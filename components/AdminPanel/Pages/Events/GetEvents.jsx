import React from "react";
import { useState, useEffect } from "react";
import DeleteEvent from "./DeleteEvent";
import EditEvent from "./EditEvent";
import MakeEvent from "./MakeEvent";

const GetSession = () => {
  const [sessions, setSessions] = useState({});
  const [loading, setLoading] = useState(false);

  const getAllSessions = () => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllSessions();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <MakeEvent getAllSessions={getAllSessions} />
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
                    <p className="mt-2 text-center text-[14px]">
                      Instructor :{" "}
                      <span className="font-poppins uppercase ml-1 text-[18px] text-[#f86454]">
                        {data.teacherName}
                      </span>
                    </p>
                    <p className="text-[20px] text-center my-4">
                      For ₹
                      <span className="font-poppins uppercase mx-2 text-[22px] text-[#f86454]">
                        {data.sessionFee}
                      </span>
                      Per Month
                    </p>
                    <div className="flex flex-row items-center w-[40%] mx-auto justify-between">
                      <span>
                        <EditEvent
                          sessionId={data.sessionId}
                          getAllSessions={getAllSessions}
                        />
                      </span>
                      <span>
                        <DeleteEvent
                          sessionId={data.sessionId}
                          getAllSessions={getAllSessions}
                        />
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GetSession;
