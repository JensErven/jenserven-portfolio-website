"use client";
import React, { useEffect, useState } from "react";
import ButtonFilter from "../Shared/ButtonFilter";
import ProjectCard from "./ProjectCard";
import ButtonRegular from "../Shared/ButtonRegular";
import image from "../../public/images/import & cook img1.png";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { getAllProjects } from "../../../db/projects";
import ReactSwitch from "react-switch";

const MyProjects = ({
  openOverlay,
  projectDetailsForOverlay,
}: {
  openOverlay: any;
  projectDetailsForOverlay: any;
}) => {
  const [projects, setProjects] = useState([]);
  const buttonFilterContent = ["All", "Web", "App", "VR"];
  const [activeFilter, setActiveFilter] = React.useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await getAllProjects();
      setProjects(fetchedProjects);
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  const springAnimation = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  return (
    <section className="text-center flex flex-col items-center  ">
      <h2>
        <span>My projects</span>
      </h2>
      <h3>See what I can make</h3>
      <motion.div
        className="underline-div"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.2, ease: "linear", duration: 1, type: "spring" }}
      ></motion.div>
      <div className="mb-4 flex items-center  w-full justify-between ">
        {/* Right section with ButtonFilter components */}
        <div className="flex flex-wrap gap-2 justify-center w-full">
          {buttonFilterContent.map((item) => (
            <ButtonFilter
              key={item}
              text={item}
              active={item === activeFilter}
              setActiveFilter={setActiveFilter}
            />
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 grid-cols-1  gap-4  ">
        {activeFilter === "All" ? (
          <>
            {" "}
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{
                    x: -150,
                    opacity: 0,
                    rotateY: -75,
                    rotateZ: -15,
                    rotateX: -50,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotateY: 0,
                    rotateZ: 0,
                    rotateX: 0,
                    scale: 1,
                    x: 0,
                    ...springAnimation,
                  }}
                  exit={{ opacity: 0, display: "none" }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                  }}
                >
                  <ProjectCard
                    key={project.id}
                    project={project}
                    openOverlay={openOverlay}
                    projectDetailsForOverlay={projectDetailsForOverlay}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </>
        ) : (
          <>
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{
                    x: -150,
                    opacity: 0,
                    rotateY: -75,
                    rotateZ: -15,
                    rotateX: -50,
                    scale: 0.7,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    rotateY: 0,
                    rotateZ: 0,
                    rotateX: 0,
                    scale: 1,
                    ...springAnimation,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1 * 0.2,
                  }}
                >
                  <ProjectCard
                    project={project}
                    openOverlay={openOverlay}
                    projectDetailsForOverlay={projectDetailsForOverlay}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </>
        )}
      </div>
      {projects.length > 8 ? (
        <>
          {" "}
          <div className="pt-8">
            <ButtonRegular text="show more" />
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default MyProjects;
