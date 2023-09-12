import React from "react";
import ButtonRegular from "./Shared/ButtonRegular";

const Header = () => {
  return (
    <header className="mt-40">
      <p>
        Hello, <span style={{ color: "#f9a082" }}>my name is</span>
      </p>
      <h1>Jens Erven</h1>
      <h2 className="mb-4">
        I am a <span>Full stack developer</span>
        <br></br>
        From Belgium, Leuven.
      </h2>
      <ButtonRegular text={"My projects"} />
    </header>
  );
};

export default Header;
