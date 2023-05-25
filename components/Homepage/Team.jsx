import React from "react";
import { useRouter } from "next/router";
import { staggerContainer, fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";

const Team = ({ props }) => {
  const router = useRouter();

  const handleViewProfile = (instructorId, instructorName) => {
    const slugifiedName = instructorName.toLowerCase().replace(/\s+/g, "-");
    router.push(`/instructors/${slugifiedName}/${instructorId}/`);
  };

  return (
    <div className="mx-10 mt-40">
      <h1 className="md:text-[40px] text-[30px] text-center">
        Meet The <span className="text-[#f86454]">Experts</span>
      </h1>
      {props.length > 0 && (
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid md:grid-cols-2 grid-cols-1 mt-5 gap-4"
        >
          {props.map((item) => (
            <div key={item._id}>
              <motion.div
                variants={fadeIn("down", "tween", 0.2, 1)}
                className="flex flex-col items-center pb-4 md:w-1/2 md:mx-auto rounded shadow bg-white"
              >
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
              </motion.div>
            </div>
          ))}
        </motion.section>
      )}
    </div>
  );
};

export default Team;
