"use client";
import React, { useEffect } from "react";
import ButtonFilter from "./Shared/ButtonFilter";
import ProjectCard from "./ProjectCard";
import ButtonRegular from "./Shared/ButtonRegular";
import image from "../../public/images/import & cook img1.png";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const MyProjects = () => {
  const projects = [
    {
      category: "Web Development",
      projectId: 1,
      title: "Group Expense Balancing",
      previewImageUrl: "images/import & cook img1.png",
      previewDescription:
        "This is my first project. I built it using React and Tailwind.",
      skillTags: ["MySQL", "Laravel", "Php", "Docker"],
    },
    {
      category: "Web Development",
      projectId: 2,
      title: "Save & Scraping Recipes",
      previewImageUrl: "images/import & cook img1.png",
      previewDescription:
        "This application allows you to create a personal recipe book by importing recipes from any website or adding your own.",
      skillTags: ["Javascript", "Node.js", "Rest API", "CSS"],
    },
    {
      category: "Mobile App",
      projectId: 3,
      title: "RSCA soccerclub",
      previewImageUrl: "images/import & cook img1.png",
      previewDescription:
        "This is my third project. I built it using Python and Django. This is my third project. I built it using Python and Django. This is my third project. I built it using Python and Django. This is my third project. I built it using Python and Django. This is my third project. I built it using Python and Django. ",
      skillTags: [
        "Android Studio",
        "XML",
        "Kotlin",
        "Rest API",
        "Kotlin",
        "Tailwind",
        "Typescript",
      ],
    },
    {
      category: "Web Development",
      projectId: 4,
      previewImageUrl: "images/import & cook img1.png",
      title: "lending inventory application",
      previewDescription:
        "This is my second project. I built it using Javascript and Node.js.",
      skillTags: ["Vue.js", "Kotlin", "Springboot", "IntelIJ"],
    },
    {
      category: "VR",
      projectId: 5,
      title: "VR courseproject",
      previewImageUrl: "images/import & cook img1.png",
      previewDescription:
        "This is my third project. I built it using Python and Django.",
      skillTags: ["Unity", "C#", "Maya"],
    },
  ];

  const [activeFilter, setActiveFilter] = React.useState("All");
  const [animateProjects, setAnimateProjects] = React.useState([]);
  useEffect(() => {
    if (activeFilter === "All") {
      setAnimateProjects(projects.map((project) => project.projectId));
    } else {
      setAnimateProjects(
        projects
          .filter((project) => project.category === activeFilter)
          .map((project) => project.projectId)
      );
    }
  }, [activeFilter, projects]);

  const buttonFilterContent = ["All", "Web Development", "Mobile App", "VR"];

  useEffect(() => {
    console.log(projects);
  }, []);

  const springAnimation = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  return (
    <section className="text-center flex flex-col items-center  ">
      <h3>My latest projects</h3>
      <h5>See what I can make</h5>
      <motion.div
        className="underline-div"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.2, ease: "linear", duration: 1, type: "spring" }}
      ></motion.div>
      <div className="space-x-2 space-y-2 mb-4">
        {buttonFilterContent.map((item) => (
          <ButtonFilter
            text={item}
            active={item === activeFilter}
            setActiveFilter={setActiveFilter}
          />
        ))}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {activeFilter === "All" ? (
          <>
            {" "}
            <AnimatePresence>
              {projects.map((project) => (
                <motion.div
                  key={project.projectId}
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
                    delay: project.projectId * 0.2,
                  }}
                >
                  <ProjectCard key={project.projectId} project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </>
        ) : (
          <>
            <AnimatePresence>
              {animateProjects.map((projectId) => (
                <motion.div
                  key={projectId}
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
                    delay: projectId * 0.2,
                  }}
                >
                  <ProjectCard
                    project={projects.find(
                      (project) => project.projectId === projectId
                    )}
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
