"use client";
import ButtonRegular from "@/components/Shared/ButtonRegular";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [isCheckIconVisible, setIsCheckIconVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCheckIconVisible(true);
    }, 100); // Stel de gewenste vertraging in (in milliseconden)

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center" style={{ marginTop: "40px" }}>
        <section>
          {" "}
          <h2 className="text-center">Message has been send!</h2>
          <hr style={{ width: "90%", margin: "15px auto" }}></hr>
          <div className="CheckIconContainer">
            <AnimatedCheckIcon isVisible={isCheckIconVisible} />
          </div>
        </section>{" "}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
        >
          <Link href={"/"}>
            <ButtonRegular text="back to portfolio" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
function AnimatedCheckIcon({ isVisible }: { isVisible: any }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            type: "tween",
            duration: 1, // Duur van 1 seconde
            ease: "easeOut",
          }}
          className="CheckCircle"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="-33 -3 100 30"
            strokeWidth={1.5}
            stroke="lightgreen"
            className="CheckIcon"
          >
            <motion.circle
              cx="15.5"
              cy="12"
              r="10"
              initial={{ strokeDasharray: "0 100" }}
              animate={{ strokeDasharray: "100 100" }}
              exit={{ strokeDasharray: "0 100" }}
              transition={{
                type: "tween",
                duration: 1, // Duur van 1 seconde
                ease: "easeOut",
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ pathLength: 0, opacity: 0 }}
              transition={{
                type: "tween",
                duration: 0.7, // Duur van 0.5 seconde
                ease: "easeOut",
                delay: 0.7, // Vertraging van 0.5 seconde na cirkelanimatie
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l4 4 8-8"
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default page;
