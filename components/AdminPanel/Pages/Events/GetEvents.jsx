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
                    </div>
                    <div className="flex flex-row items-center w-full justify-around mt-5">
                      <span>
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
