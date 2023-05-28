import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import moment from "moment";

const EditSession = ({ sessionId, getAllSessions }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [image, setImage] = useState(null);
  const [editImage, setEditImage] = useState(null);
  const [sessionName, setSessionName] = useState("");
  const [sessionDescription, setSessionDescription] = useState("");
  const [sessionPlan1Fee, setSessionPlan1Fee] = useState("");
  const [sessionPlan1Duration, setSessionPlan1Duration] = useState("");
  const [sessionPlan2Fee, setSessionPlan2Fee] = useState("");
  const [sessionPlan2Duration, setSessionPlan2Duration] = useState("");
  const [sessionPlan3Fee, setSessionPlan3Fee] = useState("");
  const [sessionPlan3Duration, setSessionPlan3Duration] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [sessionStartTime, setSessionStartTime] = useState("");
  const [sessionEndTime, setSessionEndTime] = useState("");

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
    formData.append("sessionId", sessionId);

    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    fetch(process.env.BACKEND + "admin/editSessionImg", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        setLoading2(false);
        if (data.resCode === 200) {
          toast.success(`Session Image edited successfully!`, {
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
        console.log(result);
        setImage(result.session.sessionImgUrl);
        setSessionName(result.session.sessionName);
        setSessionDescription(result.session.sessionDesc);
        setSessionPlan1Fee(result.session.sessionPlan1Fee);
        setSessionPlan2Fee(result.session.sessionPlan2Fee);
        setSessionPlan3Fee(result.session.sessionPlan3Fee);
        setSessionPlan1Duration(result.session.sessionPlan1Duration);
        setSessionPlan2Duration(result.session.sessionPlan2Duration);
        setSessionPlan3Duration(result.session.sessionPlan3Duration);
        setTeacherName(result.session.teacherName);

        const [startTime, endTime] = result.session.sessionTime.split(" to ");
        setSessionStartTime(startTime);
        setSessionEndTime(endTime);
      })
      .catch((error) => console.log("error", error));
  };

  const handleSubmit = (event) => {
    console.log(image);
    event.preventDefault();
    setLoading(true);

    const sessionTime = `${moment(sessionStartTime, "HH:mm").format(
      "hh:mm A"
    )} to ${moment(sessionEndTime, "HH:mm").format("hh:mm A")}`;

    let payload = {
      sessionName: sessionName,
      sessionDesc: sessionDescription,
      sessionPlan1Fee: sessionPlan1Fee,
      sessionPlan1Duration: sessionPlan1Duration,
      sessionPlan2Fee: sessionPlan2Fee,
      sessionPlan2Duration: sessionPlan2Duration,
      sessionPlan3Fee: sessionPlan3Fee,
      sessionPlan3Duration: sessionPlan3Duration,
      teacherName: teacherName,
      sessionTime: sessionTime,
    };

    var requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    };

    fetch(
      process.env.BACKEND + "admin/editSession/" + sessionId,
      requestOptions
    )
      .then((response) => {
        response.text();
        console.log(response.status);
        setLoading(false);
        if (response.status === 200) {
          toast.success(`Session Edited Successfully`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
          setShowModal(false);
          setShowModal2(false);
          getAllSessions();
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
            setShowModal(true), getSingleSession();
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
            <div className="relative w-max my-6 mx-auto md:mt-[40rem] mt-[28rem]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5 px-10 overflow-y-auto">
                <div className="flex flex-row items-center justify-between mt-5 mr-5">
                  <h1 className="text-center uppercase font-poppins text-[20px]">
                    Edit this session
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
                        onChange={(event) =>
                          setSessionPlan1Fee(event.target.value)
                        }
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
                        onChange={(event) =>
                          setSessionPlan1Duration(event.target.value)
                        }
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
                        onChange={(event) =>
                          setSessionPlan2Fee(event.target.value)
                        }
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
                        onChange={(event) =>
                          setSessionPlan2Duration(event.target.value)
                        }
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
                      <label htmlFor="session-plan1-fee">Plan 3 Fee:</label>
                      <input
                        type="number"
                        id="session-plan3-fee"
                        name="sessionPlan3Fee"
                        onWheel={(event) => event.target.blur()}
                        value={sessionPlan3Fee}
                        onChange={(event) =>
                          setSessionPlan3Fee(event.target.value)
                        }
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
                        onChange={(event) =>
                          setSessionPlan3Duration(event.target.value)
                        }
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
                    className=" py-2 px-8 rounded-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#353746] text-white hover:bg-[#d6cac7]"
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

export default EditSession;
