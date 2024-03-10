import React from "react";
import DataMaping from "./DataMaping";

const AboutUs = () => {
  const AboutData = [
    {
      title: "Our story",
      link: "/story",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Shipping & returns",
      link: "",
    },
    {
      title: "Terms & conditions",
      link: "/terms-conditions",
    },
    {
      title: "Privacy policy",
      link: "/privacy-policy",
    },
  ];
  return (
    <div className="max-w-[25%] w-full flex flex-col gap-[24px] min-h-[430px] max-h-[430px] p-[40px]  border-t  border-[#121212]">
      <div className="flex flex-col gap-[24px]">
        <h4 className="text-[23px] leading-[120%] text-[#808080] ">Shop</h4>
        <DataMaping data={AboutData} />
      </div>
    </div>
  );
};

export default AboutUs;
