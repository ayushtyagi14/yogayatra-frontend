import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const MakeSession = ({ getAllSessions }) => {
  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [sessionName, setSessionName] = useState("");
  const [sessionDescription, setSessionDescription] = useState("");
  const [sessionFee, setSessionFee] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [sessionStartTime, setSessionStartTime] = useState("");
  const [sessionEndTime, setSessionEndTime] = useState("");

  const [sessionPlan1Fee, setSessionPlan1Fee] = useState("");
  const [sessionPlan1Duration, setSessionPlan1Duration] = useState("");
  const [sessionPlan2Fee, setSessionPlan2Fee] = useState("");
  const [sessionPlan2Duration, setSessionPlan2Duration] = useState("");
  const [sessionPlan3Fee, setSessionPlan3Fee] = useState("");
  const [sessionPlan3Duration, setSessionPlan3Duration] = useState("");

  const handlePlan1FeeChange = (event) => {
    setSessionPlan1Fee(event.target.value);
  };

  const handlePlan1DurationChange = (event) => {
    setSessionPlan1Duration(event.target.value);
  };

  const handlePlan2FeeChange = (event) => {
    setSessionPlan2Fee(event.target.value);
  };

  const handlePlan2DurationChange = (event) => {
    setSessionPlan2Duration(event.target.value);
  };

  const handlePlan3FeeChange = (event) => {
    setSessionPlan3Fee(event.target.value);
  };

  const handlePlan3DurationChange = (event) => {
    setSessionPlan3Duration(event.target.value);
  };

  function handleChange(event) {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const sessionTime = `${sessionStartTime} to ${sessionEndTime}`;

    if (image) {
      const formData = new FormData();
      formData.append("myFile", dataURItoBlob(image));
      formData.append("sessionName", sessionName);
      formData.append("sessionDesc", sessionDescription);
      formData.append("teacherName", teacherName);
      formData.append("sessionTime", sessionTime);
      formData.append("sessionPlan1Fee", sessionPlan1Fee);
      formData.append("sessionPlan1Duration", sessionPlan1Duration);
      formData.append("sessionPlan2Fee", sessionPlan2Fee);
      formData.append("sessionPlan2Duration", sessionPlan2Duration);
      formData.append("sessionPlan3Fee", sessionPlan3Fee);
      formData.append("sessionPlan3Duration", sessionPlan3Duration);

      var requestOptions = {
        method: "POST",
        body: formData,
        redirect: "follow",
      };

      fetch(process.env.BACKEND + "admin/makeSession", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const data = JSON.parse(result);
          setLoading(false);
          if (data.resCode === 200) {
            toast.success(`${data.message}`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500,
            });
            getAllSessions();
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
      <div className="flex items-center justify-center mt-5">
        <button
          className="flex items-center justify-center text-center bg-white px-4 py-1 rounded-lg shadow-md"
          onClick={() => setShowModal(true)}
        >
          <span className="text-[22px] font-poppins mr-2">+</span>
          <span className="font-medium">Make a Session</span>
        </button>
      </div>

      {showModal ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none mt-5 text-[14px]"
          >
            <div className="relative w-max my-6 mx-auto md:mt-[40rem] mt-[28rem]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5 px-10 overflow-y-auto">
                <div className="flex flex-row items-center justify-between mt-5 mr-5">
                  <h1 className="text-center uppercase font-poppins text-[20px]">
                    Make a new session
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

                <div className="flex flex-col items-center mt-4 w-full">
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

                <div className="flex flex-col mt-4 w-full">
                  <div>
                    <div className="flex flex-col items-center w-full">
                      <label htmlFor="session-plan1-fee">Plan 1 Fee:</label>
                      <input
                        type="number"
                        id="session-plan1-fee"
                        name="sessionPlan1Fee"
                        onWheel={(event) => event.target.blur()}
                        value={sessionPlan1Fee}
                        onChange={handlePlan1FeeChange}
                        className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-4"
                        required
                      />
                    </div>
                    <div className="flex flex-col items-center mt-4 w-full">
                      <label htmlFor="session-plan1-duration">
                        Plan 1 Duration:
                      </label>
                      <select
                        id="session-plan1-duration"
                        name="sessionPlan1Duration"
                        value={sessionPlan1Duration}
                        onChange={handlePlan1DurationChange}
                        className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-4"
                        required
                      >
                        <option value="">Select Duration</option>
                        <option value="1">1 Month</option>
                        <option value="2">2 Months</option>
                        <option value="3">3 Months</option>
                        <option value="4">4 Months</option>
                        <option value="5">5 Months</option>
                        <option value="6">6 Months</option>
                        <option value="7">7 Months</option>
                        <option value="8">8 Months</option>
                        <option value="9">9 Months</option>
                        <option value="10">10 Months</option>
                        <option value="11">11 Months</option>
                        <option value="12">12 Months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col items-center w-full">
                      <label htmlFor="session-plan1-fee">Plan 2 Fee:</label>
                      <input
                        type="number"
                        id="session-plan2-fee"
                        name="sessionPlan2Fee"
                        onWheel={(event) => event.target.blur()}
                        value={sessionPlan2Fee}
                        onChange={handlePlan2FeeChange}
                        className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-4"
                        required
                      />
                    </div>
                    <div className="flex flex-col items-center mt-4 w-full">
                      <label htmlFor="session-plan2-duration">
                        Plan 2 Duration:
                      </label>
                      <select
                        id="session-plan2-duration"
                        name="sessionPlan2Duration"
                        value={sessionPlan2Duration}
                        onChange={handlePlan2DurationChange}
                        className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-4"
                        required
                      >
                        <option value="">Select Duration</option>
                        <option value="1">1 Month</option>
                        <option value="2">2 Months</option>
                        <option value="3">3 Months</option>
                        <option value="3">4 Months</option>
                        <option value="3">5 Months</option>
                        <option value="3">6 Months</option>
                        <option value="3">7 Months</option>
                        <option value="3">8 Months</option>
                        <option value="3">9 Months</option>
                        <option value="3">10 Months</option>
                        <option value="3">11 Months</option>
                        <option value="3">12 Months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col items-center w-full">
                      <label htmlFor="session-plan1-fee">Plan 3 Fee:</label>
                      <input
                        type="number"
                        id="session-plan3-fee"
                        name="sessionPlan3Fee"
                        onWheel={(event) => event.target.blur()}
                        value={sessionPlan3Fee}
                        onChange={handlePlan3FeeChange}
                        className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-4"
                        required
                      />
                    </div>
                    <div className="flex flex-col items-center mt-4 w-full">
                      <label htmlFor="session-plan3-duration">
                        Plan 3 Duration:
                      </label>
                      <select
                        id="session-plan3-duration"
                        name="sessionPlan3Duration"
                        value={sessionPlan3Duration}
                        onChange={handlePlan3DurationChange}
                        className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-4"
                        required
                      >
                        <option value="">Select Duration</option>
                        <option value="1">1 Month</option>
                        <option value="2">2 Months</option>
                        <option value="3">3 Months</option>
                        <option value="3">4 Months</option>
                        <option value="3">5 Months</option>
                        <option value="3">6 Months</option>
                        <option value="3">7 Months</option>
                        <option value="3">8 Months</option>
                        <option value="3">9 Months</option>
                        <option value="3">10 Months</option>
                        <option value="3">11 Months</option>
                        <option value="3">12 Months</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
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

                <div className="flex flex-col items-center mt-4 w-full">
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
                      <span>Create Session</span>
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

export default MakeSession;
