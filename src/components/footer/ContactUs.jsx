import React from "react";
import Button from "../common/Button";

const ContactUs = () => {
  const contactInfo = [
    {
      title: "Address",
      desce: "15/4 Khreshchatyk Street, Kyiv ",
    },
    {
      title: "Phone",
      desce: "+380980099777",
    },
    {
      title: "General Enquiry:",
      desce: "Kiev.Florist.Studio@gmail.com",
    },
  ];
  const platforms = [
    {
      imgSrc: "/icons/insta.svg",
      link: "https://www.instagram.com/",
    },
    {
      imgSrc: "/icons/pinterest.svg",
      link: "https://www.pinterest.com/",
    },
    {
      imgSrc: "/icons/facebook.svg",
      link: "https://www.facebook.com/",
    },
    {
      imgSrc: "/icons/twiter.svg",
      link: "https://twitter.com/?lang=en",
    },
    {
      imgSrc: "/icons/telegram.svg",
      link: "https://telegram.org/",
    },
  ];
  return (
    <div className="max-w-[25%] w-full flex flex-col gap-[24px] min-h-[430px] max-h-[430px] p-[40px]  border-t border-r border-[#121212]">
      <div className="flex flex-col gap-[24px]">
        <h4 className="text-[23px] leading-[120%] text-[#808080] ">
          Contact Us
        </h4>
        {contactInfo.map((item, index) => (
          <div key={index + "info"} className="flex-col flex gap-[8px]">
            <h3 className=" leading-[120%] text-[#808080] ">{item.title}</h3>

            <Button varient="normal" text={item.desce} />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-[24px]">
        <h4 className="text-[23px] leading-[120%] text-[#808080] ">
          Follow Us
        </h4>
        <div className="flex items-center gap-[32px]">
          {platforms.map((item, index) => (
            <a href={item.link} target="_blank">
              <img
                width={32}
                height={32}
                key={index + "platforms"}
                src={item.imgSrc}
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
