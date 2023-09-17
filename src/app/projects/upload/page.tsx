"use client";
import Step1 from "@/components/upload/Step1";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Step2 from "@/components/upload/Step2";
import { uploadProject } from "../../../../db/projects";
import UploadSuccess from "./UploadSuccess";

const page = () => {
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    previewDescription: "",
    longDescription: "",
    category: "",
    skillTags: [],
    thumbnailFile: null,
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await new Promise<void>((resolve) => {
        uploadProject(formData);
      });
      setLoading(false);
      nextStep();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Step1 formData={formData} setFormData={setFormData} />
            <div className="btn-steps-container">
              {step == 1 && (
                <>
                  <button className="button next-btn" onClick={nextStep}>
                    Volgende
                    <span className="font-bold text-black ml-2">{" > "}</span>
                  </button>
                </>
              )}
            </div>
          </>
        );
      case 2:
        return (
          <>
            {" "}
            <Step2 formData={formData} setFormData={setFormData} />
            <div className="btn-steps-container">
              {step == 2 && (
                <>
                  <button className="button next-btn" onClick={prevStep}>
                    Vorige
                    <span className="font-bold text-black ml-2">{" > "}</span>
                  </button>
                  <button
                    disabled={loading ? true : false}
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Bevestig
                  </button>
                </>
              )}
            </div>
          </>
        );
      case 3:
        return (
          <>
            {" "}
            <UploadSuccess />
          </>
        );
    }
  };
  return <div>{renderForm()}</div>;
};

export default page;
