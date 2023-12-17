"use client";
import Step1 from "@/components/upload/Step1";
import React, { useState } from "react";

import Step2 from "@/components/upload/Step2";
import { uploadProject } from "../../../../db/projects";
import UploadSuccess from "./UploadSuccess";
import Step3 from "@/components/upload/Step3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Step4 from "@/components/upload/Step4";

const page = () => {
  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
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
    console.log(formData);
    try {
      await uploadProject(formData); // Await the uploadProject function
      setLoading(false);
      nextStep();
    } catch (error) {
      console.error(error);
      setLoading(false);
      // Handle any potential errors here
    }
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Step1 formData={formData} setFormData={setFormData} />
            <div className="btn-steps-container flex flex-row justify-end ">
              {step == 1 && (
                <>
                  <button
                    className="button next-btn px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-700 "
                    onClick={nextStep}
                  >
                    Volgende
                    <span className="font-bold text-stone-200 ml-2">
                      {" > "}
                    </span>
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
            <div className="btn-steps-container flex flex-row gap-x-4 w-full justify-between">
              {step == 2 && (
                <>
                  <button
                    className="button next-btn px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-700"
                    onClick={prevStep}
                  >
                    <span className="font-bold text-stone-200 ml-2">
                      {" < "}
                    </span>
                    Vorige
                  </button>
                  <button
                    className="button next-btn px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-700 "
                    onClick={nextStep}
                  >
                    Volgende
                    <span className="font-bold text-stone-200 ml-2">
                      {" > "}
                    </span>
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
            <div className="btn-steps-container flex flex-row gap-x-4 w-full justify-between">
              {step == 3 && (
                <>
                  <button
                    className="button next-btn px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-700"
                    onClick={prevStep}
                  >
                    <span className="font-bold text-stone-200 ml-2">
                      {" < "}
                    </span>
                    Vorige
                  </button>
                  <button
                    className="button next-btn px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-700 "
                    onClick={nextStep}
                  >
                    Volgende
                    <span className="font-bold text-stone-200 ml-2">
                      {" > "}
                    </span>
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
            <Step4 formData={formData} setFormData={setFormData} />
            <div className="btn-steps-container flex flex-row gap-x-4 w-full justify-between">
              {step === 4 && (
                <>
                  <button
                    className="button next-btn px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-700"
                    onClick={prevStep}
                  >
                    <span className="font-bold text-stone-200 ml-2">
                      {" < "}
                    </span>
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
      case 5:
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
      {loading ? (
        <div className=" items-center justify-center flex p-8 m-auto animate-spin">
          <FontAwesomeIcon icon={faSpinner} fontSize={80} color="white" />
        </div>
      ) : (
        <> {renderForm()} </>
      )}
    </div>
  );
};

export default page;
