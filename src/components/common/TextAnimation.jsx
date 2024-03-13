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
  titleY,
  desceY,
  labelY,
}) => {
  return (
    <div className="flex flex-col gap-[24px]">
      {label && (
        <div className={`${labelStyles} text-[42px] overflow-hidden`}>
          <motion.p
            className={` text-[#121212] opacity-90 leading-[120%] duration-500`}
            variants={{
              hidden: {
                opacity: 0,
                y: labelY,
                rotate: 5,
              },
              show: {
                opacity: 1,
                y: 0,
                rotate: 0,
                transition: {
                  type: "all",
                  ease: "easeIn",
                },
              },
            }}
            initial="hidden"
            whileInView="show"
          >
            {label}
          </motion.p>
        </div>
      )}
      <div className="flex flex-col gap-[16px]">
        {title && (
          <div className={`${titleStyles}   text-[#121212] overflow-hidden `}>
            <motion.h1
              className={`leading-[120%] duration-[0.7s] `}
              variants={{
                hidden: {
                  opacity: 0,
                  y: titleY,
                  rotate: 8,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  transition: {
                    type: "all",
                    ease: "easeIn",
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
            >
              {title}
            </motion.h1>
          </div>
        )}
        {desce && (
          <div
            className={`${desceStyles}  text-[18px] text-[#121212] overflow-hidden`}
          >
            <motion.p
              variants={{
                hidden: {
                  opacity: 0,
                  y: desceY,
                  rotate: 6,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  transition: {
                    type: "all",
                    ease: "easeIn",
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              className={`leading-[120%] duration-500`}
            >
              {desce}
            </motion.p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextAnimation;
