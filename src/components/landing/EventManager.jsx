import React from "react";
import TextAnimation from "../common/TextAnimation";
import Button from "../common/Button";

const EventManager = () => {
  return (
    <div className="relative w-full min-h-[900px] flex flex-col gap-[64px]">
      <img
        src="/images/landing/background.png"
        className="absolute w-full h-full"
        alt=""
      />
      <div className="w-full my-auto flex-col flex gap-[64px] justify-center items-center ">
        <TextAnimation
          label="service"
          title="Wedding & Event Decor"
          desce="Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life."
          labelStyles={"w-full text-center !text-[#fff]"}
          titleStyles={"w-full text-center text-[50px] !text-[#fff]"}
          desceStyles={"w-full max-w-[560px] text-center !text-[#fff]"}
        />
        <Button
          maxWidth={"max-w-[183px] mx-auto z-[3]"}
          text={"Subscribe Now"}
          varient="transparent"
        />
      </div>
    </div>
  );
};

export default EventManager;
