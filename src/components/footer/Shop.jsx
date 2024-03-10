import React from "react";
import DataMaping from "./DataMaping";

const Shop = () => {
  const shopData = [
    {
      title: "All Products",
      link: "/shop",
    },
    {
      title: "Fresh Flowers",
      link: "/shop/fresh-flowers",
    },
    {
      title: "Dried Flowers",
      link: "/shop/dried-flowers",
    },
    {
      title: "Live Plants",
      link: "/shop/live-plants",
    },
    {
      title: "Aroma Candles",
      link: "/shop/aroma-candles",
    },
    {
      title: "Freshener Diffuser",
      link: "/shop/freshener",
    },
  ];
  const ServicesData = [
    {
      title: "Flower Subcription",
      link: "/subcription",
    },
    {
      title: "Wedding & Event Decor",
      link: "",
    },
  ];
  return (
    <div className="max-w-[25%] w-full flex flex-col gap-[24px] min-h-[430px] max-h-[430px] p-[40px]  border-t border-r border-[#121212]">
      <div className="flex flex-col gap-[24px]">
        <h4 className="text-[23px] leading-[120%] text-[#808080] ">Shop</h4>
        <DataMaping data={shopData} />
      </div>
      <div className="flex flex-col gap-[24px]">
        <h4 className="text-[23px] leading-[120%] text-[#808080] ">Service</h4>
        <DataMaping data={ServicesData} />
      </div>
    </div>
  );
};

export default Shop;
