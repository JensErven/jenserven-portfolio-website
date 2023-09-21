"use client";
import { motion } from "framer-motion";
import React from "react";

const ButtonFilter = ({
  text,
  active,
  setActiveFilter,
}: {
  text: string;
  active: boolean;
  setActiveFilter: any;
}) => {
  return (
    <motion.button
      className={`${
        active
          ? "bg-white text-black font-bold border-solid border-1-white border"
          : "bg-transparent text-white font-bold border-solid border-1-white border"
      } px-4 py-2 rounded-lg focus:outline-none`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setActiveFilter(text)}
    >
      {text}
    </motion.button>
  );
};

export default ButtonFilter;
