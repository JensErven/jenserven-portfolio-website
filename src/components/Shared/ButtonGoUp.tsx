import React from "react";
import { FaCaretUp } from "react-icons/fa";

const ButtonGoUp = () => {
  return (
    <a
      href="#navbar"
      id="goUp-component"
      className="right-4 bottom-4 fixed z-[100]"
    >
      <button className="goUP-button items-center justify-center ">
        <FaCaretUp size={30} fill={"white"} />
      </button>
    </a>
  );
};

export default ButtonGoUp;
