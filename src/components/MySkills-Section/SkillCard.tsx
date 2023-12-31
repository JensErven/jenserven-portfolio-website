import { motion } from "framer-motion";
import React from "react";
import {
  FaAndroid,
  FaArrowRight,
  FaHtml5,
  FaJava,
  FaReact,
} from "react-icons/fa";

const SkillCard = ({ skillInfo }: { skillInfo: any }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2, y: 20 }}
      className="text-center  flex flex-col items-center"
    >
      <div
        className="w-14 h-14 bg-slate-900 rounded-full  ease-in-out 1s justify-center items-center flex p-4"
        style={{ boxShadow: "2px 1px 1px #f9a082" }}
      >
        {skillInfo.icon}
      </div>
      <h3 className="mt-2">{skillInfo.title}</h3>
    </motion.div>
  );
};

export default SkillCard;
