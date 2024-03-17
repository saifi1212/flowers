import React from "react";
import Button from "./Button";

const Header = () => {
  const initialLinks = [
    {
      text: "Home",
      link: "",
    },
    {
      text: "Shop",
      link: "shop",
    },
    {
      text: "Contact Us",
      link: "contact-us",
    },
  ];
  const lastLinks = [
    {
      text: "Sign in",
      link: "sign-in",
    },
    {
      text: "Cart",
      link: "cart",
    },
  ];
  return (
    <header className=" flex sticky z-[2] top-0 justify-between bg-[#fff] min-h-[83px] max-h-[83px] border-b border-[#121212]">
      <div className="flex max-w-[540px] w-full ">
        {initialLinks.map((item, index) => (
          <div
            key={index + "initial"}
            className={` items-center min-h-[83px] border-r w-full border-[#121212] flex justify-center`}
          >
            <Button varient="normal" text={item.text} name={item.link} />
          </div>
        ))}
      </div>
      <div className="flex max-w-[360px] w-full ">
        {lastLinks.map((item, index) => (
          <div
            key={index + "initial"}
            className={` items-center min-h-[83px] border-l w-full border-[#121212] flex justify-center`}
          >
            <Button varient="normal" text={item.text} name={item.link} />
          </div>
        ))}
      </div>
      {/* <ShoppingCart /> */}
    </header>
  );
};

export default Header;
// function ShoppingCart() {
//   const cartItems = [
//     {
//       id: 1,
//       name: "Rosy Delight",
//       quantity: 1,
//       price: 100,
//       image:
//         "https://cdn.builder.io/api/v1/image/assets/TEMP/93f45c1dd1a4cb497dd638ee75a76736ad73821751534231600e686c86ec1fa6?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&",
//     },
//   ];
//   return (
//     <section className="flex absolute z-[20] top-0 flex-col justify-center border-l border-solid bg-neutral-100 border-neutral-900 max-w-[720px]">
//       <div className="flex flex-col w-full max-md:max-w-full">
//         <header className="flex flex-col justify-center px-10 py-8 w-full text-base leading-5 border-t border-b border-solid border-neutral-900 text-neutral-900 max-md:px-5 max-md:max-w-full">
//           <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
//             <h1 className="flex-auto my-auto">Shopping Cart</h1>
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/57ecf9eb4a90a187e5fd3e611983d2fc79b24370526a86d96a9345027548987f?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&"
//               alt="Shopping cart icon"
//               className="shrink-0 w-6 aspect-square"
//             />
//           </div>
//         </header>
//         <section className="flex flex-col justify-center p-10 w-full border-b border-solid border-neutral-900 max-md:px-5 max-md:max-w-full">
//           {cartItems.map((item) => (
//             <article key={item.id} className="max-md:max-w-full">
//               <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//                 <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
//                   <img
//                     loading="lazy"
//                     src={item.image}
//                     alt={`${item.name} product image`}
//                     className="shrink-0 w-40 max-w-full border border-solid aspect-square border-neutral-900 max-md:mt-4"
//                   />
//                 </div>
//                 <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
//                   <div className="flex gap-5 justify-between self-stretch my-auto max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
//                     <div className="flex flex-col text-lg leading-6 text-neutral-900">
//                       <h2>{item.name}</h2>
//                       <p className="mt-2 text-base">
//                         Quantity ({item.quantity})
//                       </p>
//                       <p className="mt-2">${item.price}</p>
//                     </div>
//                     <button className="justify-center my-auto text-base tracking-wide leading-5 whitespace-nowrap text-zinc-500">
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </section>
//         <section className="flex flex-col justify-center p-10 w-full whitespace-nowrap border-b border-solid border-neutral-900 text-neutral-900 max-md:px-5 max-md:max-w-full">
//           <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
//             <h2 className="text-lg leading-6">Subtotal</h2>
//             <p className="text-xl leading-6 text-right">$100.00</p>
//           </div>
//         </section>
//         <section className="flex flex-col justify-center p-10 w-full text-base leading-6 border-b border-solid border-neutral-900 text-zinc-500 max-md:px-5 max-md:max-w-full">
//           <div className="pb-24 max-md:max-w-full">Gift Message</div>
//         </section>
//         <section className="flex flex-col justify-center px-10 py-11 w-full text-sm leading-4 text-center text-neutral-900 max-md:px-5 max-md:max-w-full">
//           <p className="justify-center max-md:max-w-full">
//             Shipping & taxes calculated at checkout <br /> Free standard
//             shipping within Kyiv
//           </p>
//         </section>
//         <button className="justify-center items-center px-16 py-5 w-full text-base tracking-wide leading-5 text-white uppercase bg-neutral-900 max-md:px-5 max-md:max-w-full">
//           Check out
//         </button>
//       </div>
//     </section>
//   );
// }
