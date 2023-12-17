"use client";
import React, { useState } from "react";
import ButtonHeader from "./ButtonHeader";

const UnderDevelopment = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50 text-center ">
          <div className="bg-slate-900 p-8 rounded-lg shadow-lg text-center  md:w-3/4 lg:w-1/3 w-3/4">
            <h2 className="text-2xl font-semibold mb-4 text-whitesmoke">
              Under Development
            </h2>
            <p className="text-gray-500 mb-4 w-full ">
              Some content may not display correctly. Currently, only mockup
              projects are shown. In the meantime, you can explore one of my
              projects{" "}
              <a
                className="underline font-bold"
                href="https://studionarrata-website.vercel.app/"
              >
                here
              </a>
              !
            </p>
            <button
              onClick={closePopup}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* The rest of your application content */}
    </>
  );
};

export default UnderDevelopment;
