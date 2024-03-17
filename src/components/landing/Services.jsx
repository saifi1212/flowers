import React from "react";
import TextAnimation from "../common/TextAnimation";
import Button from "../common/Button";

const Services = () => {
  return (
    <div className="w-full">
      <div className="py-[80px] w-full flex justify-center border-b border-[#121212] ">
        <TextAnimation titleStyles={"text-[50px]"} title="Our Service" />
      </div>
      <div className="flex w-full ">
        <img
          src="/images/landing/subscription.png"
          alt=""
          className="w-full max-w-[50%] max-h-[720px]"
        />
        <div className="w-full max-w-[50%] border-l border-[#121212] px-[80px] flex-col flex gap-[64px] justify-center items-center ">
          <TextAnimation
            label="service"
            title="Flower Subcriptions"
            desce="Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases."
            labelStyles={"w-full text-center"}
            titleStyles={"w-full text-center text-[50px]"}
            desceStyles={"w-full max-w-[560px] text-center"}
          />
          <Button
            varient={"secondary"}
            maxWidth={"max-w-[183px] mx-auto"}
            text={"Subscribe Now"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
