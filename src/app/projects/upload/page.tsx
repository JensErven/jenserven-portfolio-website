"use client";
import Step1 from "@/components/upload/Step1";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Step2 from "@/components/upload/Step2";
import { uploadProject } from "../../../../db/projects";
import UploadSuccess from "./UploadSuccess";
import Step3 from "@/components/upload/Step3";

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
    websiteUrl: "",
    githubUrl: "",
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
            <div className="btn-steps-container  ">
              {step == 1 && (
                <>
                  <button
                    className="button next-btn px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-700 "
                    onClick={nextStep}
                  >
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
            <div className="btn-steps-container flex flex-row gap-x-4">
              {step == 2 && (
                <>
                  <button
                    className="button next-btn px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-700"
                    onClick={prevStep}
                  >
                    <span className="font-bold text-white ml-2">{" < "}</span>
                    Vorige
                  </button>
                  <button
                    className="button next-btn px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-700 "
                    onClick={nextStep}
                  >
                    Volgende
                    <span className="font-bold text-black ml-2">{" > "}</span>
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
            <Step3 formData={formData} setFormData={setFormData} />
            <div className="btn-steps-container flex flex-row gap-x-4">
              {step == 3 && (
                <>
                  <button
                    className="button next-btn px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-700"
                    onClick={prevStep}
                  >
                    <span className="font-bold text-white ml-2">{" < "}</span>
                    Vorige
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
      case 4:
        return (
          <>
            {" "}
            <UploadSuccess />
          </>
        );
    }
  };
  return (
    <div className="flex flex-col mx-auto w-11/12 md:w-2/4 lg:w-1/3 xl:w-1/3 mt-20 gap-y-4">
      {renderForm()}
    </div>
  );
};

export default page;
