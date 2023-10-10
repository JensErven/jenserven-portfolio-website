"use client";
import React from "react";
import ButtonRegular from "../Shared/ButtonRegular";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link from Next.js

const Banner = () => {
  return (
    <motion.div
      className=" md:mt-40 lg:mt-40 mt-[10vh]"
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, ease: "linear", duration: 1, type: "spring" }}
    >
      <p>Hello, my name is</p>
      <h1>Jens Erven</h1>
      <h2 className="mb-4">
        I am a <span>Full stack developer</span>
        <br></br>
        From Belgium, Leuven.
      </h2>
    </motion.div>
  );
};

export default Banner;
