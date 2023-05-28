import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import moment from "moment";

const EditEvent = ({ eventId, getAllEvents }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [image, setImage] = useState(null);
  const [editImage, setEditImage] = useState(null);
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
        setEditImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleImageEdit = (event) => {
    event.preventDefault();
    setLoading2(true);

    const formData = new FormData();
    formData.append("myFile", dataURItoBlob(editImage));
    formData.append("eventId", eventId);

    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    fetch(process.env.BACKEND + "admin/editEventImg", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        setLoading2(false);
        if (data.resCode === 200) {
          toast.success(`Event Image edited successfully!`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
          setShowModal2(false);
          getAllEvents();
        } else {
          toast.error(`${data.message}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
        }
      })
      .catch((error) => console.log("error", error));
  };

  const getSingleEvent = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      process.env.BACKEND + "admin/getSingleEvent/" + eventId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setImage(result.event.eventImgUrl);
        setEventName(result.event.eventName);
        setEventDescription(result.event.eventDesc);
        setEventDuration(result.event.eventDuration);
        setEventDate(result.event.eventDate);
        setEventFee(result.event.eventFee);
        setTeacherName(result.event.teacherName);

        const [startTime, endTime] = result.event.eventTime.split(" to ");
        setEventStartTime(startTime);
        setEventEndTime(endTime);
      })
      .catch((error) => console.log("error", error));
  };

  const handleSubmit = (event) => {
    console.log(image);
    event.preventDefault();
    setLoading(true);

    const eventTime = `${moment(eventStartTime, "HH:mm").format(
      "hh:mm A"
    )} to ${moment(eventEndTime, "HH:mm").format("hh:mm A")}`;

    let payload = {
      eventName: eventName,
      eventDesc: eventDescription,
      eventFee: eventFee,
      eventDuration: eventDuration,
      eventDate: eventDate,
      teacherName: teacherName,
      eventTime: eventTime,
    };

    var requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    };

    fetch(process.env.BACKEND + "admin/editevent/" + eventId, requestOptions)
      .then((response) => {
        response.text();
        console.log(response.status);
        setLoading(false);
        if (response.status === 200) {
          toast.success(`Event Edited Successfully`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
          setShowModal(false);
          setShowModal2(false);
          getAllEvents();
        } else {
          toast.error(`Some error occured`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
        }
      })
      .then((result) => {
        const data = result;
        console.log(data);
      })
      .catch((error) => console.log("error", error));
  };

  function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

  return (
    <>
      <div className="flex flex-row">
        <button
          onClick={() => {
            setShowModal(true), getSingleEvent();
          }}
          className="border px-3 py-1 shadow rounded-xl mx-2"
        >
          Edit
        </button>
        <button
          className="border px-3 py-1 shadow rounded-xl mx-2"
          onClick={() => {
            setShowModal2(true);
          }}
        >
          Change Image
        </button>
      </div>
      {showModal ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none mt-5 text-[14px]"
          >
            <div className="relative w-max my-6 mx-auto mt-[23rem]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5 px-10 overflow-y-auto">
                <div className="flex flex-row items-center justify-between mt-5 mr-5">
                  <h1 className="text-center uppercase font-poppins text-[20px]">
                    Edit this Event
                  </h1>
                  <button
                    className="text-[#353746] font-bold text-2xl"
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
                  <label htmlFor="event-start-time">Start Time:</label>
                  <input
                    type="time"
                    id="event-start-time"
                    name="eventStartTime"
                    value={eventStartTime}
                    onChange={(event) => setEventStartTime(event.target.value)}
                    className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    required
                  />
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                  <label htmlFor="event-end-time">End Time:</label>
                  <input
                    type="time"
                    id="event-end-time"
                    name="eventEndTime"
                    value={eventEndTime}
                    onChange={(event) => setEventEndTime(event.target.value)}
                    className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    required
                  />
                </div>

                <div className="flex flex-row items-center justify-center mt-4 w-full">
                  <button
                    className=" py-2 px-8 rounded-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#353746] text-white hover:bg-[#d6cac7]"
                    type="submit"
                  >
                    {loading ? (
                      <span>loading ...</span>
                    ) : (
                      <span>Edit Event</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {showModal2 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none mt-5 text-[14px]">
            <div className="relative w-max my-6 mx-auto mt-[5rem]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5 px-10 overflow-y-auto">
                <div className="flex flex-row items-center justify-between mt-5 mr-5">
                  <h1 className="text-center uppercase font-poppins text-[20px]">
                    Add a new Image
                  </h1>
                  <button
                    className="text-[#353746] font-bold text-2xl ml-20"
                    onClick={() => setShowModal2(false)}
                  >
                    x
                  </button>
                </div>

                <div className="flex flex-col items-center flex-wrap my-5">
                  {editImage && (
                    <img
                      src={editImage}
                      alt="Selected Image"
                      className="w-full max-h-48 object-cover rounded-md flex-shrink-0"
                    />
                  )}
                  <div className="flex flex-col items-center mt-4 w-full">
                    <label htmlFor="image" className="font-medium">
                      New Image:
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleChange}
                      className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 w-full"
                      required
                    />
                  </div>
                </div>

                <button
                  className=" py-2 px-8 rounded-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#353746] text-white hover:bg-[#d6cac7]"
                  onClick={handleImageEdit}
                >
                  {loading2 ? (
                    <span>loading ...</span>
                  ) : (
                    <span>Edit Image</span>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default EditEvent;
