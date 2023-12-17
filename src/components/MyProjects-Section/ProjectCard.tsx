"use client";
import React, { useState, createElement } from "react";
import "../../../styles/ProjectCard.css"; // Import the CSS file
import { skip } from "node:test";
import Link from "next/link";
import { DiIllustrator } from "react-icons/di";

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaLaravel,
  FaAndroid,
  FaPhp,
  FaUnity,
  FaAngular,
  FaNodeJs,
  FaVuejs,
  FaBootstrap,
  FaPython,
  FaJava,
  FaSwift,
  FaDocker,
  FaGit,
  FaSass,
  FaAws,
} from "react-icons/fa";

const ProjectCard = ({
  project,
  projectDetailsForOverlay,
  openOverlay,
}: {
  project: any;
  projectDetailsForOverlay: any;
  openOverlay: any;
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  // Create a mapping object that pairs string values with corresponding icon components
  const iconMapping = {
    React: FaReact,
    HTML: FaHtml5,
    CSS: FaCss3,
    Laravel: FaLaravel,
    Android: FaAndroid,
    Php: FaPhp,
    Unity: FaUnity,
    Angular: FaAngular,
    NodeJs: FaNodeJs,
    "Vue.js": FaVuejs,
    Bootstrap: FaBootstrap,
    Python: FaPython,
    Java: FaJava,
    Swift: FaSwift,
    Docker: FaDocker,
    Git: FaGit,
    Sass: FaSass,
    AWS: FaAws,
  };

  const handleCardClick = () => {
    // Call the openOverlay function passed from MyProjects or higher component
    openOverlay();
    projectDetailsForOverlay(project);
    // Optionally, you can also pass the project details to the overlay component
    // openOverlay(project);
  };

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

  const getBorderColor = () => {
    // Replace 'category' with the property name in your project object that holds the category value
    const category = project.category; // Example: 'Web Development' or 'App Development'

    // Assign different border colors based on categories
    switch (category) {
      case "Web":
        return "border-pink-600";
      case "App":
        return "border-indigo-600";
      case "VR":
        return "border-cyan-400";
      default:
        return "border-stone-200";
    }
  };
  return (
    // <Link href={`/projects/${project.id}`}>
    <div
      className={`project-card  rounded-lg h-fit text-left shadow-lg  cursor-pointer relative  ${
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
      onClick={handleCardClick}
    >
      {project.isClientProject && (
        <>
          {" "}
          <div className="absolute top-[2px] left-[2px] px-3 py-1 flex items-center justify-center bg-pink-700 shadow-slate-900 shadow-inner rounded-br-2xl rounded-tl-lg rounded-bl-md rounded-tr-md overflow-hidden">
            <p>Client Project</p>
            <div className="shine"></div>
          </div>
        </>
      )}

      <div className="projectcard-imagepreview w-full  bg-black h-48 rounded-lg lg:h-56 xl:h-64 md:h-56 sm:h-56">
        <img
          src={`${project.thumbnailUrl}`}
          className={`object-cover w-full h-full rounded-t-lg rounded-b-none ${getBorderColor()} border-b-4`}
        />
      </div>
      <div className="p-4">
        <h3 className="mt-2 capitalize font-bold ">{project.title}</h3>
        <p className="pb-4 text-stone-200" style={{ minHeight: "fit-content" }}>
          {project?.subtitle}
        </p>
        <div className="flex gap-2 flex-wrap ">
          {project.skillTags.map((skill, index: number) => {
            const iconName = skill.name; // For example, iconName = 'FaPython'
            // Check if the skill is present in the iconMapping
            const IconComponent = iconMapping[iconName];

            return (
              <div
                key={index}
                className="flex justify-center items-center bg-[#0f172a8c] px-2 py-1 rounded-md capitalize gap-2 "
                style={{
                  boxShadow: "4px 4px 2px  #0f172a8c, 4px 4px 2px  #0f172a8c",
                }}
              >
                {IconComponent && (
                  <IconComponent size={15} color={skill.color} />
                )}{" "}
                <p className="">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
