import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const MakeEvent = ({ getAllEvents, eventId }) => {
  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [eventDate, setEventDate] = useState("");

  const [eventFee, setEventFee] = useState("");
  const [eventDuration, setEventDuration] = useState("");

  function handleChange(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select an image file.");
    }
  }

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const eventTime = `${eventStartTime} to ${eventEndTime}`;

    if (image === null) {
      alert("Please select an image.");
      return;
    }

    if (eventName.trim() === "") {
      alert("Please enter a event name.");
      return;
    }

    if (eventDescription.trim() === "") {
      alert("Please enter a event description.");
      return;
    }

    const formData = new FormData();
    formData.append("myFile", image);
    formData.append("eventName", eventName);
    formData.append("eventDesc", eventDescription);
    formData.append("teacherName", teacherName);
    formData.append("eventTime", eventTime);
    formData.append("eventFee", eventFee);
    formData.append("eventDuration", eventDuration);
    formData.append("eventDate", eventDate);

    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    fetch(process.env.BACKEND + "admin/makeEvent", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        setLoading(false);
        if (data.resCode === 200) {
          toast.success(`${data.message}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
          getAllEvents();
          setShowModal(false);
        } else {
          toast.error(`${data.message}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
          setLoading(false);
        }
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <>
      <div className="flex items-center justify-center mt-5">
        <button
          className="flex items-center justify-center text-center bg-white px-4 py-1 rounded-lg shadow-md"
          onClick={() => setShowModal(true)}
        >
          <span className="text-[22px] font-poppins mr-2">+</span>
          <span className="font-medium">Make an Event</span>
        </button>
      </div>

      {showModal ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none mt-5 text-[14px]"
          >
            <div className="relative w-max my-6 mx-auto mt-[23rem] md:mt-[28rem]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5 px-10 overflow-y-auto">
                <div className="flex flex-row items-center justify-between mt-5 mr-5">
                  <h1 className="text-center uppercase font-poppins text-[20px]">
                    Make a new event
                  </h1>
                  <button
                    className="text-[#B4AAA7] font-bold text-2xl"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div>

                <div className="flex flex-col items-center flex-wrap mt-4">
                  {image && (
                    <img
                      src={image}
                      alt="Selected Image"
                      className="w-full max-h-48 object-cover rounded-md flex-shrink-0"
                    />
                  )}
                  <div className="flex flex-col items-center mt-4 w-full">
                    <label htmlFor="image" className="font-medium">
                      Image:
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleChange}
                      className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                  <label htmlFor="event-name">Name:</label>
                  <input
                    type="text"
                    id="event-name"
                    name="eventName"
                    value={eventName}
                    onChange={(event) => setEventName(event.target.value)}
                    className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-2 text-[14px]"
                    required
                  />
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                  <label htmlFor="event-description">Description:</label>
                  <textarea
                    id="event-description"
                    name="eventDescription"
                    value={eventDescription}
                    onChange={(event) =>
                      setEventDescription(event.target.value)
                    }
                    className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-2"
                    required
                  />
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                  <label htmlFor="teacher-name">Teacher Name:</label>
                  <input
                    type="text"
                    id="teacher-name"
                    name="teacher-name"
                    value={teacherName}
                    onChange={(event) => setTeacherName(event.target.value)}
                    className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-2 text-[14px]"
                    required
                  />
                </div>

                <div className="flex flex-col items-center w-full">
                  <label htmlFor="eventfee">Event Fee:</label>
                  <input
                    type="number"
                    id="eventfee"
                    name="eventFee"
                    onWheel={(event) => event.target.blur()}
                    value={eventFee}
                    onChange={(event) => setEventFee(event.target.value)}
                    className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-4"
                    required
                  />
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                  <label htmlFor="eventduration">
                    Event Duration (in hours):
                  </label>
                  <input
                    type="number"
                    id="eventduration"
                    name="eventDuration"
                    value={eventDuration}
                    onChange={(e) => setEventDuration(e.target.value)}
                    onWheel={(event) => event.target.blur()}
                    className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-4"
                    required
                  />
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                  <label htmlFor="eventDate">Event Date:</label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={eventDate}
                    onChange={(event) => setEventDate(event.target.value)}
                    className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    required
                  />
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                  <label htmlFor="eventStartTime">Start Time:</label>
                  <input
                    type="time"
                    id="eventStartTime"
                    name="eventStartTime"
                    value={eventStartTime}
                    onChange={(event) => setEventStartTime(event.target.value)}
                    className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    required
                  />
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                  <label htmlFor="eventEndTime">End Time:</label>
                  <input
                    type="time"
                    id="eventEndTime"
                    name="eventEndTime"
                    value={eventEndTime}
                    onChange={(event) => setEventEndTime(event.target.value)}
                    className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    required
                  />
                </div>

                <div className="flex flex-row items-center justify-center mt-4 w-full">
                  <button
                    className=" py-2 px-8 rounded-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#B4AAA7] text-white hover:bg-[#d6cac7]"
                    type="submit"
                  >
                    {loading ? (
                      <span>loading ...</span>
                    ) : (
                      <span>Create Event</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default MakeEvent;
