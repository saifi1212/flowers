import React from "react";
import TextAnimation from "../common/TextAnimation";
import Button from "../common/Button";

const About = () => {
  return (
    <div className="flex w-full border-b border-[#121212] ">
      <div className="py-[80px] pl-[80px] max-w-[50%] w-full border-r border-[#121212]">
        <div className="sticky top-[80px] ">
          <TextAnimation
            title={"About us"}
            titleStyles={"!text-[60px]"}
          />
        </div>
      </div>
      <div className="py-[80px] pl-[80px] max-w-[50%] w-full">
        <div className="max-w-[643px] w-full">
          <TextAnimation
            label={"our story"}
            title={"Kyiv LuxeBouquets"}
            desce={
              "We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier."
            }
          />
        </div>
        <div className="mt-[64px] border-none">
          <Button
            varient={"secondary"}
            maxWidth={"max-w-[175px]"}
            text={"Learn more"}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
