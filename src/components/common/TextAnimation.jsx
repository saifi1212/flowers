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
        <div className={`${labelStyles} text-[18px] overflow-hidden`}>
          <motion.p
            className={` text-[#121212] opacity-90 leading-[120%] duration-500`}
            variants={{
              hidden: {
                opacity: 0,
                y: `${100}%`,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  type: "all",
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
          >
            {label}
          </motion.p>
        </div>
      )}
      <div className="flex flex-col gap-[16px]">
        {title && (
          <div
            className={`${titleStyles}  text-[42px] text-[#121212] overflow-hidden `}
          >
            <motion.h1
              className={`leading-[120%] duration-[0.7s] `}
              variants={{
                hidden: {
                  opacity: 0,
                  y: `${99}%`,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "all",
                    ease: "easeOut",
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
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
                  y: `${100}%`,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "all",
                    ease: "easeOut",
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
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
