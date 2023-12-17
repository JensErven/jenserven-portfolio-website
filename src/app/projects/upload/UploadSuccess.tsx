import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";

const UploadSuccess = () => {
  return (
    <div className="steps-container step2 flex flex-col items-center justify-center bg-slate-800 rounded-md gap-2 ">
      <h3>Upload gelukt!</h3>
      <hr className=" border-1 border-slate-500 border w-full"></hr>
      <div>
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="text-green-500"
          fontSize={40}
        />
      </div>
      <Link href={"/"} className="bg-white mb-4 rounded-md p-4">
        Ga naar startscherm
      </Link>
    </div>
  );
};

export default UploadSuccess;
