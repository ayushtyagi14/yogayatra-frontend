import React, { useState } from "react";

const OrderForm = ({ bookingDetails }) => {
  const [booking, setBooking] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    userId: bookingDetails.userId,
    sessionId: bookingDetails.sessionId,
    name: "",
    email: "",
    mobileNumber: "",
    gender: "",
    dob: "",
    age: 0,
    address: "",
    motherName: "NA",
    fatherName: "NA",
    motherNumber: 0,
    fatherNumber: 0,
    guardianName: "NA",
    guardianNumber: 0,
    know: "",
    primaryGoals: "",
    yogaBefore: "",
    healthConcerns: "NA",
    planDuration: bookingDetails.planDuration,
    planFee: bookingDetails.planFee,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "age") {
      const age = parseInt(value);
      if (age >= 18) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: age,
          motherName: "NA",
          fatherName: "NA",
          motherNumber: 0,
          fatherNumber: 0,
          guardianName: "NA",
          guardianNumber: 0,
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: age,
        }));
      }
    } else if (
      name === "motherNumber" ||
      name === "fatherNumber" ||
      name === "guardianNumber"
    ) {
      const number = parseInt(value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: number,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();

    var raw = { ...formData };

    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(raw),
      redirect: "follow",
    };

    fetch("https://yogayatra.in/api/user/order", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setLoading(false);
        console.log(result); // Log the response text here
        const data = JSON.parse(result);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <span className="cursor-pointer" onClick={() => setBooking(true)}>
        Book this Class
      </span>
      {booking && (
        <>
          <form
            onSubmit={handleSubmit}
            className="justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-[999] outline-none focus:outline-none mt-5 text-[14px] text-black"
          >
            <div className="relative md:w-[80%] w-[90%] my-6 mx-auto md:mt-[32rem] mt-[53rem]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-5 md:px-10 px-4 overflow-y-auto">
                <div className="flex flex-row items-center justify-between mt-5 mr-5">
                  <h1 className="text-center uppercase font-poppins text-[20px]">
                    Fill the form to Continue
                  </h1>
                  <button
                    className="text-[#353746] font-bold text-2xl"
                    onClick={() => setBooking(false)}
                  >
                    x
                  </button>
                </div>

                <div className="flex md:flex-row flex-col md:items-center items-start justify-between">
                  <div className="flex md:flex-row flex-col items-center mt-4 w-full">
                    <label htmlFor="name" className="mr-2">
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] md:w-max w-full"
                      required
                    />
                  </div>

                  <div className="flex md:flex-row flex-col items-center mt-4 w-full">
                    <label htmlFor="email" className="mr-2">
                      Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] md:w-max w-full"
                      required
                    />
                  </div>
                </div>

                <div className="flex md:flex-row flex-col md:items-center items-start justify-between">
                  <div className="flex md:flex-row flex-col items-center mt-4 w-full">
                    <label htmlFor="mobileNumber" className="mr-2">
                      Mobile Number:
                    </label>
                    <input
                      type="text"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] md:w-max w-full"
                      required
                    />
                  </div>

                  <div className="flex md:flex-row flex-col items-center mt-4 w-full">
                    <label htmlFor="gender" className="mr-2">
                      Gender:
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] md:w-max w-full"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex md:flex-row flex-col md:items-center items-start justify-between">
                  <div className="flex md:flex-row flex-col items-center mt-4 w-full">
                    <label htmlFor="dob" className="mr-2">
                      Date of Birth:
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] md:w-max w-full"
                      required
                    />
                  </div>

                  <div className="flex md:flex-row flex-col items-center mt-4 w-full">
                    <label htmlFor="age" className="mr-2">
                      Age:
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onWheel={(event) => event.target.blur()}
                      onChange={handleInputChange}
                      className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] md:w-max w-full"
                      required
                    />
                  </div>
                </div>

                <div className="flex md:flex-row flex-col items-center mt-4 w-full">
                  <label htmlFor="address" className="mr-2">
                    Address:
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] w-full"
                    rows="4"
                    required
                  ></textarea>
                </div>

                {formData.age > 0 && formData.age < 18 && (
                  <>
                    <div className="flex md:flex-row flex-col md:items-center items-start justify-between">
                      <div className="flex md:flex-row flex-col items-center mt-4 w-full">
                        <label htmlFor="motherName" className="mr-2">
                          Mother&apos;s Name:
                        </label>
                        <input
                          type="text"
                          name="motherName"
                          value={formData.motherName}
                          onChange={handleInputChange}
                          className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] md:w-max w-full"
                        />
                      </div>

                      <div className="flex md:flex-row flex-col items-center mt-4 w-full">
                        <label htmlFor="fatherName" className="mr-2">
                          Father&apos;s Name:
                        </label>
                        <input
                          type="text"
                          name="fatherName"
                          value={formData.fatherName}
                          onChange={handleInputChange}
                          className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] md:w-max w-full"
                        />
                      </div>
                    </div>

                    <div className="flex md:flex-row flex-col md:items-center items-start justify-between">
                      <div className="flex md:flex-row flex-col items-center mt-4 w-full">
                        <label htmlFor="motherNumber" className="mr-2">
                          Mother&apos;s Mobile Number:
                        </label>
                        <input
                          type="number"
                          name="motherNumber"
                          value={formData.motherNumber}
                          onWheel={(event) => event.target.blur()}
                          onChange={handleInputChange}
                          className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] md:w-max w-full"
                        />
                      </div>

                      <div className="flex md:flex-row flex-col items-center mt-4 w-full">
                        <label htmlFor="fatherNumber" className="mr-2">
                          Father&apos;s Mobile Number:
                        </label>
                        <input
                          type="number"
                          name="fatherNumber"
                          value={formData.fatherNumber}
                          onWheel={(event) => event.target.blur()}
                          onChange={handleInputChange}
                          className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] md:w-max w-full"
                        />
                      </div>
                    </div>

                    <div className="flex md:flex-row flex-col md:items-center items-start justify-between">
                      <div className="flex md:flex-row flex-col items-center mt-4 w-full">
                        <label htmlFor="guardianName" className="mr-2">
                          Guardian&apos;s Name:
                        </label>
                        <input
                          type="text"
                          name="guardianName"
                          value={formData.guardianName}
                          onChange={handleInputChange}
                          className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] md:w-max w-full"
                        />
                      </div>

                      <div className="flex md:flex-row flex-col items-center mt-4 w-full">
                        <label htmlFor="guardianNumber" className="mr-2">
                          Guardian&apos;s Mobile Number:
                        </label>
                        <input
                          type="number"
                          name="guardianNumber"
                          value={formData.guardianNumber}
                          onWheel={(event) => event.target.blur()}
                          onChange={handleInputChange}
                          className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] md:w-max w-full"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="flex md:flex-row flex-col items-center mt-8 w-full">
                  <label htmlFor="yogaBefore" className="mr-2">
                    Have you done yoga before?
                  </label>
                  <select
                    name="yogaBefore"
                    value={formData.yogaBefore}
                    onChange={handleInputChange}
                    className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] md:w-max w-full"
                    required
                  >
                    <option value="">Select Option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="flex flex-col items-center mt-8 w-full">
                  <label htmlFor="know" className="mr-2">
                    How did you come to know about us?
                  </label>
                  <select
                    name="know"
                    value={formData.know}
                    onChange={handleInputChange}
                    className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] w-full"
                    required
                  >
                    <option value="">Select Option</option>
                    <option value="friend">Friend</option>
                    <option value="website">Website</option>
                    <option value="socialMedia">Social Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col items-center mt-8 w-full">
                  <label htmlFor="primaryGoals" className="mr-2">
                    Primary Goals:
                  </label>
                  <textarea
                    name="primaryGoals"
                    value={formData.primaryGoals}
                    onChange={handleInputChange}
                    className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] w-full"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="flex flex-col items-center mt-8 w-full">
                  <label htmlFor="healthConcerns" className="mr-2">
                    Health Concerns (if Any):
                  </label>
                  <textarea
                    name="healthConcerns"
                    value={formData.healthConcerns}
                    onChange={handleInputChange}
                    className="py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2 text-[14px] w-full"
                    rows="4"
                  ></textarea>
                </div>

                <div className="flex flex-row items-center justify-center mt-4 w-full">
                  <button
                    className="py-2 px-8 rounded-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#353746] text-white hover:bg-[#d6cac7]"
                    type="submit"
                  >
                    {loading ? <span>Loading...</span> : <span>Submit</span>}
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default OrderForm;
