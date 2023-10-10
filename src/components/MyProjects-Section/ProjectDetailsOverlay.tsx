import React, { useEffect } from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaGlobe,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaPython,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import "../../../styles/scrollbar.css";
import { AnimatePresence, motion } from "framer-motion";

const ProjectDetailsOverlay = ({
  onClose,
  projectDetails,
  isOverlayOpen,
}: {
  onClose: any;
  projectDetails: any;
  isOverlayOpen: boolean;
}) => {
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

              <div
                className="bg-slate-900 w-full rounded-md relative"
                style={{ height: "350px" }}
              >
                <img
                  className="object-cover w-full h-full rounded-md"
                  src={projectDetails.thumbnailUrl}
                ></img>
                <FaArrowLeft
                  size={30}
                  className="absolute top-1/2 -translate-y-1/2 left-1 fill-pink-500"
                />
                <FaArrowRight
                  size={30}
                  className="absolute top-1/2 -translate-y-1/2 right-1 fill-pink-500"
                />
              </div>
              <div>
                {" "}
                <div className="flex flex-row items-center gap-2">
                  <div className="bg-pink-600 w-4 h-1 rounded-lg"></div>
                  <h3 className="h3-white-bold">About</h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vehicula arcu nec est fringilla, eu fermentum purus fringilla.
                  Nulla facilisi. Sed eu nisl nec metus auctor eleifend a non
                  lectus. Sed sed eros eu augue cursus finibus. Integer at augue
                  non nisi feugiat ullamcorper. Vivamus auctor rhoncus justo, a
                  aliquet erat tincidunt eget.
                </p>
              </div>
              <div>
                {" "}
                <div className="flex flex-row items-center gap-2">
                  <div className="bg-pink-600 w-4 h-1 rounded-lg"></div>
                  <h3 className="h3-white-bold">Technologies</h3>
                </div>
                <div className="flex-row gap-2 flex-wrap inline-flex mt-2">
                  {projectDetails.skillTags.map(
                    (skill: string, index: number) => (
                      <>
                        <div className="flex justify-center items-center border-white border-solid  border  px-2   rounded-md capitalize gap-2">
                          <FaPython size={15} className="fill-white" />

                          <p className="">{skill}</p>
                        </div>
                      </>
                    )
                  )}
                </div>
              </div>
              <div className="flex flex-row justify-between mt-4 ">
                <div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-pink-600 w-4 h-1 rounded-lg"></div>
                    <FaGlobe size={20} className="fill-white" />
                    <h3 className="h3-white-bold">Website</h3>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <p className="text-[#f9a082]">view website</p>
                    <FaLongArrowAltRight className="fill-[#f9a082]" />
                  </div>
                </div>

                <div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="bg-pink-600 w-4 h-1 rounded-lg"></div>
                    <FaGithub
                      onClick={handleGithubClick}
                      size={20}
                      className="fill-white"
                    />
                    <h3 className="h3-white-bold">Github</h3>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <p className="text-[#f9a082]">view code</p>
                    <FaLongArrowAltRight className="fill-[#f9a082]" />
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
