// import * as React from "react";

// function CheckoutPage() {
//   const [step, setStep] = React.useState(1);
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [phone, setPhone] = React.useState("");
//   const [recipientName, setRecipientName] = React.useState("");
//   const [recipientPhone, setRecipientPhone] = React.useState("");
//   const [street, setStreet] = React.useState("");
//   const [apartment, setApartment] = React.useState("");
//   const [unknownAddress, setUnknownAddress] = React.useState(false);

//   const handleSubmitInformation = () => {
//     if (name && email && phone) {
//       setStep(2);
//     }
//   };

//   const handleSubmitShipping = () => {
//     if (recipientName && recipientPhone && (street || unknownAddress)) {
//       setStep(3);
//     }
//   };

//   const steps = [
//     { label: "Information", icon: "{{ext_37}}", active: step === 1 },
//     { label: "Shipping", icon: "{{ext_38}}", active: step === 2 },
//     { label: "Payment", icon: "{{ext_39}}", active: step === 3 },
//   ];

//   const inputFields = [
//     {
//       step: 1,
//       fields: [
//         {
//           label: "Your Name",
//           value: name,
//           onChange: (e) => setName(e.target.value),
//           placeholder: "Your Name",
//         },
//         {
//           label: "Your Email",
//           value: email,
//           onChange: (e) => setEmail(e.target.value),
//           placeholder: "Your Email",
//           type: "email",
//         },
//         {
//           label: "Your Phone number *",
//           value: phone,
//           onChange: (e) => setPhone(e.target.value),
//           placeholder: "Your Phone number *",
//           type: "tel",
//         },
//       ],
//     },
//     {
//       step: 2,
//       fields: [
//         {
//           label: "Recipients Name",
//           value: recipientName,
//           onChange: (e) => setRecipientName(e.target.value),
//           placeholder: "Recipients Name",
//         },
//         {
//           label: "Recipients Phone number *",
//           value: recipientPhone,
//           onChange: (e) => setRecipientPhone(e.target.value),
//           placeholder: "Recipients Phone number *",
//           type: "tel",
//         },
//         {
//           label: "Street",
//           value: street,
//           onChange: (e) => setStreet(e.target.value),
//           placeholder: "Street",
//         },
//         {
//           label: "Apartment Number",
//           value: apartment,
//           onChange: (e) => setApartment(e.target.value),
//           placeholder: "Apartment Number",
//         },
//       ],
//     },
//     {
//       step: 3,
//       fields: [
//         {
//           label: "Card Number",
//           placeholder: "Card Number",
//         },
//         {
//           label: "MM / YY",
//           placeholder: "MM / YY",
//         },
//         {
//           label: "CVV Code",
//           placeholder: "CVV Code",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="flex flex-col px-20 py-10 border-l border-solid border-neutral-900 leading-[120%] max-w-[720px] max-md:px-5">
//       <nav className="flex gap-3 self-start text-sm uppercase whitespace-nowrap text-zinc-500">
//         {steps.map((navStep, index) => (
//           <div key={index} className="flex gap-2">
//             <div className={navStep.active ? "text-neutral-900" : ""}>
//               {navStep.label}
//             </div>
//             <img
//               loading="lazy"
//               src={navStep.icon}
//               alt=""
//               className="shrink-0 my-auto w-1.5 aspect-[0.6] fill-zinc-500"
//             />
//           </div>
//         ))}
//       </nav>

//       {step > 1 && (
//         <section className="flex gap-5 justify-between items-start pr-4 pb-6 mt-10 w-full text-lg leading-6 border-b border-solid border-neutral-900 text-zinc-700 max-md:flex-wrap max-md:max-w-full">
//           <div className="flex gap-1">
//             <img
//               loading="lazy"
//               src="{{ext_40}}"
//               alt=""
//               className="shrink-0 self-start w-6 aspect-square"
//             />
//             <div className="flex-auto">Contact information</div>
//           </div>
//           <img
//             loading="lazy"
//             src="{{ext_41}}"
//             alt=""
//             className="shrink-0 w-6 aspect-square"
//           />
//         </section>
//       )}

//       {step > 2 && (
//         <section className="flex gap-5 justify-between items-start pr-4 pb-6 mt-10 w-full text-lg leading-6 border-b border-solid border-neutral-900 text-zinc-700 max-md:flex-wrap max-md:max-w-full">
//           <div className="flex gap-1">
//             <img
//               loading="lazy"
//               src="{{ext_42}}"
//               alt=""
//               className="shrink-0 self-start w-6 aspect-square"
//             />
//             <div className="flex-auto">Shipping details</div>
//           </div>
//           <img
//             loading="lazy"
//             src="{{ext_43}}"
//             alt=""
//             className="shrink-0 w-6 aspect-square"
//           />
//         </section>
//       )}

//       <section className="flex flex-col pb-6 mt-10 border-b border-solid border-zinc-300 max-md:max-w-full">
//         <h2 className="text-lg leading-6 text-neutral-900 max-md:max-w-full">
//           {step} {steps[step - 1].label}
//         </h2>

//         {step === 1 && (
//           <div className="justify-center items-start p-10 mt-4 text-base leading-6 underline bg-zinc-300 text-neutral-900 max-md:px-5 max-md:max-w-full">
//             Already have an account?
//             <span className="underline text-neutral-900">Log in</span> for
//             faster checkout
//           </div>
//         )}

//         <div className="flex flex-col mt-4 max-md:max-w-full">
//           {inputFields
//             .find((group) => group.step === step)
//             ?.fields.map((field, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col justify-center mt-3 ${
//                   step === 2 && index < 2 ? "max-w-full w-[328px]" : ""
//                 } ${step === 2 && index >= 2 ? "flex-1 grow shrink-0 basis-0 w-fit" : ""}`}
//               >
//                 <label htmlFor={field.label} className="sr-only">
//                   {field.label}
//                 </label>
//                 <input
//                   type={field.type || "text"}
//                   id={field.label}
//                   placeholder={field.placeholder}
//                   value={field.value}
//                   onChange={field.onChange}
//                   className="justify-center items-start px-4 py-5 text-sm text-zinc-500 bg-white border border-solid border-zinc-300 max-md:pr-5 max-md:max-w-full"
//                   aria-label={field.label}
//                 />
//               </div>
//             ))}

//           {step === 2 && (
//             <>
//               <div className="flex gap-5 justify-between p-4 mt-3 bg-white border border-solid border-zinc-300 max-md:flex-wrap max-md:max-w-full">
//                 <div className="flex-auto my-auto">Date of Delivery</div>
//                 <img
//                   loading="lazy"
//                   src="{{ext_44}}"
//                   alt=""
//                   className="shrink-0 w-6 aspect-square"
//                 />
//               </div>
//               <div className="flex gap-5 justify-between p-4 mt-3 bg-white border border-solid border-zinc-300 max-md:flex-wrap max-md:max-w-full">
//                 <div className="my-auto">Delivery Time</div>
//                 <img
//                   loading="lazy"
//                   src="{{ext_45}}"
//                   alt=""
//                   className="shrink-0 w-6 aspect-square"
//                 />
//               </div>
//               <div className="flex gap-3 mt-3 text-neutral-900 max-md:flex-wrap">
//                 <input
//                   type="checkbox"
//                   checked={unknownAddress}
//                   onChange={(e) => setUnknownAddress(e.target.checked)}
//                   className="shrink-0 w-6 h-6 border border-solid border-neutral-900 fill-zinc-300 stroke-[1px] stroke-neutral-900"
//                 />
//                 <div className="flex-auto max-md:max-w-full">
//                   I don't know the address, please call the recipient.
//                 </div>
//               </div>
//             </>
//           )}
//         </div>

//         {step === 3 && (
//           <>
//             <p className="text-base text-neutral-900 mt-4 max-md:max-w-full">
//               Pay by card. Your payment is secure.
//             </p>
//             <div className="flex flex-col mt-4 max-md:max-w-full">
//               <div className="flex gap-3 mt-3 text-sm text-zinc-500 max-md:flex-wrap max-md:max-w-full">
//                 {inputFields[2].fields.map((field, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-col flex-1 grow shrink-0 justify-center basis-0 w-fit"
//                   >
//                     <label htmlFor={field.label} className="sr-only">
//                       {field.label}
//                     </label>
//                     <input
//                       type="text"
//                       id={field.label}
//                       placeholder={field.placeholder}
//                       className="justify-center items-start px-4 py-5 bg-white border border-solid border-zinc-300 max-md:pr-5"
//                       aria-label={field.label}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </>
//         )}

//         <button
//           onClick={
//             step === 1
//               ? handleSubmitInformation
//               : step === 2
//               ? handleSubmitShipping
//               : undefined
//           }
//           className="justify-center items-center px-16 py-5 mt-4 text-base tracking-wide text-white uppercase bg-neutral-900 max-md:px-5 max-md:max-w-full"
//         >
//           {step === 1
//             ? "Continue to shipping"
//             : step === 2
//             ? "Continue to Payment"
//             : "Complete Order"}
//         </button>

//         {step === 3 && (
//           <div className="flex flex-col mt-4 text-base text-neutral-900 max-md:max-w-full">
//             <p className="max-md:max-w-full">Or pay using:</p>
//             <div className="flex gap-3 mt-3 tracking-wide uppercase max-md:flex-wrap">
//               <button className="flex flex-1 flex-auto gap-2 justify-center px-20 py-4 border border-solid border-neutral-900 max-md:px-5">
//                 <img
//                   loading="lazy"
//                   src="{{ext_46}}"
//                   alt="Apple Pay"
//                   className="shrink-0 w-6 aspect-square"
//                 />
//                 <span className="my-auto">Apple Pay</span>
//               </button>
//               <button className="flex flex-1 flex-auto gap-2 justify-center px-16 py-4 border border-solid border-neutral-900 max-md:px-5">
//                 <img
//                   loading="lazy"
//                   src="{{ext_47}}"
//                   alt="Google Pay"
//                   className="shrink-0 w-6 aspect-square"
//                 />
//                 <span className="flex-auto my-auto">Google Pay</span>
//               </button>
//             </div>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }

// export default CheckoutPage;
import * as React from "react";
function OrderSummary() {
  const products = [
    {
      id: 1,
      name: "Snowfall",
      quantity: 1,
      price: 100,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f2f2f2f28c0baef5451626afae58a3c98e6062778204754dd7a25aeb8ad0d0f7?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&",
    },
  ];
  return (
    <section className="flex flex-col justify-center max-w-[720px]">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">
        <div className="flex flex-col px-20 py-10 w-full border-r border-b border-l border-solid bg-neutral-100 border-neutral-900 max-md:px-5 max-md:max-w-full">
          <h2 className="text-sm leading-4 uppercase text-neutral-900 max-md:max-w-full">
            Order summary
          </h2>
          <div className="flex flex-col mt-10 max-md:max-w-full">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
            <div className="flex flex-col pb-6 mt-6 border-b border-solid border-zinc-300 max-md:max-w-full">
              <p className="text-base leading-6 text-neutral-900 max-md:max-w-full">
                If you have our gift card, enter the code to get discounts
              </p>
              <form className="flex gap-4 mt-4 leading-[120%] max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col grow shrink-0 justify-center text-sm basis-0 text-zinc-500 w-fit">
                  <label htmlFor="giftCard" className="sr-only">
                    Gift card
                  </label>
                  <input
                    type="text"
                    id="giftCard"
                    name="giftCard"
                    placeholder="Gift card"
                    className="justify-center items-start px-4 py-5 bg-white border border-solid border-zinc-300 max-md:pr-5"
                    aria-label="Enter gift card code"
                  />
                </div>
                <button
                  type="submit"
                  className="grow justify-center items-center px-16 py-5 text-base tracking-wide text-white uppercase whitespace-nowrap bg-neutral-900 w-fit max-md:px-5"
                >
                  Apply
                </button>
              </form>
            </div>
            <div className="flex flex-col pb-6 mt-6 text-base leading-6 border-b border-solid border-zinc-300 text-neutral-900 max-md:max-w-full">
              <div className="flex gap-5 justify-between whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div>Subtotal</div> <div className="text-right">$100.00</div>
              </div>
              <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
                <div>Shipping</div>
                <div className="flex-auto text-right">
                  Calculated at next step
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between mt-6 text-neutral-900 max-md:max-w-full">
              <div className="flex gap-5 justify-between whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div className="text-lg leading-6">Total</div>
                <div className="text-xl leading-6 text-right">$100.00</div>
              </div>
              <div className="flex gap-1 self-center mt-40text-sm leading-4 max-md:mt-10">
                <div className="grow">Secure Checkout</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/69f78e6ef1858b6ccfa83f87c3711553a116fb62f70e46dd1ffa8fcbe35dc362?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&"
                  alt="Secure checkout icon"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function ProductItem({ product }) {
  return (
    <article className="pb-6 border-b border-solid border-zinc-300 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
          <img
            src={product.image}
            alt={`${product.name} product image`}
            className="shrink-0 w-40 max-w-full border border-solid aspect-square border-neutral-900 max-md:mt-4"
          />
        </div>
        <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-5 justify-between self-stretch my-auto leading-[140%] text-neutral-900 max-md:mt-10">
            <div className="flex flex-col">
              <h3 className="text-lg">{product.name}</h3>
              <p className="mt-2 text-base"> Quantity ({product.quantity}) </p>
            </div>
            <div className="my-auto text-lg">${product.price}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
export default OrderSummary
