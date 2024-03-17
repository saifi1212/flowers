import * as React from "react";
import SubscriptionPlan from "./SubscriptionPlan";
import TextAnimation from "../common/TextAnimation";
import Button from "../common/Button";
import DeliveryCount from "./DeliveryCount";
import DeliveryFrequency from "./DeliveryFrequent";

const subscriptionPlans = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a31ba20441f209f8fdf2e3329380bf1d5323b8ba5927e580bc455dc1f50d0dab?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&",
    title: "Classic",
    price: "$45",
    isFreeDelivery: true,
    description: "Best for a budget",
    vaseDescription: "Glass vase with first delivery",
    savePercentage: 25,
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0dfa4f0ea0128cee90921f2bf367975640eba106a4ba637573c236e7ad570379?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&",
    title: "Seasonal",
    price: "$65",
    isFreeDelivery: true,
    description: "Best seasonal selections",
    vaseDescription: "Glass vase with first delivery",
    candleDescription: "Luxury candle with your first delivery",
    savePercentage: 28,
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/808462e101bfa021d831b1668da01ef6c710241632a5fd2da6fb851222d1b116?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&",
    title: "Luxe",
    price: "$95",
    isFreeDelivery: true,
    description: "Premium arrangement",
    vaseDescription: "Premium vase with first delivery",
    candleDescription: "Luxury candle with your first delivery",
    savePercentage: 30,
  },
];

function SubscriptionBuilder() {
  return (
    <div className="flex  max-md:flex-col max-md:gap-0 border-b border-[#121212]">
      <div className="flex flex-col max-w-[50%] w-full">
        <section className="flex flex-col grow px-10 py-20 border-t border-r border-solid border-neutral-900 max-md:px-5 max-md:max-w-full">
          <TextAnimation
            title={"Selecting a Plan"}
            titleStyles={"min-h-[52px]"}
            label={"Build Your Subscription"}
            desce={
              "Enjoy free shipping on every order and save up to 30%. Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning. To modify, pause, or cancel your subscription, simply log in to your account dashboard. You're incomplete control of your flower delivery experience."
            }
          />
          <div className="flex flex-col mt-6 max-md:max-w-full">
            {subscriptionPlans.map((plan) => (
              <SubscriptionPlan key={plan.title} {...plan} />
            ))}
          </div>
          <hr className="shrink-0 mt-10 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:max-w-full" />
          <section className="flex flex-col mt-10 max-md:max-w-full">
            <TextAnimation
              title={"How often do you want flowers delivered ?"}
              titleStyles={"!text-[28px]"}
              desce={"Select the delivery frequency"}
            />
            <DeliveryFrequency />
          </section>
          <hr className="shrink-0 mt-10 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:max-w-full" />
          <section className="flex flex-col mt-10 max-md:max-w-full">
            <TextAnimation
              title={" How many deliveries would you like ?"}
              titleStyles={"!text-[28px]"}
              desce={
                " Pay once and do not worry about flowers, our bouquets will be beautiful and on time, as many times as you need"
              }
            />
            <DeliveryCount />
          </section>
          <hr className="shrink-0 mt-10 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:max-w-full" />
          <Button text={"Checkout"} varient={"primary"} />
        </section>
      </div>
      <div className="flex flex-col  max-w-[50%] w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/466044217791da47d161e1bd32718e4ebb0e29da5d95e0ecf8d153c5858d244b?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&"
          alt="Subscription builder"
          className="w-full border-l border-solid aspect-square border-neutral-900 max-md:max-w-full"
        />
      </div>
    </div>
  );
}
export default SubscriptionBuilder;
