import React from "react";
import { useState, useEffect } from "react";
import DeleteSession from "./DeleteSession";
import EditSession from "./EditSession";
import MakeSession from "./MakeSession";

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
          <MakeSession getAllSessions={getAllSessions} />
          <div className="md:mx-10 mx-5 py-8">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-4">
              {sessions.length > 0 &&
                sessions.map((data) => (
                  <div
                    key={data._id}
                    className="flex flex-col md:w-full md:mx-5 mt-5 md:px-10 py-3 shadow"
                  >
                    <img
                      src={data.sessionImgUrl}
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
                    <div className="flex flex-col items-start md:w-[45%] mx-auto">
                      <p className="text-[16px] text-center mt-4">
                        At Rs
                        <span className="font-poppins uppercase mx-2 text-[20px] text-[#f86454]">
                          {data.sessionPlan1Fee}
                        </span>
                        For {data.sessionPlan1Duration} Month
                      </p>
                      <p className="text-[16px] text-center">
                        At Rs
                        <span className="font-poppins uppercase mx-2 text-[20px] text-[#f86454]">
                          {data.sessionPlan2Fee}
                        </span>
                        For {data.sessionPlan2Duration} Months
                      </p>
                      <p className="text-[16px] text-center">
                        At Rs
                        <span className="font-poppins uppercase mx-2 text-[20px] text-[#f86454]">
                          {data.sessionPlan3Fee}
                        </span>
                        For {data.sessionPlan3Duration} Months
                      </p>
                    </div>
                    <div className="flex flex-row items-center w-full justify-around mt-5">
                      <span>
                        <EditSession
                          sessionId={data.sessionId}
                          getAllSessions={getAllSessions}
                        />
                      </span>
                      <span className="px-2 py-1 rounded-lg shadow">
                        <DeleteSession
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
