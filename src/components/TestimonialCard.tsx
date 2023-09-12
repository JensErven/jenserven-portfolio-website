import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

const TestimonialCard = () => {
  return (
    <div className="testimonial-card shadow-lg p-4 bg-slate-800 rounded-lg">
      <div className="testimonial-header">
        <FaQuoteLeft className="quote-icon fill-slate-900 mb-4" size={25} />
      </div>
      <p className="testimonial-text">
        Hij heeft uitstekend werk geleverd voor de website Studio Narrata. Alles
        was inorde met een perfect user exerperience en goede database
        structuur.
      </p>
      <div className="testimonial-author text-center items-center flex flex-col">
        <div className="underline-div"></div>
        <h5>Lorem, ipsum.</h5>

        <p>Studio Narrata</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
