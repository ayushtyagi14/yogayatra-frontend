import React from "react";
import { useRouter } from "next/router";

const InstructorsComponent = ({ props }) => {
  const router = useRouter();

  const handleViewProfile = (instructorId, instructorName) => {
    const slugifiedName = instructorName.toLowerCase().replace(/\s+/g, "-");
    router.push(`/instructors/${slugifiedName}/${instructorId}/`);
  };

  return (
    <>
      <div className="mx-4">
        <h1 className="text-center md:text-[40px] text-[26px] uppercase font-epilogue leading-none mt-12">
          Meet the best{" "}
          <span className="text-[#f86454]"> Yoga Instructors </span>
        </h1>
        {props.length > 0 && (
          <div className="grid md:grid-cols-2 grid-cols-1 mt-5 gap-4">
            {props.map((item) => (
              <div key={item._id}>
                <div className="flex flex-col items-center pb-4 md:w-1/2 md:mx-auto rounded shadow bg-white">
                  <div className="w-full flex justify-center">
                    <img
                      src={item.instructorImgUrl}
                      alt={item.instructorName}
                      className="h-60 w-60 object-cover rounded-t"
                    />
                  </div>
                  <div className="p-4 flex flex-col items-center">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {item.instructorName}
                    </h2>
                  </div>
                  <button
                    className="text-[#f86454] bg-transparent border border-[#f86454] px-4 py-2 rounded-full font-medium transition duration-300 ease-in-out hover:bg-[#f86454] hover:text-white"
                    onClick={() =>
                      handleViewProfile(item.instructorId, item.instructorName)
                    }
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default InstructorsComponent;
