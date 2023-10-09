import React from "react";
import { FaCaretDown } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-full h-20 flex justify-between py-4" id="navbar">
      <div className="h-full w-14 rounded-md  flex items-center justify-center">
        <img
          src={`/images/android-chrome-512x512.png`}
          alt="Logo"
          className="src"
        />
      </div>
      <div className="flex flex-row gap-2 ">
        <a href="#contact-section" className="h-full">
          <button className="text-white border border-solid-white rounded-md  secondary-button h-full">
            Contact me
          </button>
        </a>{" "}
        <button className="flex flex-row items-center text-white border border-solid-white h-full  rounded-md gap-2  secondary-button">
          EN
          <FaCaretDown size={15} fill={"white"} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
