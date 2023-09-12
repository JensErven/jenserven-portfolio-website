"use client";
import React, { useState } from "react";
import "../../styles/ProjectCard.css"; // Import the CSS file

const ProjectCard = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const boundingBox = card.getBoundingClientRect();
    const cardCenterX = boundingBox.left + boundingBox.width / 2;
    const cardCenterY = boundingBox.top + boundingBox.height / 2;

    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;

    const tiltX = (mouseY / cardCenterY) * 15; // Adjust the sensitivity
    const tiltY = -(mouseX / cardCenterX) * 15; // Adjust the sensitivity

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };
  return (
    <div
      className="project-card bg-black rounded-lg p-4 h-fit text-left shadow-lg"
      style={{
        backgroundColor: "#242e47",
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="projectcard-imagepreview w-full  bg-black h-48 rounded-lg lg:h-48 xl:h-64 md:h-48 sm:h-48"></div>
      <p
        className="capitalize mt-4"
        style={{ color: "#f9a082", fontWeight: "500" }}
      >
        typescript | react | tailwind | css
      </p>
      <h4 className="mb-4">Lorem, ipsum dolor.</h4>
      <p className="py-4 mb-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
        officia expedita tempore saepe amet aliquid!
      </p>
      <button className="font-bold text-white mb-4">See project</button>
    </div>
  );
};

export default ProjectCard;
