import Button from "../common/Button";

function DeliveryFrequency() {
    return (
      <div className="flex gap-4 mt-6 text-base tracking-wide leading-5 uppercase whitespace-nowrap text-neutral-900 max-md:flex-wrap max-md:max-w-full">
        <Button
          text={"Monthly"}
          varient={"secondary"}
          maxWidth={"max-w-[200px]"}
        />
        <Button
          text={"Bi-Weekly"}
          varient={"secondary"}
          maxWidth={"max-w-[200px]"}
        />
        <Button
          text={"Weekly"}
          varient={"secondary"}
          maxWidth={"max-w-[200px]"}
        />
      </div>
    );
  }
  export default DeliveryFrequency