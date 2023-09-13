"use client";
import React, { useEffect } from "react";

const BlobContainer = () => {
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
  return <div id="blob-container"></div>;
};

export default BlobContainer;
