"use client";
import "./globals.css";

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

const raleway = Raleway({ subsets: ["cyrillic"], weight: ["700", "200"] });

export const metadata: Metadata = {
  title: "Portfolio - Jens Erven",
  description: "Jens Erven - Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });
  const [blurLevel, setBlurLevel] = useState(0); // Added state for blur level

  useEffect(() => {
    const blobElement = document.getElementById("blob");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setBlobPosition({ x: clientX, y: clientY });

      // Calculate the distance from the center of the blob
      const blobRect = blobElement.getBoundingClientRect();
      const centerX = blobRect.left + blobRect.width / 2;
      const centerY = blobRect.top + blobRect.height / 2;
      const distance = Math.sqrt(
        Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2)
      );

      // Adjust the blur level based on the distance from the center
      const maxBlur = 30; // Maximum blur value
      const blurFactor = 0.1; // Adjust the sensitivity
      const newBlurLevel = Math.min(maxBlur, distance * blurFactor);
      setBlurLevel(newBlurLevel);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
  }, []);
  return (
    <html lang="en">
      <body
        className={` relative ${raleway.className}  lg:mx-20 xl:mx-32 2xl:mx-64 mx-4`}
        style={{ backgroundColor: "#0f172a" }}
      >
        {" "}
        <div id="blob-container"></div>
        <div
          id="blob"
          style={{
            left: `${blobPosition.x}px`,
            top: `${blobPosition.y}px`,
            filter: `blur(${blurLevel}px)`, // Apply the blur effect
          }}
        ></div>
        {children}
      </body>
    </html>
  );
}
