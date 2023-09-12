import React from "react";

const ButtonRegular = ({ text }: { text: string }) => {
  return (
    <button className="btn-grad" type="button">
      {text}
    </button>
  );
};

export default ButtonRegular;
