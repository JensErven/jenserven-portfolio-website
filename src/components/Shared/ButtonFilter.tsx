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
  const getBackgroundColor = () => {
    // Replace 'category' with the property name in your project object that holds the category value
    const category = text; // Example: 'Web Development' or 'App Development'

    // Assign different border colors based on categories
    switch (category) {
      case "Web":
        return "bg-pink-600";
      case "App":
        return "bg-indigo-600";
      case "VR":
        return "bg-cyan-400";
      default:
        return "bg-stone-200";
    }
  };
  return (
    <motion.button
      className={`${
        active
          ? "bg-white text-black font-bold border-solid border-1-white border"
          : "bg-transparent text-white font-bold border-solid border-1-white border"
      } px-4 py-2 rounded-lg focus:outline-none flex gap-2 items-center flex-row w-fit`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setActiveFilter(text)}
    >
      {text === "All" ? (
        <></>
      ) : (
        <>
          {" "}
          <div className={`${getBackgroundColor()} w-4 h-1 rounded-lg`}></div>
        </>
      )}
      {text}
    </motion.button>
  );
};

export default ButtonFilter;
