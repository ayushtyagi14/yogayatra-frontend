import React from "react";
import Image from "next/image";
import { staggerContainer, fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";

const Founders = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 my-32">
      <div className="max-w-[80%] mx-auto px-4">
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col md:flex-row items-center"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="md:w-1/2 mb-6 md:mb-0"
          >
            <Image
              src="/assets/founders.jpg"
              alt="Founders"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="md:w-1/2 md:pl-10"
          >
            <h1 className="md:text-[34px] text-[22px] text-center font-bold text-gray-800 mb-4">
              Meet Our Founders
            </h1>
            <p className="text-gray-700 mb-6">
              Preetha and Giri Prasad, proud parents of two young girls from
              Karur, have dedicated themselves to the practice of yoga since
              their childhood. Their passion for this ancient art only grew
              stronger under the guidance of their revered guru, Dr. Madhavan,
              at the Vivekananda Institute of Yoga Therapy in Karur. Upon
              relocating to Coimbatore, they embarked on a search for a suitable
              yoga studio to continue their practice, which ultimately led to
              their decision to establish their own center under the mentorship
              of their guru. Their primary goal in founding this studio is to
              foster a community of like-minded individuals who share their
              commitment to healthy living and holistic well-being.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Founders;
