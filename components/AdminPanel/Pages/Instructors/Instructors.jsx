import React, { useEffect, useState } from "react";
import Image from "next/image";
import MakeInstructors from "./MakeInstructors";
import EditInstructors from "./EditInstructors";
import DeleteInstructors from "./DeleteInstructors";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  const getAllInstructors = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.BACKEND + "admin/getAllInstructors", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const data = result.instructors;
        console.log(data);
        setInstructors(data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllInstructors();
  }, []);

  return (
    <>
      <div className="my-20">
        <MakeInstructors getAllInstructors={getAllInstructors} />
        {instructors.length > 0 && (
          <div className="grid md:grid-cols-2 grid-cols-1 mt-5 gap-4">
            {instructors.map((item) => (
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
                  <div className="flex flex-row items-center w-full justify-around mt-5">
                    <span>
                      <EditInstructors
                        instructorId={item.instructorId}
                        getAllInstructors={getAllInstructors}
                      />
                    </span>
                    <span className="px-2 py-1 rounded-lg shadow">
                      <DeleteInstructors
                        instructorId={item.instructorId}
                        getAllInstructors={getAllInstructors}
                      />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Instructors;
