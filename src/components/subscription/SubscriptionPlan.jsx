import Button from "../common/Button";

function SubscriptionPlan({
  imageSrc,
  title,
  price,
  isFreeDelivery,
  description,
  vaseDescription,
  candleDescription,
  savePercentage,
}) {
  return (
    <div className="flex flex-col mt-4 max-md:max-w-full">
      <div className="border-t border-r border-l border-solid border-zinc-300 max-md:max-w-full">
        <div className="flex">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center border-t border-l border-solid border-zinc-300">
              <img
                src={imageSrc}
                alt={title}
                className="w-full aspect-[1.43]"
              />
            </div>
          </div>
          <div className="flex flex-col  w-6/12 max-md:ml-0 max-md:w-">
            <div className="flex flex-col grow px-4 pt-4 border-l border-solid border-zinc-300 leading-[140%] text-neutral-900">
              <h3 className="text-lg">{title}</h3>
              <div className="flex flex-col mt-4 text-base">
                <p>Price {price}</p>
                {isFreeDelivery && <p className="mt-1">Free Delivery</p>}
                <p className="mt-1">{description}</p>
                {vaseDescription && <p className="mt-1">{vaseDescription}</p>}
                {candleDescription && (
                  <p className="mt-1 leading-6">{candleDescription}</p>
                )}
                <p className="mt-1">Save up to {savePercentage}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button className="justify-center items-center px-16 py-5 text-base tracking-wide leading-5 text-white uppercase whitespace-nowrap bg-neutral-900 max-md:px-5 max-md:max-w-full"></button> */}
      <Button text={"Select"} varient={"primary"} />
    </div>
  );
}
export default SubscriptionPlan;
