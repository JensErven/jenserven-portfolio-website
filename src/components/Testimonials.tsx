"use client";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      client: "Alice Johnson",
      quote:
        "Exceptional work! Our project was a great success thanks to the team at Studio Narrata.",
      project: "E-commerce Website",
    },
    {
      client: "John Smith",
      quote:
        "Studio Narrata delivered exactly what we needed. Their attention to detail is commendable.",
      project: "Mobile App Development",
    },
    {
      client: "Sarah Davis",
      quote:
        "We couldn't be happier with the results. Studio Narrata is a top-notch development partner.",
      project: "Custom Software Solution",
    },

    // Add your testimonial data here
  ];

  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleLeftButtonClick = () => {
    setSelectedCardIndex(selectedCardIndex - 1);
  };

  const handleRightButtonClick = () => {
    setSelectedCardIndex(selectedCardIndex + 1);
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

  useEffect(() => {
    // Check the window width and set isMobile accordingly
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Define your mobile breakpoint
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile); // Add resize listener

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    // Ensure selected card index is within bounds
    if (selectedCardIndex < 0) {
      setSelectedCardIndex(testimonials.length - 1);
    } else if (selectedCardIndex >= testimonials.length) {
      setSelectedCardIndex(0);
    }
  }, [selectedCardIndex, testimonials]);

  return (
    <section className="text-center flex flex-col items-center">
      <h3>Testimonials</h3>
      <h5>Review from clients</h5>
      <div className="underline-div"></div>

      <div
        className={`mt-4 pb-14 ${
          isMobile ? "w-full" : "grid grid-cols-3 gap-x-4 gap-y-14"
        }`}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card-container ${
              isMobile && selectedCardIndex !== index ? "hidden" : ""
            }`}
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>

      <div
        className={`testimonials-buttons-container flex flex-row gap-8 items-center ${
          !isMobile ? "hidden" : "visible"
        }`}
      >
        <div style={buttonStyle} onClick={handleLeftButtonClick}>
          <FaArrowLeft
            size={25}
            className="carousel-button-left-icon fill-slate-100s fill-slate-100"
          />
        </div>
        <div className="flex flex-row gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === selectedCardIndex ? "bg-slate-100" : "bg-slate-800"
              }`}
            ></div>
          ))}
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
