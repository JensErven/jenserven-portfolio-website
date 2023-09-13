"use client";
import React, { useState } from "react";
import "../../styles/ProjectCard.css"; // Import the CSS file
import { skip } from "node:test";
import Link from "next/link";

const ProjectCard = ({ project }: { project: any }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const skillTags = ["Javascript", "React", "Tailwind"];

  const handleMouseMove = (e: any) => {
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
    <Link href={`/projects/${project.projectId}`}>
      <div
        className="project-card bg-black rounded-lg p-4 h-fit text-left shadow-lg cursor-pointer pb-16"
        style={{
          minHeight: "100%",
          backgroundColor: "#242e47",
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="projectcard-imagepreview w-full  bg-black h-48 rounded-lg lg:h-48 xl:h-64 md:h-48 sm:h-48"></div>

        <h5 className="mt-4 capitalize">{project.title}</h5>
        <p className="pb-4 ">
          {project.previewDescription.slice(0, 140)}
          {project.previewDescription.length > 140 && (
            <>
              {" "}
              <span className="text-white">...</span>
            </>
          )}
        </p>
        <div
          className="flex flex-row rounded-lg px-4   w-fit py-2 absolute bottom-4"
          style={{ backgroundColor: "#0f172a", color: "whitesmoke" }}
        >
          {project.skillTags.map((skill: string, index: number) => (
            <div className="flex flex-row " key={index}>
              <div className="skillTag ">{skill}</div>
              {index !== project.skillTags.length - 1 && ( // Render the span if it's not the last skill
                <span
                  style={{
                    color: "#f9a082",
                    fontWeight: "bolder",
                    padding: "0px 8px",
                  }}
                >
                  |
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
