import React from "react";
import { useState, useEffect } from "react";
import DeleteEvent from "./DeleteEvent";
import EditEvent from "./EditEvent";
import MakeEvent from "./MakeEvent";

const GetEvents = () => {
  const [events, setEvents] = useState({});
  const [loading, setLoading] = useState(false);

  const getAllEvents = () => {
    setLoading(true);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.BACKEND + "admin/getAllEvents", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const data = result.events;
        console.log(data);
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <MakeEvent getAllSessions={getAllEvents} />
          <div className="md:mx-10 mx-5 py-8">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-4">
              {events.length > 0 &&
                events.map((data) => (
                  <div
                    key={data._id}
                    className="flex flex-col md:w-full md:mx-5 mt-5 md:px-10 py-3 shadow"
                  >
                    <img
                      src={data.eventImg}
                      alt={data.eventName}
                      className="md:w-[50%] w-[80%] rounded-xl h-48 object-cover object-center mx-auto"
                    />
                    <h1 className="md:text-[28px] text-center">
                      {data.eventName}
                    </h1>
                    <p className="mt-2 text-center text-[14px]">
                      Instructor :
                      <span className="font-poppins uppercase ml-1 text-[18px] text-[#f86454]">
                        {data.teacherName}
                      </span>
                    </p>
                    <div className="flex flex-col items-center mx-auto">
                      <p className="text-[16px] text-center mt-4">
                        At Just Rs
                        <span className="font-poppins uppercase mx-2 text-[20px] text-[#f86454]">
                          {data.eventFee}
                        </span>
                      </p>
                      <p className="text-[16px] text-center">
                        <span className="font-poppins uppercase">
                          {data.eventTime}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center w-[40%] mx-auto justify-between mt-5">
                      <span className="px-2 py-1 rounded-lg shadow">
                        <EditEvent
                          eventId={data.eventId}
                          getAllEvents={getAllEvents}
                        />
                      </span>
                      <span className="px-2 py-1 rounded-lg shadow">
                        <DeleteEvent
                          eventId={data.eventId}
                          getAllEvents={getAllEvents}
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

export default GetEvents;
