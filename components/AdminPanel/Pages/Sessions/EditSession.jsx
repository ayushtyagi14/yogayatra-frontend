import React from "react";
import { useState, useEffect } from "react";

const EditSession = ({ sessionId, getAllSessions }) => {
  const [showModal, setShowModal] = useState(false);

  const [sessionData, setSessionData] = useState({});

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [sessionName, setSessionName] = useState("");
  const [sessionDescription, setSessionDescription] = useState("");
  const [sessionFee, setSessionFee] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [sessionStartTime, setSessionStartTime] = useState("");
  const [sessionEndTime, setSessionEndTime] = useState("");

  function handleChange(event) {
    setImage("");
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const getSingleSession = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      process.env.BACKEND + "admin/getSingleSession/" + sessionId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.session);
        setSessionData(result.session);
        setImage(result.session.sessionImg);
        setSessionName(result.session.sessionName);
        setSessionDescription(result.session.sessionDesc);
        setSessionFee(result.session.sessionFee);
        setTeacherName(result.session.teacherName);

        const [startTime, endTime] = result.session.sessionTime.split(" to ");
        setSessionStartTime(startTime);
        setSessionEndTime(endTime);
      })
      .catch((error) => console.log("error", error));
  };

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const sessionTime = `${sessionStartTime} to ${sessionEndTime}`;

    if (image) {
      const formData = new FormData();
      formData.append("myFile", dataURItoBlob(image));
      formData.append("sessionName", sessionName);
      formData.append("sessionDesc", sessionDescription);
      formData.append("sessionFee", sessionFee);
      formData.append("teacherName", teacherName);
      formData.append("sessionTime", sessionTime);

      var requestOptions = {
        method: "PATCH",
        body: formData,
        redirect: "follow",
      };

      fetch(
        process.env.BACKEND + "admin/editSession" + sessionId,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          const data = JSON.parse(result);
          setLoading(false);
          if (data.resCode === 200) {
            toast.success(`${data.message}`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500,
            });
            setShowModal(false);
          } else {
            toast.error(`${data.message}`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500,
            });
          }
        })
        .catch((error) => console.log("error", error));
    }
  }

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
      <button
        onClick={() => {
          setShowModal(true), getSingleSession();
        }}
        className="cursor-pointer"
      >
        Edit
      </button>
      {showModal ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none mt-5 text-[14px]"
          >
            <div className="relative w-max my-6 mx-auto mt-60">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5 px-10 overflow-y-auto">
                <div className="flex flex-row items-center justify-between mt-5 mr-5">
                  <h1 className="text-center uppercase font-poppins text-[20px]">
                    Edit this session
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
                  <div className="flex flex-row items-center mt-4 w-full">
                    <label htmlFor="image" className="font-medium">
                      Image:
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleChange}
                      required
                      className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-row items-start mt-4 w-full">
                  <label htmlFor="session-name">Name:</label>
                  <input
                    type="text"
                    id="session-name"
                    name="sessionName"
                    value={sessionName}
                    onChange={(event) => setSessionName(event.target.value)}
                    className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-2 text-[14px]"
                    required
                  />
                </div>

                <div className="flex flex-row items-start mt-4 w-full">
                  <label htmlFor="session-description">Description:</label>
                  <textarea
                    id="session-description"
                    name="sessionDescription"
                    value={sessionDescription}
                    onChange={(event) =>
                      setSessionDescription(event.target.value)
                    }
                    className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-2"
                    required
                  />
                </div>

                <div className="flex flex-row items-start mt-4 w-full">
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

                <div className="flex flex-row items-center mt-4 w-full">
                  <label htmlFor="session-fee">Fee:</label>
                  <input
                    type="number"
                    id="session-fee"
                    name="sessionFee"
                    onWheel={(event) => event.target.blur()}
                    value={sessionFee}
                    onChange={(event) => setSessionFee(event.target.value)}
                    className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-4"
                    required
                  />
                </div>

                <div className="flex flex-row items-center mt-4 w-full">
                  <label htmlFor="session-start-time">Start Time:</label>
                  <input
                    type="time"
                    id="session-start-time"
                    name="sessionStartTime"
                    value={sessionStartTime}
                    onChange={(event) =>
                      setSessionStartTime(event.target.value)
                    }
                    className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    required
                  />
                </div>

                <div className="flex flex-row items-center mt-4 w-full">
                  <label htmlFor="session-end-time">End Time:</label>
                  <input
                    type="time"
                    id="session-end-time"
                    name="sessionEndTime"
                    value={sessionEndTime}
                    onChange={(event) => setSessionEndTime(event.target.value)}
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
                      <span>Edit Session</span>
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

export default EditSession;
