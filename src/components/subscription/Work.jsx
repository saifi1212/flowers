import * as React from "react";
import TextAnimation from "../common/TextAnimation";

function HowItWorks() {
  const steps = [
    {
      title: "Choose a plan",
      description:
        "Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.",
    },
    {
      title: "Frequency and Duration",
      description:
        "Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences.",
    },
    {
      title: "Pay once",
      description:
        "After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones",
    },
  ];

  return (
    <section className="flex w-full">
      <div className="flex flex-col max-w-[50%] w-full p-[80px]">
      
        <TextAnimation title={"How does it work?"} titleStyles={"text-[50px]"}/>

      </div>
      <div className="flex flex-col  max-w-[50%] w-full">
        <div className="flex flex-col grow max-md:max-w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col p-20 border-b border-l border-solid border-neutral-900 max-md:px-5 max-md:max-w-full"
            >
              {/* <h3 className="text-4xl leading-10 text-neutral-900 max-md:max-w-full">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-6 text-neutral-900 text-opacity-90 max-md:max-w-full">
                {step.description}
              </p> */}
              <TextAnimation title={step.title} desce={step.description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
