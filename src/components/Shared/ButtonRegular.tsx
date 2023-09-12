"use client";
import { motion, spring } from "framer-motion";
import React from "react";

const ButtonRegular = ({ text }: { text: string }) => {
  return (
    <motion.button
      className="btn-grad"
      type="button"
      whileHover={{ scale: 1.1, y: 15 }}
      whileTap={{ scale: 0.9, y: 0 }}
      transition={{ type: "tween", duration: 0.15 }}
    >
      {text}
    </motion.button>
  );
};

export default ButtonRegular;
