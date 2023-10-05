"use client";
import React, { useState } from "react";
import "../../styles/ProjectCard.css"; // Import the CSS file
import { skip } from "node:test";
import Link from "next/link";

const ProjectCard = ({ project }: { project: any }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false); // Track hover state

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

  const handleMouseEnter = () => {
    setIsHovered(true); // Set hover state to true
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Set hover state to false
    setTilt({ x: 0, y: 0 }); // Reset tilt when mouse leaves
  };
  return (
    <Link href={`/projects/${project.projectId}`}>
      <div
        className={`project-card  rounded-lg h-fit text-left shadow-lg  cursor-pointer  ${
          isHovered ? "hovered" : "" // Apply the 'hovered' class when hovered
        }`}
        style={{
          minHeight: "100%",
          backgroundColor: "#242e47",
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="projectcard-imagepreview w-full  bg-black h-48 rounded-lg lg:h-56 xl:h-64 md:h-56 sm:h-56">
          <img
            src={`${project.thumbnailUrl}`}
            className="object-cover w-full h-full rounded-t-lg rounded-b-none border-pink-600 border-b-4"
          />
        </div>
        <div className="p-4">
          <h3 className="mt-4 capitalize font-bold ">Studio Narrata</h3>
          <p className="pb-4 " style={{ minHeight: "fit-content" }}>
            <span> Web Development</span>

            {/* {project.previewDescription.slice(0, 140)}
            {project.previewDescription.length > 140 && (
              <>
                {" "}
                <span className="text-white">...</span>
              </>
            )} */}
          </p>
          <div className="flex-row gap-2 flex-wrap inline-flex">
            {project.skillTags.map((skill: string, index: number) => (
              <>
                <p className=" px-2  border border-white border-solid  rounded-md capitalize">
                  {skill}
                </p>
              </>
            ))}
          </div>
        </div>

        {/* <div
          className="p-2 rounded-lg overflow-hidden "
          style={{
            backgroundColor: "#0f172a",
            color: "whitesmoke",
            // Make the container a flex container
          }}
        >
          
          <div
            className={`skillTags-container flex flex-row  ${
              isHovered ? "animated" : ""
            }`}
          >
            {project.skillTags.map((skill: string, index: number) => (
              <div className="flex flex-row" key={index}>
                <div className="skillTag line-clamp-1 capitalize ">{skill}</div>
                {index !== project.skillTags.length - 1 && (
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
        </div> */}
      </div>
    </Link>
  );
};

export default ProjectCard;
