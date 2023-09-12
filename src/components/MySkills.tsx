"use client";
import Image from "next/image";
import React, { useState } from "react";
import SkillCard from "./SkillCard";
import "../../styles/MySkills.css";
import {
  FaAndroid,
  FaArrowRight,
  FaHtml5,
  FaJava,
  FaReact,
  FaLaravel,
  FaArrowLeft,
  FaPhp,
  FaCss3,
  FaUnity,
} from "react-icons/fa";

const MySkills = () => {
  const skillsInfo = [
    {
      title: "React",
      description:
        "Building dynamic and interactive web applications using React for a seamless user experience.",
      icon: <FaReact size={40} className="fill-cyan-400" />,
    },
    {
      title: "HTML5",
      description:
        "Proficient in HTML5, the foundation of web development, to create structured and accessible web pages.",
      icon: <FaHtml5 size={40} className="fill-red-500" />,
    },
    {
      title: "CSS",
      description:
        "Developing robust web applications with Laravel, focusing on scalability and maintainability.",
      icon: <FaCss3 size={40} className="fill-slate-100" />,
    },
    {
      title: "Laravel",
      description:
        "Developing robust web applications with Laravel, focusing on scalability and maintainability.",
      icon: <FaLaravel size={40} className="fill-slate-100" />,
    },
    {
      title: "Android",
      description:
        "Developing robust web applications with Laravel, focusing on scalability and maintainability.",
      icon: <FaAndroid size={40} className="fill-emerald-500" />,
    },
    {
      title: "Php",
      description:
        "Developing robust web applications with Laravel, focusing on scalability and maintainability.",
      icon: <FaPhp size={40} className="fill-sky-600" />,
    },
    {
      title: "Unity",
      description:
        "Developing robust web applications with Laravel, focusing on scalability and maintainability.",
      icon: <FaUnity size={40} className="fill-slate-100" />,
    },
  ];
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
        <div className=" relative  flex flex-wrap items-center justify-center gap-14 py-14 ">
          {skillsInfo.map((skill, index) => (
            <SkillCard key={index} skillInfo={skill} />
          ))}
        </div>
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
