import React from "react";

const Button = ({
  varient,
  name,
  text,
  maxWidth,
  handleClick,
  ...atributes
}) => {
  const getClasses = () => {
    if (varient == "normal") {
      return `w-fit text-[#121212] `;
    } else if (varient == "primary") {
      return `w-full ${maxWidth} text-[#fff] bg-[#121212] hover:bg-[#fff] border border-[#121212] min-h-[56px]`;
    } else if (varient == "secondary") {
      return `w-full ${maxWidth} text-[#fff] bg-transparent hover:bg-[#fff] border border-[#fff] min-h-[56px]`;
    }
  };
  return (
    <button
      {...atributes}
      onClick={handleClick}
      className={`${getClasses()} flex items-center text-[18px] leading-[120%] group duration-200 transition-all ease-in`}
    >
      <p className="overflow-hidden max-h-[24px] w-fit   flex gap-[1px] flex-col mx-auto">
        <span className="group-hover:translate-y-[-24px] translate-y-0 duration-200 transition-all ease-in">
          {text}
        </span>
        <span
          className={`group-hover:translate-y-[-24px]  translate-y-0 ${
            varient == "primary"
              ? "text-[#121212]"
              : varient == "secondary"
              ? "text-[#121212] "
              : "text-[#808080]"
          } duration-200 transition-all ease-in`}
        >
          {text}
        </span>
      </p>
    </button>
  );
};

export default Button;
