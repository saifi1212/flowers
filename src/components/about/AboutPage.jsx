import * as React from "react";
import TextAnimation from "../common/TextAnimation";
import Button from "../common/Button";



function AboutPage() {
  const sections = [
    {
      image: {
        src: "/images/about/expert.png",
        alt: "Expertly crafted bouquet",
      },
      text: {
        title: "Expertly Crafted Bouquets",
        description:
          "At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who carefully select each bloom, ensuring that only the freshest and most stunning flowers make it into our bouquets. We work directly with farms to source the highest quality flowers, and our skilled florists expertly craft each bouquet to perfection.",
      },
    },
    {
      text: {
        title: "Bouquets, Gifts & Ambiance",
        description:
          "In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, and fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers, plants, and gifts should be easy and stress-free, which is why we offer same or next-day delivery throughout Kyiv.",
      },
      image: {
        src: "/images/about/gift.png",
        alt: "Bouquets, gifts and ambiance",
      },
    },
    {
      image: {
        src: "/images/about/special.png",
        alt: "Making every day special",
      },
      text: {
        title: "Making Every Day Special",
        description:
          "Our mission is simple: to make every day special and memorable for our customers. We are dedicated to providing the highest quality flowers, exceptional customer service, and a seamless online experience that will make you feel confident and satisfied with your purchase.Thank you for choosing Kyiv LuxeBouquets. We look forward to bringing joy and happiness to your life with our beautiful bouquets and gifts.",
      },
    },
  ];
  return (
    <section>
      <div className="flex w-full border-b border-[#121212]">
        <div className="py-[150px] max-w-[50%] w-full flex flex-col justify-center items-center ">
          <OurStorySection />
          <SocialMediaLinks />
        </div>
        <img
          src="/images/about/story.png"
          className=" w-full max-h-[720px]"
          alt=""
        />
      </div>
      <div className="border-b border-[#121212]">
        <div className="py-[100px] max-w-[798px] mx-auto">
          <TextAnimation
            title={"Our Founder's Passion "}
            desce={
              "Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska  with the goal of bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always had a passion for flowers and design, and his vision was to create a local floral studio that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets."
            }
            label={"OUR STORY"}
            labelStyles={"mx-auto text-center"}
            titleStyles={"mx-auto text-center"}
            desceStyles={"mx-auto text-center"}
          />
        </div>
      </div>
      <div className="flex flex-col">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`w-full flex ${
              index == 1 ? "flex-row-reverse" : "flex-row"
            } border-b border-[#121212] max-h-[850px]`}
          >
            <img
              src={section.image.src}
              alt={section.image.alt}
              className="w-[50%] "
            />
            <div className="w-[50%] p-[100px]">
              <TextAnimation
                title={section.text.title}
                desce={section.text.description}
                desceStyles={"text-[20px]"}
              />
            </div>
          </div>
        ))}
      </div>
      <CallToAction />
    </section>
  );
}

export default AboutPage;
function OurStorySection() {
    const headings = [
      { text: "Our Story", size: "text-5xl" },
      { text: "About", size: "text-3xl" },
      { text: "Kyiv LuxeBouquets", size: "text-5xl" },
    ];
  
    return (
      <section className="flex flex-col max-w-[513px]">
        <div className="flex flex-col items-center self-center px-5 w-full leading-[60px] max-w-[486px] text-neutral-900 max-md:max-w-full">
          {headings.map((heading, index) => (
            <h2
              key={index}
              className={`${heading.size} max-md:text-4xl ${
                index > 0 ? "mt-6" : ""
              } ${index === 2 ? "self-stretch" : ""} text-center`}
            >
              {heading.text}
            </h2>
          ))}
        </div>
        <p className="mt-6 w-full text-base leading-6 text-center text-neutral-900 text-opacity-90 max-md:max-w-full">
          <span className="text-lg leading-6">
            Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread
            Joy with Our{" "}
          </span>
          <span className="text-lg leading-6">
            Online Flower Delivery Service
          </span>
        </p>
      </section>
    );
  }
  
  const socialMediaLinks = [
    {
      icon: "/icons/insta.svg",
      alt: "Social media icon 1",
    },
    {
      icon: "/icons/pinterest.svg",
      alt: "Social media icon 2",
    },
    {
      icon: "/icons/facebook.svg",
      alt: "Social media icon 3",
    },
    {
      icon: "/icons/twiter.svg",
      alt: "Social media icon 4",
    },
    {
      icon: "/icons/telegram.svg",
      alt: "Social media icon 5",
    },
  ];
  const SocialMediaLinks = () => (
    <div className="flex gap-5 justify-center self-center mt-16 max-md:mt-10">
      {socialMediaLinks.map((link, index) => (
        <div
          key={index}
          className="flex flex-1 justify-center items-center p-3 border border-solid border-neutral-900 rounded-[100px]"
        >
          <img src={link.icon} alt={link.alt} className="w-6 aspect-square" />
        </div>
      ))}
    </div>
  );
  
  const CallToAction = () => (
    <div className="flex flex-col justify-center p-20 w-full  max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col text-center max-md:max-w-full">
        <div className="justify-center text-5xl leading-[60px] text-neutral-900 max-md:max-w-full max-md:text-4xl">
          Discover Our Beautiful Bouquets
        </div>
        <div className="self-center mt-4 text-lg leading-6 text-neutral-900 text-opacity-90 w-[638px] max-md:max-w-full">
          Explore our collection of exquisite bouquets and surprise your loved
          ones with the perfect gift. Click the button below to start shopping
        </div>
      </div>
      <div className="flex flex-col justify-center self-center pt-10 mt-4 max-w-full text-base tracking-wide leading-5 text-white uppercase w-[270px]">
        <Button text={"SHOP NOW"} varient={"primary"} />
      </div>
    </div>
  );