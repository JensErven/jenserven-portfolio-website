import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div
      className="testimonial-card shadow-lg px-4 py-6  rounded-lg"
      style={{ backgroundColor: "#242e47" }}
    >
      <div className="testimonial-header">
        <FaQuoteLeft className="quote-icon fill-slate-900 mb-4" size={25} />
      </div>
      <p className="testimonial-text">{testimonial.quote}</p>
      <div className="testimonial-header  text-right">
        <FaQuoteRight
          className="quote-icon fill-slate-900 mb-4"
          size={25}
          style={{ marginLeft: "auto" }} // Add this style to push it to the right
        />
      </div>

      <div className="testimonial-author text-center items-center flex flex-col">
        <div className="testimonial-underline-div"></div>
        <h3> {testimonial.client}</h3>
        <p>
          <span>{testimonial.project}</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
