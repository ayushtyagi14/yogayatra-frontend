import React from "react";
import {
  fadeIn,
  zoomIn,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import { motion } from "framer-motion";

const WhyYoga = () => {
  return (
    <motion.section
      className="mt-40"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={textVariant(0.2)} className="text-center">
          <h2 className="text-[40px] font-extrabold tracking-tight text-gray-900">
            Why <span className="text-[#f86454]">YogaYatra</span>?
          </h2>
          <p className="max-w-2xl mx-auto font-poppins text-gray-500">
            Discover the many benefits of practicing yoga.
          </p>
        </motion.div>
        <motion.div className="mt-20" variants={zoomIn(0.5, 1)}>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 text-center">
            <motion.div className="flex flex-col items-center">
              <motion.img
                src="/assets/reduce-stress.svg"
                alt="reduce-stress"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              />
              <motion.dt className="text-[22px] leading-6 font-medium mt-4">
                Reduce Stress and Anxiety
              </motion.dt>
              <motion.dd className="mt-4 text-[14px] font-poppins text-gray-500">
                Practicing yoga can help reduce stress and anxiety by promoting
                relaxation and reducing tension in the body and mind.
              </motion.dd>
            </motion.div>

            <motion.div className="flex flex-col items-center">
              <motion.img
                src="/assets/flexibility.svg"
                alt="flexibility"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.4 },
                }}
              />
              <motion.dt className="text-[22px] leading-6 font-medium mt-4">
                Increase Flexibility and Strength
              </motion.dt>
              <motion.dd className="mt-4 text-[14px] font-poppins text-gray-500">
                Yoga helps increase flexibility and strength by working on
                different muscle groups and improving joint mobility.
              </motion.dd>
            </motion.div>

            <motion.div className="flex flex-col items-center">
              <motion.img
                src="/assets/peace.svg"
                alt="peace"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.6 },
                }}
              />
              <motion.dt className="text-[22px] leading-6 font-medium mt-4">
                Improve Heart Health
              </motion.dt>
              <motion.dd className="mt-4 text-[14px] font-poppins text-gray-500">
                Yoga can help lower blood pressure and reduce the risk of heart
                disease by improving circulation and promoting relaxation.
              </motion.dd>
            </motion.div>
          </dl>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyYoga;
