import React from "react";
import Image from "next/image";
import { staggerContainer, fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const LookInside = () => {
  const router = useRouter();

  const studioImg = [
    { src: "/assets/studio1.jpg" },
    { src: "/assets/studio2.jpg" },
    { src: "/assets/studio3.jpg" },
    { src: "/assets/studio4.jpg" },
  ];

  return (
    <div className="mx-4 md:mx-10 my-24 flex flex-col items-center">
      <h1 className="md:text-[40px] text-[30px] text-center leading-none mb-16">
        Take A Look <span className="text-[#f86454]">Inside</span>
      </h1>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="grid md:grid-cols-4 grid-cols-2 gap-4"
        >
          {studioImg.map((item, index) => (
            <Image
              src={item.src}
              width={400}
              height={200}
              alt="studio image"
              className="h-40 md:h-64 w-72 rounded"
              key={index}
            />
          ))}
        </motion.div>
      </motion.section>
      <button
        className="bg-[#353746] border border-[#353746] hover:bg-[#f5f5f5] px-8 py-4 rounded-lg text-white hover:text-[#353746] mt-16 uppercase"
        onClick={() => router.push("/studio")}
      >
        View All Of Our Facilities
      </button>
    </div>
  );
};

export default LookInside;
