import React from "react";
import TextAnimation from "../common/TextAnimation";

const Contact = () => {
  return (
    <div className="flex w-full border-b border-[#121212]">
      <div className="max-w-[50%] w-full ">
        <div className="p-[80px] w-full">
          <TextAnimation
            title={"To Contact Us"}
            titleStyles={"!text-[50px] "}
            desce={"We will call you back"}
            desceStyles={"!text-[#000] !opacity-[1]"}
          />
          <div className="flex gap-[16px] w-full">
            <input type="text" className="outline-none " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
