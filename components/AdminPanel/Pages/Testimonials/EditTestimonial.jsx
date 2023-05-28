import React, { useState } from "react";
import { toast } from "react-toastify";

const EditTestimonials = ({ testimonialId, getAllTestimonials }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [image, setImage] = useState(null);
  const [editImage, setEditImage] = useState(null);
  const [testimonialPersonName, setTestimonialPersonName] = useState("");
  const [testimonialPersonDesig, setTestimonialPersonDesig] = useState("");
  const [testimonialContent, setTestimonialContent] = useState("");

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
    formData.append("testimonialId", testimonialId);

    var requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    fetch(process.env.BACKEND + "admin/editTestimonialImg", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        setLoading2(false);
        if (data.resCode === 200) {
          toast.success(`Testimonial Image edited successfully!`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
          setShowModal2(false);
          getAllTestimonials();
        } else {
          toast.error(`${data.message}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
        }
      })
      .catch((error) => console.log("error", error));
  };

  const getSingleTestimonial = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      process.env.BACKEND + "admin/getSingleTestimonial/" + testimonialId,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setImage(result.testimonial.testimonialImgUrl);
        setTestimonialPersonName(result.testimonial.testimonialPersonName);
        setTestimonialPersonDesig(result.testimonial.testimonialPersonDesig);
        setTestimonialContent(result.testimonial.testimonialContent);
      })
      .catch((error) => console.log("error", error));
  };

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();

    let payload = {
      testimonialPersonName: testimonialPersonName,
      testimonialPersonDesig: testimonialPersonDesig,
      testimonialContent: testimonialContent,
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
      process.env.BACKEND + "admin/editTestimonial/" + testimonialId,
      requestOptions
    )
      .then((response) => {
        response.text();
        console.log(response.status);
        setLoading(false);
        if (response.status === 200) {
          toast.success(`Testimonial Edited Successfully`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
          setShowModal(false);
          setShowModal2(false);
          getAllTestimonials();
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
      <div className="flex flex-row">
        <button
          onClick={() => {
            setShowModal(true), getSingleTestimonial();
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
            <div className="relative w-max my-6 mx-auto mt-[5rem]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5 px-10 overflow-y-auto">
                <div className="flex flex-row items-center justify-between mt-5 mr-5">
                  <h1 className="text-center uppercase font-poppins text-[20px]">
                    Edit Testimonial
                  </h1>
                  <button
                    className="text-[#353746] font-bold text-2xl ml-20"
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
                  <label htmlFor="testimonial-person-name">Person Name:</label>
                  <input
                    type="text"
                    id="testimonial-person-name"
                    name="testimonial-personName"
                    value={testimonialPersonName}
                    onChange={(event) =>
                      setTestimonialPersonName(event.target.value)
                    }
                    className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-2 text-[14px]"
                    required
                  />
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                  <label htmlFor="testimonial-person-desig">
                    Person Designation:
                  </label>
                  <input
                    type="text"
                    id="testimonial-person-desig"
                    name="testimonial-person-desig"
                    value={testimonialPersonDesig}
                    onChange={(event) =>
                      setTestimonialPersonDesig(event.target.value)
                    }
                    className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ml-2 text-[14px]"
                    required
                  />
                </div>

                <div className="flex flex-col items-center mt-4 w-full">
                  <label htmlFor="testimonial-content">Content:</label>
                  <textarea
                    id="testimonial-content"
                    name="testimonial-content"
                    value={testimonialContent}
                    onChange={(event) =>
                      setTestimonialContent(event.target.value)
                    }
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
                      <span>Edit testimonial</span>
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

export default EditTestimonials;
