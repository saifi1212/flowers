import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Navigation} from "swiper/modules";
import Button from "../common/Button";

const Reviews = () => {
  const reviews = [
      {
        id: 1,
        quote:
          "Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!",
        author: "Ronald Richards",
      },
      {
        id: 2,
        quote:
          "The flowers I received were absolutely stunning! The arrangement was beautifully crafted and the blooms were so fresh. I couldn't be happier with my purchase!",
        author: "Jane Smith",
      },
      {
        id: 3,
        quote:
          "I've ordered from this flower shop multiple times and have never been disappointed. The quality of their flowers is unmatched and their customer service is top-notch.",
        author: "Michael Johnson",
      },
      {
        id: 4,
        quote:
          "Sending flowers to my loved ones has never been easier. The online ordering process was seamless and the flowers arrived right on time. Thank you for making my gift-giving so effortless!",
        author: "Emily Davis",
      },
      {
        id: 5,
        quote:
          "I was blown away by the creativity and artistry of the floral arrangement I received. It was a true masterpiece and brought so much joy to my home. I can't wait to order again!",
        author: "David Wilson",
      },
    ];
  return (
    <div className="p-[80px] flex flex-col gap-[64px] ">
      <div className="">
        <div className="flex flex-col gap-[8px] mx-auto w-fit">
          <img src="/icons/google.svg" alt="" className="max-w-[87px]" />
          <p className="leading-[120%] text-center">Reviews</p>
        </div>
        <h1 className="text-[50px] w-fit mx-auto mt-[24px]">Our Clients say</h1>
        <div className="mt-[16px]">
          <Swiper
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index + "slide"}>
                <div className="flex flex-col gap-[16px] max-w-[1168px] w-full text-center mx-auto">
                  <p className="text-[28px] leading-[120%] ">{item.quote}</p>
                  <p className="text-[16px] leading-[120%]"> {item.author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button
          text={"Read reviews"}
          maxWidth={"max-w-[166px] mx-auto mt-[64px]"}
          varient={"secondary"}
        />
      </div>
    </div>
  );
};

export default Reviews;
