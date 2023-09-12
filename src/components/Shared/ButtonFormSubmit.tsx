"use client";
import { motion } from "framer-motion";
import React from "react";

const ButtonFormSubmit = ({ text }: { text: string }) => {
  return (
    <motion.button
      className="btn-grad"
      type="submit"
      whileTap={{ scale: 0.9, y: 0 }}
    >
      {text}
    </motion.button>
  );
};

export default ButtonFormSubmit;
