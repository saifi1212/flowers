import React from "react";
import Button from "./Button";

const Header = () => {
  const initialLinks = [
    {
      text: "Home",
      link: "",
    },
    {
      text: "Shop",
      link: "shop",
    },
    {
      text: "Contact Us",
      link: "contact-us",
    },
  ];
  const lastLinks = [
    {
      text: "Sign in",
      link: "sign-in",
    },
    {
      text: "Cart",
      link: "cart",
    },
  ];
  return (
    <header className="flex sticky z-[2] top-0 justify-between bg-[#fff] min-h-[83px] max-h-[83px] border-b border-[#121212]">
      <div className="flex max-w-[540px] w-full ">
        {initialLinks.map((item, index) => (
          <div
            key={index + "initial"}
            className={` items-center min-h-[83px] border-r w-full border-[#121212] flex justify-center`}
          >
            <Button varient="normal" text={item.text} name={item.link} />
          </div>
        ))}
      </div>
      <div className="flex max-w-[360px] w-full ">
        {lastLinks.map((item, index) => (
          <div
            key={index + "initial"}
            className={` items-center min-h-[83px] border-l w-full border-[#121212] flex justify-center`}
          >
            <Button varient="normal" text={item.text} name={item.link} />
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
