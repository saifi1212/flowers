import React from "react";
import Button from "../common/Button";

const Remind = () => {
  return (
    <div className="max-w-[25%] w-full min-h-[430px] max-h-[430px] p-[40px] flex flex-col gap-[24px] border-t border-r border-[#121212]">
      <p className="leading-[140%] text-[#121212] text-[18px]">
        Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
        Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or
        sharing your address
      </p>
      <div className="flex flex-col gap-[16px] ">
        <input
          type="text"
          placeholder="Your Email"
          className="min-h-[56px] text-[14px] leading-[120%] outline-none text-[#808080] max-h-[56px] border border-[#D2D2D7] pl-[16px] "
        />
        <Button
          varient="primary"
          maxWidth="max-w-[100%]"
          text="Remind"
          name="remind"
        />
      </div>
    </div>
  );
};

export default Remind;
