import React from "react";
import { useRouter } from "next/router";
import { staggerContainer, fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";

const Team = () => {
  const router = useRouter();

  return (
    <div className="mx-10 mt-40">
      <h1 className="md:text-[40px] text-[30px] text-center">
        Meet The <span className="text-[#f86454]">Experts</span>
      </h1>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="grid md:grid-cols-2 grid-cols-1 mt-5 gap-4"
      >
        <motion.div
          variants={fadeIn("down", "tween", 0.2, 1)}
          className="flex flex-col items-center pb-4 md:w-1/2 md:mx-auto rounded shadow bg-white"
        >
          <div className="w-full flex justify-center">
            <img
              src="/assets/sakina-vagh.png"
              alt="yoga-teacher"
              className="h-60 w-60 object-cover rounded-t"
            />
          </div>
          <div className="p-4 flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Sakina Vagh
            </h2>
            <button
              className="text-[#f86454] bg-transparent border border-[#f86454] px-4 py-2 rounded-full font-medium transition duration-300 ease-in-out hover:bg-[#f86454] hover:text-white"
              onClick={() => router.push("/instructors/sakina-vagh")}
            >
              View Profile
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="flex flex-col items-center pb-4 md:w-1/2 md:mx-auto rounded shadow bg-white"
        >
          <div className="w-full flex justify-center">
            <img
              src="/assets/rathnavel-pandian.png"
              alt="yoga-teacher"
              className="h-60 w-60 object-cover rounded-t"
            />
          </div>
          <div className="p-4 flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Rathnavel Pandian
            </h2>
            <button
              className="text-[#f86454] bg-transparent border border-[#f86454] px-4 py-2 rounded-full font-medium transition duration-300 ease-in-out hover:bg-[#f86454] hover:text-white"
              onClick={() => router.push("/instructors/rathnavel-pandian")}
            >
              View Profile
            </button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Team;
