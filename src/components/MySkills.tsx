"use client";
import Image from "next/image";
import React, { useState } from "react";
import SkillCard from "./SkillCard";
import "../../styles/MySkills.css";

const MySkills = () => {
  const [rotation, setRotation] = useState(0);

  // Function to handle button clicks and update the rotation
  const handleButtonClick = (angle: number) => {
    setRotation(angle);
  };

  // Define the number of buttons and calculate the angle between them
  const numButtons = 8; // You can change this as needed
  const angleBetweenButtons = (2 * Math.PI) / numButtons; // Convert to radians
  return (
    <section className="text-center flex flex-col items-center">
      <h3>My Skills</h3>
      <h5>What skills I have</h5>
      <div className="underline-div"></div>
      <div className="relative w-full rounded-lg">
        <div
          className="mt-4 px-24 py-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-14 rounded-lg shadow-xl"
          style={{ backgroundColor: "#242e47" }}
        ></div>
      </div>
    </section>
  );
};

export default MySkills;
/*      <div
        className="mt-4 px-24 py-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-14 rounded-lg shadow-xl"
        style={{ backgroundColor: "#242e47" }}
      >
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>*/
