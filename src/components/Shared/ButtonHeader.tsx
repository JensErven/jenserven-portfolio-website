"use client";
import { motion, spring } from "framer-motion";
import React from "react";
import { FaLongArrowAltDown } from "react-icons/fa";

const ButtonHeader = ({ text }: { text: string }) => {
  return (
    <motion.button
      className="btn-grad flex flex-row gap-2"
      type="button"
      initial={{ opacity: 0, y: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
      transition={{
        delay: 0.6,
        ease: "ease",
        duration: 0.15,
        type: "spring",
      }}
      whileTap={{ scale: 0.9, y: 0 }}
    >
      {text}
      <FaLongArrowAltDown size={20} fill="white" />
    </motion.button>
  );
};

export default ButtonHeader;
