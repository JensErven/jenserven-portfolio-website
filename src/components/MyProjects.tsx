"use client";
import React, { useEffect } from "react";
import ButtonFilter from "./Shared/ButtonFilter";
import ProjectCard from "./ProjectCard";
import ButtonRegular from "./Shared/ButtonRegular";

const MyProjects = () => {
  const projects = [
    {
      category: "Web Development",
      projectId: 1,
      title: "Group Expense Balancing",
      previewDescription:
        "This is my first project. I built it using React and Tailwind.",
      skillTags: ["MySQL", "Laravel", "Php", "Docker"],
    },
    {
      category: "Web Development",
      projectId: 2,
      title: "Save & Scraping Recipes",
      previewDescription:
        "This is my second project. I built it using Javascript and Node.js.",
      skillTags: ["Javascript", "Node.js", "Rest API", "CSS"],
    },
    {
      category: "Mobile App",
      projectId: 3,
      title: "RSCA soccerclub",
      previewDescription:
        "This is my third project. I built it using Python and Django. This is my third project. I built it using Python and Django. This is my third project. I built it using Python and Django. This is my third project. I built it using Python and Django. This is my third project. I built it using Python and Django. ",
      skillTags: ["Android Studio", "XML", "Kotlin", "Rest API"],
    },
    {
      category: "Web Development",
      projectId: 4,
      title: "lending inventory application",
      previewDescription:
        "This is my second project. I built it using Javascript and Node.js.",
      skillTags: ["Vue.js", "Kotlin", "Springboot", "IntelIJ"],
    },
    {
      category: "VR",
      projectId: 5,
      title: "VR courseproject",
      previewDescription:
        "This is my third project. I built it using Python and Django.",
      skillTags: ["Unity", "C#", "Maya"],
    },
  ];

  const buttonFilterContent = ["All", "Web Development", "Mobile App", "VR"];
  const [activeFilter, setActiveFilter] = React.useState("All");
  useEffect(() => {
    console.log(projects);
  }, []);
  return (
    <section className="text-center flex flex-col items-center ">
      <h3>My latest projects</h3>
      <h5>See what I can make</h5>
      <div className="underline-div"></div>
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
            {projects.map((project) => (
              <ProjectCard key={project.projectId} project={project} />
            ))}
          </>
        ) : (
          <>
            {" "}
            {projects
              .filter((project) => project?.category === activeFilter)
              .map((project) => (
                <ProjectCard key={project.projectId} project={project} />
              ))}
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
