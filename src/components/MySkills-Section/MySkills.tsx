"use client";
import Image from "next/image";
import React, { useState } from "react";
import SkillCard from "./SkillCard";
import "../../../styles/MySkills.css";
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
  FaAngular,
  FaNodeJs,
} from "react-icons/fa";

const MySkills = () => {
  const skillsInfo = [
    {
      title: "React",
      description:
        "Building dynamic and interactive web applications using React for a seamless user experience.",
      icon: <FaReact size={40} className="fill-[#61DBFB]" />,
    },
    {
      title: "HTML",
      description:
        "Proficient in HTML5, the foundation of web development, to create structured and accessible web pages.",
      icon: <FaHtml5 size={40} className="fill-[#E34F26]" />,
    },
    {
      title: "CSS",
      description:
        "Developing robust web applications with Laravel, focusing on scalability and maintainability.",
      icon: <FaCss3 size={40} className="fill-[#2965f1]" />,
    },
    {
      title: "Laravel",
      description:
        "Developing robust web applications with Laravel, focusing on scalability and maintainability.",
      icon: <FaLaravel size={40} className="fill-[#FF2D20]" />,
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
      icon: <FaPhp size={40} className="fill-[#777BB4]" />,
    },
    {
      title: "Unity",
      description:
        "Developing robust web applications with Laravel, focusing on scalability and maintainability.",
      icon: <FaUnity size={40} className="fill-slate-100" />,
    },
    {
      title: "Angular",
      description:
        "Developing robust web applications with Laravel, focusing on scalability and maintainability.",
      icon: <FaAngular size={40} className="fill-red-500" />,
    },
    {
      title: "NodeJs",
      description:
        "Developing robust web applications with Laravel, focusing on scalability and maintainability.",
      icon: <FaNodeJs size={40} className="fill-[#3C873A]" />,
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
      <h2>
        <span>My skills</span>
      </h2>
      <h3>What skills I have</h3>
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
