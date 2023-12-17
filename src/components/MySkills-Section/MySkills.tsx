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

      icon: <FaReact size={40} className="fill-[#61DBFB]" />,
    },
    {
      title: "HTML",

      icon: <FaHtml5 size={40} className="fill-[#E34F26]" />,
    },
    {
      title: "CSS",

      icon: <FaCss3 size={40} className="fill-[#2965f1]" />,
    },
    {
      title: "Laravel",

      icon: <FaLaravel size={40} className="fill-[#FF2D20]" />,
    },
    {
      title: "Android",

      icon: <FaAndroid size={40} className="fill-emerald-500" />,
    },
    {
      title: "Php",

      icon: <FaPhp size={40} className="fill-[#777BB4]" />,
    },
    {
      title: "Unity",

      icon: <FaUnity size={40} className="fill-slate-100" />,
    },
    {
      title: "Angular",

      icon: <FaAngular size={40} className="fill-red-500" />,
    },
    {
      title: "NodeJs",

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
        <div className=" relative  flex flex-wrap items-center justify-center gap-14 py-8 ">
          {skillsInfo.map((skill, index) => (
            <SkillCard key={index} skillInfo={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
