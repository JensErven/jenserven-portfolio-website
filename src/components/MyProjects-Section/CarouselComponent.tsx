import {
  faArrowLeft,
  faArrowLeftRotate,
  faArrowRight,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const CarouselComponent = ({
  allMedia,
  category,
}: {
  allMedia: any;
  category: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? allMedia.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === allMedia.length - 1 ? 0 : prevIndex + 1
    );
  };

  function isVideo(url: string) {
    return (
      url.indexOf(".mp4") ||
      url.indexOf(".avi") ||
      url.indexOf(".webm") ||
      url.indexOf(".mkv")
    );
  }

  const getBorderColor = () => {
    // Replace 'category' with the property name in your project object that holds the category value
    // Example: 'Web Development' or 'App Development'

    // Assign different border colors based on categories
    switch (category) {
      case "Web":
        return "border-pink-600";
      case "App":
        return "border-indigo-600";
      case "VR":
        return "border-cyan-400";
      default:
        return "border-stone-200";
    }
  };

  return (
    <div className="carousel-container flex flex-col gap-4 w-full">
      <div className="main-carousel ">
        <div className="carousel-slide main-slide relative">
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 -translate-y-1/2  items-center justify-center  rounded-full bg-slate-900  bg-opacity-50 w-8 h-8 flex flex-row"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              fontSize={20}
              className=" text-stone-200"
            />
          </button>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 items-center justify-center  rounded-full bg-slate-900  bg-opacity-50 w-8 h-8 flex flex-row"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              fontSize={20}
              className=" text-stone-200"
            />
          </button>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-slate-900  bg-opacity-50 rounded-md px-2 text-stone-200">
            <p className="text-stone-200 text-sm">
              {currentIndex + 1} / {allMedia.length}
            </p>
          </div>
          <img
            src={allMedia[currentIndex]}
            alt={`Media ${currentIndex}`}
            className="h-80 object-contain bg-slate-900  bg-opacity-50 w-full rounded-lg"
          />
        </div>
      </div>
      <div className="thumbnails flex flex-row gap-2 w-full overflow-x-auto">
        {allMedia.map((media: string, index: number) => (
          <div
            key={index}
            className={`cursor-pointer w-80 flex items-center justify-center rounded-lg bg-slate-900  bg-opacity-50 ${
              index === currentIndex ? `border-2 ${getBorderColor()}` : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              className="h-20 object-contain rounded-lg"
              src={media}
              alt={`Media ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
