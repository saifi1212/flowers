import React from "react";
import TextAnimation from "../common/TextAnimation";
import Button from "../common/Button";

const Contact = () => {
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
    <div className="flex w-full border-b border-[#121212]">
      <div className="max-w-[50%] w-full border-r border-[#121212]">
        <div className="p-[80px] w-full">
          <TextAnimation
            title={"To Contact Us"}
            titleStyles={"!text-[50px] "}
            desce={"We will call you back"}
            desceStyles={"!text-[#000] !opacity-[1]"}
          />
          <div className="flex gap-[16px] mt-[16px] w-full">
            <input
              type="text"
              className="outline-none max-w-[272px] w-full border-[#D2D2D7] border min-h-[56px] placeholder:text-[#808080] text-[14px] leading-[120%] pl-[16px]"
              placeholder="+380 XX XXX XX XX"
            />
            <Button
              varient="primary"
              text="book a call "
              maxWidth="max-w-[272px]"
            />
          </div>
        </div>
        <div className="flex w-full">
          <div className="max-w-[50%] w-full">
            <div className="w-full py-[16px] flex justify-center border-y border-r border-[#121212]">
              <h1 className="text-[38px] leading-[120%]">Phone</h1>
            </div>
            <div className="w-full min-h-[312px] border-r border-[#121212] flex flex-col gap-[24px] justify-center items-center">
              <div className="flex gap-[4px] items-end">
                <img src="/icons/call.svg" alt="" />
                <p className="leading-[120%]">+380980099777</p>
              </div>
              <div className="flex gap-[4px] items-end">
                <img src="/icons/call.svg" alt="" />
                <p className="leading-[120%]">+380980099111</p>
              </div>
            </div>
          </div>
          <div className="max-w-[50%] w-full">
            <div className="w-full py-[16px] border-y flex justify-center border-[#121212]">
              <h1 className="text-[38px] leading-[120%]">Address</h1>
            </div>
            <div className="w-full min-h-[312px] flex flex-col gap-[24px] justify-center items-center">
              <div className="flex gap-[4px] items-end">
                <p className="leading-[120%]">opening hours: 8 to 11 p.m.</p>
              </div>
              <div className="flex gap-[4px] items-end">
                <img src="/icons/location.svg" alt="" />
                <p className="leading-[120%]">
                  15/4 Khreshchatyk Street, Kyiv{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[50%] w-full relative">
        <img
          src="/images/landing/shop.png"
          alt=""
          className="w-full max-h-[720px]"
        />
        <div className="w-full flex min-h-[78px] absolute bottom-0 bg-[#fff] ">
          <div className="w-full max-w-[50%] py-[16px] flex justify-center  border-r border-[#121212]">
            <h1 className="text-[38px] leading-[120%]">Follow us</h1>
          </div>
          <div className="flex w-full max-w-[50%] items-center gap-[32px] justify-center">
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
    </div>
  );
};

export default Contact;
