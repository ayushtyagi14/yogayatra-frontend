import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const MakeInstructor = ({ getAllInstructors }) => {
  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [instructorName, setInstructorName] = useState("");
  const [instructorDesc, setInstructorDesc] = useState("");

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

    if (image) {
      const formData = new FormData();
      formData.append("myFile", dataURItoBlob(image));
      formData.append("instructorName", instructorName);
      formData.append("instructorDesc", instructorDesc);

      var requestOptions = {
        method: "POST",
        body: formData,
        redirect: "follow",
      };

      fetch(process.env.BACKEND + "admin/addInstructor", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          const data = JSON.parse(result);
          setLoading(false);
          if (data.resCode === 200) {
            toast.success(`${data.message}`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 1500,
            });
            getAllInstructors();
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
          <span className="font-medium">Add an Instructor</span>
        </button>
      </div>

      {showModal ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none mt-5 text-[14px]"
          >
            <div className="relative w-max my-6 mx-auto mt-[5rem]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5 px-10 overflow-y-auto">
                <div className="flex flex-row items-center justify-between mt-5 mr-5">
                  <h1 className="text-center uppercase font-poppins text-[20px]">
                    Add a new Instructor
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
                  <label htmlFor="Instructor-name">Instructor Name:</label>
                  <input
                    type="text"
                    id="Instructor-name"
                    name="Instructor-Name"
                    value={instructorName}
                    onChange={(event) => setInstructorName(event.target.value)}
                    className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-2 text-[14px]"
                    required
                  />
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                  <label htmlFor="Instructor-desc">Instructors Details:</label>
                  <textarea
                    id="Instructor-desc"
                    name="Instructor-desc"
                    value={instructorDesc}
                    onChange={(event) => setInstructorDesc(event.target.value)}
                    className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-2"
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
                      <span>Add Instructor</span>
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

export default MakeInstructor;
