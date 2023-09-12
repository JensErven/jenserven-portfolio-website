"use client";
import React from "react";
import ButtonRegular from "./Shared/ButtonRegular";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="mt-40"
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, ease: "linear", duration: 1, type: "spring" }}
    >
      <p>
        Hello, <span style={{ color: "#f9a082" }}>my name is</span>
      </p>
      <h1>Jens Erven</h1>
      <h2 className="mb-4">
        I am a <span>Full stack developer</span>
        <br></br>
        From Belgium, Leuven.
      </h2>
      <ButtonRegular text={"My projects"} />
    </motion.div>
  );
};

export default Header;
