function DeliveryCount() {
  return (
    <div className="flex gap-5 justify-between pr-4   border border-solid border-neutral-900 max-w-[146px] w-full ">
      <div className="flex flex-col justify-center px-3.5 py-6 border-r border-solid border-neutral-900">
        <svg
          width={20}
          height={2}
          viewBox="0 0 20 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.5 1.5H0.5V0.5H19.5V1.5Z" fill="#121212" />
        </svg>
      </div>
      <div className="my-auto text-base leading-6 text-neutral-900"> 1 </div>
      <button className="flex justify-center items-center p-3.5 border-l border-solid border-neutral-900">
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.5 10.5H0.5V9.5H19.5V10.5Z" fill="#121212" />
          <path d="M10.5 0.5V19.5H9.5V0.5H10.5Z" fill="#121212" />
        </svg>
      </button>
    </div>
  );
}
export default DeliveryCount;
