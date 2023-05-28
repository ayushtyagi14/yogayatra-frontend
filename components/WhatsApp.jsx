import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { MdClose } from "react-icons/md";

const WhatsApp = () => {
  const phoneNumber = "+919911828286"; // Replace with your desired phone number
  const encodedMessage = encodeURIComponent("Hello! I have a question."); // Replace with your predefined message

  const [showTooltip, setShowTooltip] = useState(true);
  const controls = useAnimation();

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.location.href = url;
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ y: 100, opacity: 0 });
      await controls.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });
    };
    sequence();
  }, [controls]);

  return (
    <div className="relative">
      <div className="fixed bottom-4 right-4 z-50 cursor-pointer">
        <motion.div
          onClick={handleWhatsAppClick}
          initial={{ y: 100, opacity: 0 }}
          animate={controls}
        >
          <img
            src="/assets/whatsapp.gif"
            alt="WhatsApp Icon"
            className="rounded-full bg-transparent p-2"
          />
        </motion.div>
        {showTooltip && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
            exit={{ y: 10, opacity: 0, transition: { duration: 0.5 } }}
            className="absolute bottom-full right-0 transform translate-x-1/2 p-4 bg-white rounded shadow-xl"
          >
            <div className="flex flex-row items-center justify-between w-max text-[14px]">
              <span className="mr-4">Have any queries?</span>
              <button
                onClick={handleCloseTooltip}
                className="text-gray-400 hover:text-gray-600"
              >
                X
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WhatsApp;
