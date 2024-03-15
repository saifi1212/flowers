import React from "react";
import TextAnimation from "../common/TextAnimation";
import Button from "../common/Button";

const Why = () => {
  const explanantionData = [
    {
      title: "Stylish bouquets by florists",
      desce:
        "At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.",
    },
    {
      title: "On-time delivery",
      desce:
        "Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.",
    },
    {
      title: "Safe payment",
      desce:
        "You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.",
    },
    {
      title: "Subscription by your needs",
      desce:
        "With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.",
    },
  ];
  return (
    <div className="flex w-full border-b border-[#121212]">
      <div className="py-[80px] pl-[80px] max-w-[50%] w-full border-r border-[#121212]">
        <div className="sticky top-[80px] ">
          <TextAnimation
            title={"Why choose us ?"}
            titleStyles={"!text-[60px]"}
          />
        </div>
      </div>
      <div className="max-w-[50%] w-full">
    {explanantionData.map((item,index)=>(
    <div key={index+"explanation"} className={`${index!=explanantionData.length-1&&"border-b border-[#121212]"} py-[80px] pl-[80px]  w-full`}>
        <div className="max-w-[643px] w-full">
          <TextAnimation
            title={item.title}
            desce={item.desce}
          />
        </div>
      </div>))}
      </div>
    </div>
  );
};

export default Why;
