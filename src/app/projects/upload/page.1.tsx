"use client";
import { useState } from "react";

export const page = () => {
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
      setMessage("");
    },
    {
      setMessage,
    };
  ("Niet alle velden zijn correct ingevuld. Controleer deze even...");
};
