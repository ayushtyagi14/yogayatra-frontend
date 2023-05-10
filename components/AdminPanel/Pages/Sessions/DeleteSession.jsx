import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useStateContext } from "../../../../context/StateContext";

const DeleteSession = ({ sessionId, getAllSessions }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    const payload = {
      sessionId: sessionId,
    };

    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      redirect: "follow",
    };

    fetch(process.env.BACKEND + "admin/deleteSession", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const data = result;
        console.log(data);
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
  };

  return (
    <>
      <div onClick={() => setShowModal(true)} className="cursor-pointer">
        Delete
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-max my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5 px-10 overflow-y-auto">
                <div className="flex flex-row items-center justify-between mt-5 mr-5">
                  <h1 className="text-center uppercase font-poppins text-[20px]"></h1>
                  <button
                    className="text-[#B4AAA7] font-bold text-2xl font-poppins"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div>

                <div className="flex flex-col text-[18px] mt-5 font-poppins">
                  <div>Are you sure you want to delete this session ?</div>
                  <div className="flex flex-row items-center justify-evenly w-full mt-4">
                    <button
                      className="px-4 py-1 rounded-lg shadow hover:bg-[#f86454] hover:text-white"
                      onClick={handleDelete}
                    >
                      Yes
                    </button>
                    <button
                      className="px-4 py-1 rounded-lg shadow hover:bg-[#B4AAA7] hover:text-white"
                      onClick={() => setShowModal(false)}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default DeleteSession;
