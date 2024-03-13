import React from "react";
import TextAnimation from "../common/TextAnimation";
import ShopNow from "../common/ShopNow";

const Hero = () => {
  const categoryData = [
    {
      name: "Fresh Flowers",
      src: "/images/landing/fresh-flowers.png",
    },
    {
      name: "Dried Flowers",
      src: "/images/landing/dry-flowers.png",
    },
    {
      name: "Live Plants ",
      src: "/images/landing/live-plants.png",
    },
    {
      name: "Aroma Candels",
      src: "/images/landing/aroma-candels.png",
    },
    {
      name: "Fresheners",
      src: "/images/landing/fresheners.png",
    },
  ];
  return (
    <div className="w-full flex ">
      <div className="max-w-[50%] sticky top-[80px] w-full h-fit border-b  border-[#121212] p-[80px] flex flex-col gap-[24px] ">
        <div className="pb-[88px] border-b border-[#121212]">
          <TextAnimation
            title={"Kyiv LuxeBouquets®"}
            desce={
              "Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service"
            }
            titleStyles={"text-[67px] max-w-[500px] max-h-[160px] "}
            desceStyles={"text-[22px] max-h-[53px]"}
            titleY={170}
            desceY={70.7}
          />
        </div>
        <div className="flex gap-[24px]">
          <img
            src="/images/landing/joy.png"
            alt=""
            className="w-full max-h-[298px]"
          />
          <div className="pl-[24px] border-l min-h-[298px] max-h-[298px] border-[#121212] h-full flex items-end">
            <TextAnimation
              desce={
                "Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today."
              }
              desceStyles={"text-[18px] opacity-90 max-h-[65px]"}
              desceY={85}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[50%] w-full ">
        {categoryData.map((item, index) => (
          <div
            key={index + "category"}
            className={`flex group w-full ${
              index != categoryData.length - 1 && "border-b"
            } ${
              index == 1 || index == 3 ? "flex-row-reverse" : "flex-row"
            } border-l border-[#121212]`}
          >
            <div className="relative flex border-r border-[#121212] items-end justify-center w-full max-w-[50%] min-h-[400px] max-h-[400px] pb-[24px] ">
              <ShopNow />
              <h1 className="text-[38px] leading-[120%] absolute inset-0 m-auto h-fit w-fit">
                {item.name}
              </h1>
            </div>
            <div className="w-full max-w-[50%] overflow-hidden min-h-[400px] max-h-[400px] cursor-pointer">
              <img
                src={item.src}
                className="w-full h-full group-hover:scale-[1.25] duration-[0.4s] transition-all ease-in-out"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
