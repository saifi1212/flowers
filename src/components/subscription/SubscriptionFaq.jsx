import * as React from "react";
import TextAnimation from "../common/TextAnimation";
const QuestionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div className="flex flex-col py-6 border-b border-solid border-[#121212] max-md:max-w-full">
      <div className="flex gap-4 text-3xl leading-8 text-[#121212] max-md:flex-wrap">
        <div className="flex-auto max-md:max-w-full">{question}</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cf3a6230622f28f52a8eb86d752cf9fed959213d2f6db280e7a7b14203f428f?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&"
          alt="Expand icon"
          className={`${
            isOpen ? "rotate-[80deg]" : ""
          } shrink-0 my-auto w-6 aspect-square cursor-pointer duration-300 ease-in-out transition-all`}
          onClick={toggleOpen}
        />
      </div>
      {isOpen && answer && (
        <div
          className={`justify-center mt-4 text-base leading-6 text-[#121212] text-opacity-90 max-md:max-w-full`}
        >
          {answer}
        </div>
      )}
    </div>
  );
};
const SubscriptionFAQ = () => {
  const faqData = [
    {
      question: "How often will I get a new bouquet?",
      answer:
        "Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!",
    },
    {
      question: "Can i send subscription like as a gift ?",
      answer:
        "Absolutely! Our flower subscriptions make wonderful gifts. During checkout, simply enter the recipient's name and address for shipping. You can even include a personalized gift message that will be printed on the first delivery's enclosure card.",
    },
    {
      question: "Can I choose which bouquet I get ?",
      answer:
        "Each delivery is a surprise bouquet featuring the best blooms of the season. While we don't offer bouquet customization, our expert florists craft stunning arrangements you're sure to love. If you have specific flowers you don't want included, let us know and we'll do our best to accommodate.",
    },
    {
      question: "Can I change the shipping address ?",
      answer:
        "Yes, you can update the shipping address for your subscription at any time. Log in to your account to view and modify your subscription details, including the delivery address. Make sure to save any changes at least 5 business days before your next scheduled delivery.",
    },
    {
      question: "What day will the subscription bouquet come?",
      answer:
        "When you sign up for a subscription, you can select which day of the week you'd like your deliveries to arrive. Available delivery days will depend on the recipient's location. Once set, your bouquets will consistently arrive on the same day of the week for the duration of your subscription.",
    },
    {
      question: "Can I suspend my subscription to flowers ?",
      answer:
        "Yes, you can pause your subscription for up to 4 consecutive deliveries. This is perfect if you'll be out of town or need a break. In your account settings, select 'Pause Subscription' and choose when you'd like to resume deliveries. Billing will be suspended until your subscription is reactivated.",
    },
  ];
  return (
    <section className="flex justify-center items-center px-16 py-20  bg-neutral-100 max-md:px-5">
      <div className="flex flex-col p-20 max-w-full bg-white border border-solid border-[#121212] w-[864px] max-md:px-5">
        <TextAnimation
          title={"Subscription FAQ"}
          titleStyles={"text-[50px] text-center"}
        />
        <div className="flex flex-col mt-10 max-md:max-w-full">
          {faqData.map((item, index) => (
            <QuestionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default SubscriptionFAQ;
