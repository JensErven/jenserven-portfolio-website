"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";

const BlobContainer = () => {
  const controls = useAnimation();
  const mouseX = useMotionValue(0); // Initialize a motion value for the mouse x position
  const containerX = useTransform(mouseX, [0, window.innerWidth], [-50, 50]);

  useEffect(() => {
    const numBlobs = 15; // Adjust the number of blobs
    const blobContainer = document.getElementById("blob-container");

    for (let i = 0; i < numBlobs; i++) {
      const blob = document.createElement("div");
      blob.className = "random-blob";
      blob.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      blob.style.top = `${Math.random() * 100}vh`; // Random vertical position

      // Randomize blob sizes between 50px and 150px
      const blobSize = Math.random() * (150 - 50) + 50;
      blob.style.width = `${blobSize}px`;
      blob.style.height = `${blobSize}px`;

      blobContainer.appendChild(blob);

      // Add animation delay and duration
      blob.style.animationDuration = `${Math.random() * 10 + 5}s`;
      blob.style.animationDelay = `${Math.random() * 5}s`;
    }

    // Update mouseX motion value with mouse x position
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX); // Update mouseX value with mouse x position
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX]);

  return (
    <motion.div
      id="blob-container"
      className="blob-container"
      animate={{ x: containerX }}
    />
  );
};
export default BlobContainer;
