import React from "react";
import { motion } from "framer-motion";
import { textReveal } from "../../utilis/motion";

const TextAnimation = ({
  label,
  title,
  desce,
  labelStyles,
  titleStyles,
  desceStyles,
}) => {
  return (
    <div className="flex flex-col gap-[24px]">
      {label && (
        <motion.p
          className={`${
            labelStyles || "text-[#121212] opacity-90"
          } leading-[120%] duration-500`}
          variants={textReveal}
          initial="hidden"
          whileInView="show"
        >
          {label}
        </motion.p>
      )}
      <div className="flex flex-col gap-[16px]">
        {title && (
          <motion.h1
            className={`${
              titleStyles || "text-[42px]  text-[#121212]"
            } leading-[120%] duration-[0.4s]`}
            variants={textReveal}
            initial="hidden"
            whileInView="show"
          >
            {title}
          </motion.h1>
        )}
        {desce && (
          <motion.p
            variants={textReveal}
            initial="hidden"
            whileInView="show"
            className={`${
              desceStyles || "text-[18px] text-[#121212]"
            }  leading-[120%] duration-500`}
          >
            {desce}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default TextAnimation;
