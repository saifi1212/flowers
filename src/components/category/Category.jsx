import * as React from "react";

function ProductCard({ product }) {
  return (
    <div className="flex flex-col grow text-center leading-[120%]">
      <div className="flex overflow-hidden relative flex-col justify-end px-6 pt-20 pb-6 w-full border-b border-l border-solid aspect-square border-neutral-900 max-md:px-5">
        <img
          loading="lazy"
          src={product.image}
          alt={product.name}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col justify-center mt-56 max-md:mt-10">
          <div className="text-base text-neutral-900">{product.name}</div>
          <div className="mt-1 text-sm text-zinc-500">{product.price}</div>
        </div>
      </div>
    </div>
  );
}

function FreshFlowersPage() {
  const products = [
    {
      name: "Snowfall",
      price: "price 70$",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dc328107550d5be6bd7aac1647ad5645007fc8ab17ae6adc12d12b12ee683128?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&",
    },
    {
      name: "Pink Elegance",
      price: "price 70$",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7162ea25902bc6e327bb91e8c44dd74cc4d40495296088d5f565caabce29dbcf?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&",
    },
    {
      name: "Autumn Symphony",
      price: "price 70$",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6b2afd8c8d09f09627e661a38f82987b1edf4e7b8a21bedcc04d0b5ffc989f9b?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&",
    },
    {
      name: "Serenity",
      price: "price 89$",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/51e9b9fc0bc6476d35e653fe80197d5401edda736b74f511fafbc9c6574b3bb5?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&",
    },
    {
      name: "Mystical Majesty",
      price: "price 80$",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b1ca050439fb7bf445843436e1abbe17e523e8520aaa16e9485d3803adb1f8e1?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&",
    },
    {
      name: "Dawn's Delight",
      price: "price 70$",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff46c054f4bbe7ede2add1555aa4ddf70857794a280e4959144ae83499528e82?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&",
    },
    {
      name: "Rustic Charm",
      price: "price 70$",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a653ec82408ede9e1d423c8e130be53ac5f56a02f48fd44343b8f0886cfc79b6?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&",
    },
    {
      name: "Blue Harmony",
      price: "price 55$",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e7b3e9d9daa44e1efba3f31682a56159a489542ce05185ebb241bba6e54fae77?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&",
    },
    {
      name: "Blazing Blossoms",
      price: "price 70$",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f17e42a1eafd679f6e7746198bd2fb419f08375dd22e0c6854165307e25ed7c5?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&",
    },
  ];

  return (
    <div>
      <div className="flex max-md:flex-col max-md:gap-0">
        <div className="flex flex-col max-w-[50%] w-full">
          <header className="flex overflow-hidden relative flex-col justify-center px-16 py-20 text-7xl text-center text-white border-b border-solid border-neutral-900 leading-[80.4px] min-h-[720px] max-md:px-5 max-md:max-w-full max-md:text-4xl">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/022a003c376761282cf7abe4e3e1787ac24441de830a856392032ff3b2880705?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&"
              alt="Fresh Flowers"
              className="object-cover absolute inset-0 size-full"
            />
            <h1 className="relative justify-center mx-5 mt-60 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
              Fresh Flowers
            </h1>
          </header>
        </div>
        <div className="flex flex-col max-w-[50%] w-full">
          <main className="grow max-md:max-w-full">
            <div className="flex  max-md:flex-col max-md:gap-0">
              <div className="flex flex-col max-w-[50%] w-full">
                {products.slice(0, 5).map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
              <div className="flex flex-col  max-w-[50%] w-full">
                {products.slice(5).map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3fe4e4fd72fbb9517d95d3b1c3fcdeb72b02de70ae871731ba6aa3163925c81?apiKey=fa216e1f5b984f5a806fae89cbbdc7cf&"
                  alt=""
                  className="w-full border-b border-l border-solid aspect-square border-neutral-900"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default FreshFlowersPage;
