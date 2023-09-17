"use client";
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
    <div className="steps-container step1">
      {" "}
      <h3>Stap 1: Inleiding</h3>
      <div className="step-content">
        <label>
          <p>Titel van project:</p>
        </label>
        <input
          placeholder="vb. naam van de app/website"
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
      <div className="step-content">
        <label htmlFor="Previewdescription">
          <p>preview description:</p>{" "}
        </label>
        <textarea
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
          <p> Category:</p>
        </label>
        <select
          className="capitalize"
          value={formData.genre}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          id="category"
        >
          <option value="">Selecteer category</option>

          <option value="Web Development">Web Development</option>
          <option value="Web Development">Mobile App</option>
          <option value="Web Development">VR</option>
        </select>
      </div>
      <div className="step-content">
        <label>
          <p>Skill tags:</p>
        </label>
        <div>
          <input
            placeholder="vb. javascript, node.js"
            type="text"
            value={newSkill}
            onChange={handleSkillInputChange}
          />
          <button onClick={handleAddSkill}>Add</button>
        </div>
        <div>
          {formData.skillTags.map((skill: string, index: number) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step1;
