import React, { useEffect, useState } from "react";

import "../../../styles/scrollbar.css";
import { AnimatePresence, motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  FaArrowLeft,
  FaGithub,
  FaGlobe,
  FaLongArrowAltRight,
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
  FaArrowsAltV,
} from "react-icons/fa";
import CarouselComponent from "./CarouselComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const ProjectDetailsOverlay = ({
  onClose,
  projectDetails,
  isOverlayOpen,
}: {
  onClose: any;
  projectDetails: any;
  isOverlayOpen: boolean;
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const [allMedia, setAllMedia] = useState([]);
  useEffect(() => {
    if (
      projectDetails.images.length > 0 &&
      projectDetails.thumbnailUrl !== ""
    ) {
      const updatedMedia = [
        projectDetails.thumbnailUrl,
        ...projectDetails.images,
      ];
      setAllMedia(updatedMedia);
    }
  }, [projectDetails.images, projectDetails.thumbnailUrl]);

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

  const getBackgroundColor = () => {
    // Replace 'category' with the property name in your project object that holds the category value
    const category = projectDetails.category; // Example: 'Web Development' or 'App Development'

    // Assign different border colors based on categories
    switch (category) {
      case "Web":
        return "bg-pink-600";
      case "App":
        return "bg-indigo-600";
      case "VR":
        return "bg-cyan-400";
      default:
        return "bg-stone-200";
    }
  };
  const handleCloseOverlay = () => {
    // Call the openOverlay function passed from MyProjects or higher component
    onClose();

    // Optionally, you can also pass the project details to the overlay component
    // openOverlay(project);
  };

  const handleGithubClick = () => {
    console.log("test");
  };

  useEffect(() => {
    console.log(isOverlayOpen);
  }, [projectDetails, isOverlayOpen]);

  // Define animation variants
  const overlayVariants = {
    hidden: {
      opacity: 0,
      y: "0%",
      x: "100%",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: "0%",
      x: "0%",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const buttonStyle = {
    backgroundImage:
      "linear-gradient(to right, #FF512F 0%, #DD2476 51%, #FF512F 100%)",
    padding: "15px 15px",
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",
    borderRadius: "100%",
    display: "inline-block", // Keep it inline to wrap the icons
    cursor: "pointer", // Add cursor pointer for interaction
  };

  function isVideo(url) {
    return (
      url.endsWith(".mp4") ||
      url.endsWith(".avi") ||
      url.endsWith(".webm") ||
      url.endsWith(".mkv")
    );
  }

  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <AnimatePresence>
      {isOverlayOpen && (
        <motion.div className="fixed inset-0 flex items-center justify-center z-[2000] ">
          {/* Transparent background overlay */}
          <motion.div
            className="fixed inset-0 bg-black opacity-70"
            onClick={handleCloseOverlay}
          ></motion.div>

          {/* Project details panel on the right */}
          <motion.div
            className="fixed top-0 right-0 h-full w-full  md:w-1/2 lg:w-1/2 xl:w-1/3 2xl-w-1/4 bg-[#242e47] shadow-lg"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="  flex flex-row justify-between mx-4 md:mx-6 lg:mx-8 py-4 ">
              {" "}
              <button onClick={handleCloseOverlay} style={buttonStyle}>
                <FaArrowLeft
                  size={25}
                  className="carousel-button-left-icon fill-slate-100"
                />
              </button>
              <button
                onClick={handleCloseOverlay}
                className=" text-gray-600 hover:text-pink-500"
              >
                Close
              </button>
            </div>
            <hr className="fill-slate-800 border border-slate-800 border-solid"></hr>
            <div
              className="flex flex-col gap-8 custom-scrollbar-style pb-40 mx-4 md:mx-6 lg:mx-8 pt-8"
              style={{ maxHeight: "100%", overflowY: "auto" }}
            >
              <div>
                <h2>
                  <span>
                    {projectDetails.title
                      ? projectDetails.title
                      : "project name here"}
                  </span>
                </h2>
                <h3>{projectDetails.previewDescription}</h3>
              </div>
              <CarouselComponent
                allMedia={allMedia}
                category={projectDetails.category}
              />

              <div>
                {" "}
                <div className="flex flex-row items-center gap-2">
                  <div
                    className={`${getBackgroundColor()} w-4 h-1 rounded-lg`}
                  ></div>
                  <h3 className="h3-white-bold">About</h3>
                </div>
                <p>
                  {showFullDescription
                    ? projectDetails.description
                    : truncateDescription(projectDetails.description, 500)}
                </p>
                {!showFullDescription && (
                  <button
                    onClick={toggleDescription}
                    className="mt-2 px-4 py-2 rounded-lg focus:outline-none flex gap-2 items-center flex-row w-fit font-thin  border-solid border-1-white border"
                  >
                    <p>Read more</p>
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="fill-white text-white"
                    />
                  </button>
                )}
              </div>
              <div>
                {" "}
                <div className="flex flex-row items-center gap-2">
                  <div
                    className={`${getBackgroundColor()} w-4 h-1 rounded-lg`}
                  ></div>
                  <h3 className="h3-white-bold">Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {projectDetails.skillTags.map((skill, index: number) => {
                    const iconName = skill.name; // For example, iconName = 'FaPython'
                    // Check if the skill is present in the iconMapping
                    const IconComponent = iconMapping[iconName];

                    return (
                      <div
                        key={index}
                        className="flex justify-center items-center bg-[#0f172a8c] px-2 py-1 rounded-md capitalize gap-2 "
                        style={{
                          boxShadow:
                            "4px 4px 2px  #0f172a8c, 4px 4px 2px  #0f172a8c",
                        }}
                      >
                        {/* Render the icon dynamically */}
                        {IconComponent && (
                          <IconComponent size={15} color={skill.color} />
                        )}{" "}
                        {/* Display the skill name */}
                        <p className="">{skill.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row justify-between mt-4 ">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <div
                      className={`${getBackgroundColor()} w-4 h-1 rounded-lg`}
                    ></div>
                    <FaGlobe size={20} className="fill-white" />
                    <h3 className="h3-white-bold">Website</h3>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <a
                      href={projectDetails.websiteUrl}
                      className="px-4 py-2 rounded-lg focus:outline-none flex gap-2 items-center flex-row w-fit border-solid border-1-white border"
                    >
                      {" "}
                      <p>View website</p>
                      <FaLongArrowAltRight className="fill-white" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <div
                      className={`${getBackgroundColor()} w-4 h-1 rounded-lg`}
                    ></div>
                    <FaGithub size={20} className="fill-white" />
                    <h3 className="h3-white-bold">Github</h3>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <a
                      href={projectDetails.githubUrl}
                      className="px-4 py-2 rounded-lg focus:outline-none flex gap-2 items-center flex-row w-fit  border-solid border-1-white border"
                    >
                      {" "}
                      <p>view code</p>
                      <FaLongArrowAltRight className="fill-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content of your project details */}

            {/* Close button */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsOverlay;
