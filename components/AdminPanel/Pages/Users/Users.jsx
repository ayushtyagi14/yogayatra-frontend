import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAllUsers = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.BACKEND + "admin/getAllUsers", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const data = result.users;
        setUsers(data);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1 className="text-center text-[30px] mt-3 font-poppins uppercase">
        Users
      </h1>

      <div className="flex items-center justify-center my-8">
        <input
          type="text"
          placeholder="Search by name"
          className="border rounded-md py-2 px-4 mr-2"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {filteredUsers.length > 0 &&
        filteredUsers.map((item, index) => (
          <div
            className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-6 flex flex-col md:flex-row m-4"
            key={index}
          >
            <div className="md:w-1/2 pr-4">
              <h2 className="text-xl font-semibold mb-4">{item.name}</h2>
              <p className="text-gray-600 mb-2">Email: {item.email}</p>
              <p className="text-gray-600 mb-2">Number: {item.mobileNumber}</p>
              <p className="text-gray-600 mb-2">
                Created:{" "}
                {new Date(item.date).toLocaleString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-600">Age:</p>
                <p className="text-gray-800 font-semibold">
                  {item.age
                    ? ` ${`${item.age === "Null" ? "NA" : item.age}`}`
                    : "NA"}
                </p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-600">Gender:</p>
                <p className="text-gray-800 font-semibold">
                  {item.gender
                    ? ` ${`${item.gender === "Null" ? "NA" : item.gender}`}`
                    : "NA"}
                </p>
              </div>
            </div>
          </div>
        ))}

      {filteredUsers.length === 0 && (
        <div className="text-center mt-8">No users found.</div>
      )}
    </>
  );
};

export default Users;
