import React from "react";

const ShopNow = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="flex text-[18px] leading-[120%] gap-[4px] items-end "
    >
      Shop now
      <svg
        className="group-hover:translate-x-[15px] duration-300 transition-all ease-in-out"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.1397 6L13.6815 7.50351L17 11H3V13H17L13.702 16.5035L15.167 18L21 11.986L15.1397 6Z"
          fill="black"
        />
      </svg>
    </button>
  );
};

export default ShopNow;
