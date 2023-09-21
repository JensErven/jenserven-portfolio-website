"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Step1 = ({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const handlePreviewDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const inputPreviewDescription = e.target.value;
    setFormData({ ...formData, previewDescription: inputPreviewDescription });
  };

  const [newSkill, setNewSkill] = useState(""); // Step 1: State for skill input

  const handleSkillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSkill(e.target.value);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      // Step 2: Add skill to the array
      setFormData({
        ...formData,
        skillTags: [...formData.skillTags, newSkill.trim().toLowerCase()],
      });
      setNewSkill(""); // Clear the input field
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
          <label htmlFor="Previewdescription">
            <p className="text-white capitalize">preview description:</p>
          </label>
          <textarea
            className="w-full px-3 py-2 text-white bg-slate-800 rounded"
            style={{ minHeight: "4em" }}
            placeholder="Over wat gaat dit project?"
            value={formData.previewDescription}
            onChange={handlePreviewDescriptionChange}
            maxLength={450}
            id="Previewdescription"
          />
        </div>
        <div className="step-content">
          <label htmlFor="Category">
            <p className="text-white  capitalize">category:</p>
          </label>
          <select
            className="w-full px-3 py-2 text-white bg-slate-800 rounded capitalize"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            id="category"
          >
            <option value="">selecteer category</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App">Mobile App</option>
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
              placeholder="vb. javascript, node.js"
              type="text"
              value={newSkill}
              onChange={handleSkillInputChange}
            />
            <button
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none"
              onClick={handleAddSkill}
            >
              Add
            </button>
          </div>
          <div className="mt-2 ">
            {formData.skillTags.map((skill: string, index: number) => (
              <motion.span
                key={index}
                className="skill-tag inline-block bg-gray-300 text-gray-700 rounded-full px-2 py-1 text-xs font-semibold m-1"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
