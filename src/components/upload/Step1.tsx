"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
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
} from "react-icons/fa";

const Step1 = ({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const skillsWithIcons = [
    { name: "React", icon: FaReact, color: "#61DBFB" },
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3, color: "#2965f1" },
    { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
    { name: "Android", icon: FaAndroid, color: "#3DDC84" },
    { name: "Php", icon: FaPhp, color: "#777BB4" },
    { name: "Unity", icon: FaUnity, color: "#000000" },
    { name: "Angular", icon: FaAngular, color: "#DD0031" },
    { name: "NodeJs", icon: FaNodeJs, color: "#3C873A" },
    { name: "Vue.js", icon: FaVuejs, color: "#4FC08D" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#563D7C" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Swift", icon: FaSwift, color: "#FFAC45" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Git", icon: FaGit, color: "#F05032" },
    { name: "Sass", icon: FaSass, color: "#CC6699" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
  ];
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputDescription = e.target.value;
    setFormData({ ...formData, description: inputDescription });
  };

  const [newSkill, setNewSkill] = useState(""); // Step 1: State for skill input
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);

  const handleSkillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputSkill = e.target.value;
    setNewSkill(inputSkill);

    const filteredSkills = skillsWithIcons
      .map((skill) => skill.name)
      .filter((skill) =>
        skill.toLowerCase().includes(inputSkill.toLowerCase())
      );

    setSuggestedSkills(filteredSkills);
  };

  const handleAddSkill = (selectedSkill: string) => {
    const selectedSkillData = skillsWithIcons.find(
      (skill) => skill.name === selectedSkill
    );

    if (selectedSkillData) {
      setFormData({
        ...formData,
        skillTags: [
          ...formData.skillTags,
          {
            name: selectedSkill,
            icon: selectedSkillData.icon,
            color: selectedSkillData.color,
          },
        ],
      });

      setNewSkill("");
      setSuggestedSkills([]);
    }
  };

  return (
    <div className="rounded-lg  p-4 bg-slate-900 shadow-inner shadow-slate-700">
      <div className=" rounded-lg  text-left  flex flex-col gap-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-whitesmoke text-center">
          Step 1: Inleiding
        </h2>
        <div className="step-content">
          <label>
            <p className="text-white">Titel van project:</p>
          </label>
          <input
            required
            className="w-full px-3 py-2 text-white bg-slate-800 rounded"
            placeholder="vb. naam van de app/website"
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className="step-content">
          <label>
            <p className="text-white">Ondertitels van project:</p>
          </label>
          <input
            required
            className="w-full px-3 py-2 text-white bg-slate-800 rounded"
            placeholder="vb. extra technologies, type of website/app service"
            type="text"
            value={formData.subtitle}
            onChange={(e) =>
              setFormData({ ...formData, subtitle: e.target.value })
            }
          />
        </div>
        <div className="step-content">
          <label htmlFor="Previewdescription">
            <p className="text-white capitalize">description:</p>
          </label>
          <textarea
            required
            className="w-full px-3 py-2 text-white bg-slate-800 rounded"
            style={{ minHeight: "4em" }}
            placeholder="Over wat gaat dit project?"
            value={formData.description}
            onChange={handleDescriptionChange}
            id="Previewdescription"
          />
        </div>
        <div className="step-content">
          <label htmlFor="Category">
            <p className="text-white  capitalize">category:</p>
          </label>
          <select
            required
            className="w-full px-3 py-2 text-white bg-slate-800 rounded capitalize"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            id="category"
          >
            <option value="">selecteer category</option>
            <option value="Web">Web</option>
            <option value="App">App</option>
            <option value="VR">VR</option>
          </select>
        </div>
        <div className="step-content">
          <label>
            <p className="text-white capitalize">skill tags:</p>
          </label>
          <div className="flex items-center">
            <input
              className="w-full px-3 py-2 text-white bg-slate-800 rounded mr-2"
              placeholder="e.g., javascript, node.js"
              type="text"
              value={newSkill}
              onChange={handleSkillInputChange}
            />
            <button
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none"
              onClick={() => handleAddSkill(newSkill)}
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex flex-wrap">
            {formData.skillTags.map((skill: any, index: number) => (
              <motion.span
                key={index}
                className="skill-tag   bg-slate-800 text-stone-200 rounded-full px-2 py-1 text-xs font-semibold m-1 flex flex-row items-center justify-center gap-2"
              >
                {React.createElement(skill.icon, {
                  size: 20,
                  color: skill.color,
                })}{" "}
                {skill.name}
              </motion.span>
            ))}
          </div>
          {/* Display suggestions */}
          <div className="mt-2">
            {suggestedSkills.map((suggestedSkill, index) => (
              <div
                key={index}
                className="cursor-pointer text-blue-500 hover:text-blue-700"
                onClick={() => handleAddSkill(suggestedSkill)}
              >
                {suggestedSkill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
