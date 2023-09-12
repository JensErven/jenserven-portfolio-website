"use client";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const handleLeftButtonClick = () => {
    console.log(" <- left button click");
  };

  const handleRightButtonClick = () => {
    console.log("right button click ->");
  };

  const buttonStyle = {
    backgroundImage:
      "linear-gradient(to right, #FF512F 0%, #DD2476 51%, #FF512F 100%)",
    padding: "15px 15px",
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",
    borderRadius: "100%",
    display: "inline-block", // Keep it inline to wrap the icons
    cursor: "pointer", // Add cursor pointer for interaction
  };

  return (
    <section className="text-center flex flex-col items-center">
      <h3>Testimonials</h3>
      <h5>Review from clients</h5>
      <div className="underline-div"></div>

      <div className="mt-4  pb-14 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14 rounded-lg">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <div className="testimonials-buttons-container flex flex-row gap-8 items-center">
        <div style={buttonStyle} onClick={handleLeftButtonClick}>
          <FaArrowLeft
            size={25}
            className="carousel-button-left-icon fill-slate-100s fill-slate-100"
          />
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
          <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
          <div className="w-2 h-2 bg-slate-100 rounded-full"></div>
        </div>

        <div style={buttonStyle} onClick={handleRightButtonClick}>
          <FaArrowRight
            size={25}
            className="carousel-button-left-icon fill-slate-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
