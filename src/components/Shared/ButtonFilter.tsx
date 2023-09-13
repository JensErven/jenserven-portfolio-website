"use client";
import React from "react";

const ButtonFilter = ({
  text,
  active,
  setActiveFilter,
}: {
  text: string;
  active: boolean;
  setActiveFilter: any;
}) => {
  return (
    <button
      className={`btn ${active ? "selected" : ""} uppercase`}
      style={{
        backgroundColor: active ? "white" : "transparent",
        color: active ? "black" : "white",
        fontWeight: active ? "bolder" : "bolder",
      }}
      onClick={() => setActiveFilter(text)}
    >
      {text}
    </button>
  );
};

export default ButtonFilter;
