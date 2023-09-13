"use client";
import { motion, spring } from "framer-motion";
import React from "react";

const ButtonHeader = ({ text }: { text: string }) => {
  return (
    <motion.button
      className="btn-grad"
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
    </motion.button>
  );
};

export default ButtonHeader;
