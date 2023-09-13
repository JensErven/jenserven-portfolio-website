"use client";
import React, { useEffect, useState } from "react";

const BlobMouseCursor = () => {
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

  return (
    <div
      id="blob"
      style={{
        left: `${blobPosition.x}px`,
        top: `${blobPosition.y}px`,
        filter: `blur(${blurLevel}px)`, // Apply the blur effect
      }}
    ></div>
  );
};

export default BlobMouseCursor;
