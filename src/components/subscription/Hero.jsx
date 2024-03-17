import * as React from "react";
import Button from "../common/Button";
import TextAnimation from "../common/TextAnimation";

function Hero() {
  const subscriptionTypes = [
    {
      title: "For Yourself",
      description:
        "The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!",
    },
    {
      title: "As a Gift",
      description:
        "Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing.",
    },
    {
      title: "For Business",
      description:
        "Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part.",
    },
  ];

  return (
    <section>
      <div className="flex w-full border-b  border-[#121212]">
        <div className="flex flex-col  max-w-[50%] w-full max-h-[720px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eaa850747f32cd274438e2e79bfa129b004bb6ac24fa2897d18fcc6791b23d5a?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&"
            alt="Flower subscription"
            className="h-full w-full  "
          />
        </div>
        <div className="flex flex-col max-w-[50%] w-full max-h-[720px] border-l  border-[#121212]">
          <div className="flex flex-col justify-between p-20  max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">

              <TextAnimation
                title={"Flower Subscription"}
                titleStyles={"text-[50px]"}
              />
              <div className="flex flex-col  text-base max-md:max-w-full">
                {subscriptionTypes.map((type, index) => (
                  <TextAnimation
                    key={index + "subs"}
                    desce={
                      <div className="flex flex-col mt-6 max-md:max-w-full">
                        <h3 className="leading-[120%] text-[#121212] max-md:max-w-full">
                          {type.title}
                        </h3>
                        <p className="mt-2 leading-6 text-[#121212] text-opacity-90 max-md:max-w-full">
                          {type.description}
                        </p>
                      </div>
                    }
                  />
                ))}
              </div>
            </div>
            <Button
              varient={"secondary"}
              maxWidth={"max-w-[176px] mt-[48px]"}
              text={"Explore Plans"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
