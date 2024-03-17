import * as React from "react";
import DeliveryCount from "../subscription/DeliveryCount";
import Button from "../common/Button";
import TextAnimation from "../common/TextAnimation";
function ProductCard({ product, onAddToCart, border }) {
  return (
    <div className="flex flex-col max-w-[25%] w-full min-h-[440px]">
      <button
        type="button"
        className={`flex h-full relative flex-col justify-end items-center px-6 pt-20 pb-6 text-center ${
          border && "border-r "
        }  border-neutral-900 leading-[120%] `}
        onClick={() => onAddToCart(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center  max-md:mt-10">
          <div className="text-lg text-neutral-900 font-medium">
            {product.name}
          </div>
          <div className=" text-lg text-zinc-500">price {product.price}$</div>
        </div>
      </button>
    </div>
  );
}
function ProductDetailPage() {
  const vases = [
    {
      name: "Glass Vase",
      price: 15,
      image: "/images/product/glass.svg",
      alt: "Glass Vase",
    },
    {
      name: "Hammershoi",
      price: 45,
      image: "/images/product/skin-vase.svg",
      alt: "Hammershoi Vase",
    },
    {
      name: "Ceramic Vase",
      price: 35,
      image: "/images/product/white-vase.svg",
      alt: "Ceramic Vase",
    },
    {
      name: "Steel Vase",
      price: 25,
      image: "/images/product/steel-vase.svg",
      alt: "Steel Vase",
    },
    {
      name: "Bamboo",
      price: 36,
      image: "/images/product/bamboo.svg",
      alt: "Bamboo Vase",
    },
  ];
  const [quantity, setQuantity] = React.useState(1);
  const products = [
    {
      name: "Rattan Grapefruit",
      price: 48,
      image: "/images/product/recommended.png",
      border: true,
    },
    {
      name: "Lime & Matcha",
      price: 46,
      image: "/images/product/recommended.png",
      border: true,
    },
    {
      name: "Cedar & Lavender",
      price: 64,
      image: "/images/product/recommended.png",
      border: true,
    },
    {
      name: "Ocean Mist",
      price: 58,
      image: "/images/product/recommended.png",
      border: false,
    },
  ];
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  };
  const handleAddToBasket = () => {
    console.log(`Added Rosy Delight to cart with quantity ${quantity}`);
  };
  return (
    <div className="flex flex-col">
      <div className="w-full ">
        <div className="flex  ">
          <div className="flex flex-col max-w-[50%] w-full max-h-[871px]">
            <img
              src="/images/product/test.png"
              alt="Rosy Delight bouquet"
              className=" w-full h-full"
            />
          </div>
          <div className="flex flex-col  max-w-[50%] w-full ">
            <div className="flex flex-col grow p-[100px] border-l border-solid border-neutral-900 max-md:pl-5">
              <div className="flex flex-col">
                <div className="text-lg leading-4 uppercase text-zinc-500">
                  Fresh Flowers /
                  <span className="text-zinc-500">Rosy Delight</span>
                </div>
                <div className="flex flex-col mt-6 mr-5 max-md:mr-2.5">
                  <h1 className="text-6xl leading-10 text-neutral-900">
                    Rosy Delight - $100
                  </h1>
                  <p className="mt-8 text-lg leading-6 text-neutral-900 text-opacity-90">
                    Large exceptional bouquet composed of a selection of David
                    Austin roses, known for their beauty and subtle fragrance.
                    The bouquet is accompanied by seasonal foliage which will
                    enhance these sublime flowers even
                  </p>
                </div>
                <div className="flex gap-4 items-center mt-6">
                  <div className=" text-lg leading-6 text-neutral-900">
                    Quantity
                  </div>
                  <DeliveryCount />
                </div>
                <div className="flex flex-col justify-center mt-6">
                  <div className="flex gap-4 justify-center items-center mt-4 text-sm leading-4 max-md:flex-wrap">
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.1664 28.1339L8.93307 16.9339C8.79974 16.8005 8.70552 16.6561 8.65041 16.5005C8.59441 16.345 8.56641 16.1783 8.56641 16.0005C8.56641 15.8227 8.59441 15.6561 8.65041 15.5005C8.70552 15.345 8.79974 15.2005 8.93307 15.0672L20.1664 3.83385C20.4775 3.52274 20.8664 3.36719 21.3331 3.36719C21.7997 3.36719 22.1997 3.53385 22.5331 3.86719C22.8664 4.20052 23.0331 4.58941 23.0331 5.03385C23.0331 5.4783 22.8664 5.86719 22.5331 6.20052L12.7331 16.0005L22.5331 25.8005C22.8442 26.1116 22.9997 26.4947 22.9997 26.9499C22.9997 27.4059 22.8331 27.8005 22.4997 28.1339C22.1664 28.4672 21.7775 28.6339 21.3331 28.6339C20.8886 28.6339 20.4997 28.4672 20.1664 28.1339Z"
                        fill="#121212"
                      />
                    </svg>

                    {vases.map((vase) => (
                      <button
                        key={vase.name}
                        type="button"
                        className="flex flex-col whitespace-nowrap"
                        onClick={() => handleAddToCart(vase)}
                      >
                        <img
                          loading="lazy"
                          src={vase.image}
                          alt={vase.alt}
                          className="self-center border border-solid aspect-square border-zinc-300 w-[100px]"
                        />
                        <div className="flex items-start flex-col mt-2">
                          <div className="text-neutral-900">{vase.name}</div>
                          <div className="mt-1 text-zinc-500">
                            ${vase.price}
                          </div>
                        </div>
                      </button>
                    ))}
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4312 3.86614L22.6646 15.0661C22.7979 15.1995 22.8921 15.3439 22.9473 15.4995C23.0033 15.655 23.0312 15.8217 23.0312 15.9995C23.0312 16.1773 23.0033 16.3439 22.9473 16.4995C22.8921 16.655 22.7979 16.7995 22.6646 16.9328L11.4312 28.1661C11.1201 28.4773 10.7312 28.6328 10.2646 28.6328C9.79792 28.6328 9.39792 28.4661 9.06458 28.1328C8.73125 27.7995 8.56458 27.4106 8.56458 26.9661C8.56458 26.5217 8.73125 26.1328 9.06458 25.7995L18.8646 15.9995L9.06458 6.19948C8.75347 5.88837 8.59792 5.50526 8.59792 5.05014C8.59792 4.59414 8.76458 4.19948 9.09792 3.86614C9.43125 3.53281 9.82014 3.36614 10.2646 3.36614C10.709 3.36614 11.0979 3.53281 11.4312 3.86614Z"
                        fill="#121212"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col mt-6 max-w-full">
                  <div className="text-lg leading-6 text-neutral-900">
                    Price options
                  </div>
                  <div className="flex gap-3 mt-4">
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-col justify-center items-center px-1.5 w-6 h-6 rounded-full border border-solid bg-zinc-300 border-neutral-900">
                        <div className="shrink-0 w-3.5 h-3.5 rounded-full bg-neutral-900" />
                      </div>
                    </div>
                    <div className="flex-auto text-lg leading-6 text-neutral-900">
                      One time purchase. Price $100
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <div className="flex flex-col justify-center">
                      <div className="shrink-0 w-6 h-6 rounded-full border border-solid bg-zinc-300 border-neutral-900" />
                    </div>
                    <div className="flex-auto text-lg leading-6 text-neutral-900">
                      Subscribe now, and save 25% on this order.
                    </div>
                  </div>
                </div>
              </div>
              <Button
                varient={"primary"}
                text={"Add to basket"}
                maxWidth={"mt-[40px]"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-center items-center px-16 py-20 w-full  border-y border-solid border-neutral-900 text-neutral-900 max-md:px-5">
          <TextAnimation title={" You may also like…"} />
        </div>
        <div className="w-full">
          <div className="flex ">
            {products.map((product) => (
              <ProductCard
                key={product.name}
                border={product.border}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailPage;
