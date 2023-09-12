import React from "react";
import ButtonFilter from "./Shared/ButtonFilter";
import ProjectCard from "./ProjectCard";

const MyProjects = () => {
  const buttonFilterContent = ["All", "Web Development", "Mobile App", "VR"];
  return (
    <section className="text-center flex flex-col items-center ">
      <h3>My latest projects</h3>
      <h5>See what I can make</h5>
      <div className="underline-div"></div>
      <div className="space-x-2 space-y-2 mb-4">
        {buttonFilterContent.map((item) => (
          <ButtonFilter text={item} key={item} />
        ))}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default MyProjects;
