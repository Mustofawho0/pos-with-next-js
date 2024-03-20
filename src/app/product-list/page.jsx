// import HeaderDashboard from "~/components/cores/HeaderDashboard";
"use client";

import { useEffect } from "react";
import { useCreateProductPage } from "~/api/useCreateProduct";
import HeaderDashboard from "~/components/core/HeaderDashboard";
// import { CardProduct } from "../dashboard/CardProduct";
import { CardProduct } from "../dashboard/CardProduct";

const ProductList = () => {
  const { onHandleFetchProduct, products } = useCreateProductPage();

  useEffect(() => {
    onHandleFetchProduct();
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9 px-14 py-10 h-[100vh]">
        <HeaderDashboard breadcumbsLink="Product List" title="Product List" />
        <div className="px-14 py-5">
          <h1 className="text-lg font-bold">Categories</h1>
          <div className="grid grid-cols-12 gap-3">
            <button className="btn bg-transparent border border-black">
              New
            </button>
            <button className="btn bg-transparent border border-black">
              Second
            </button>
          </div>
        </div>
        <div className="px-14 py-5">
          <h1 className="text-lg font-bold">Select Menu</h1>
          <div className="grid grid-cols-12 gap-3">
            {products?.map((product, index) => {
              return (
                <div key={index} className="col-span-3">
                  <CardProduct
                    key={index}
                    name={product.name}
                    price={product.price}
                    image={product.imageUrl}
                    description={product.description}
                    category={product.category}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-span-3 h-[100vh] bg-gray-100 px-5 py-10 relative">
        <div className="border-b-2 pb-5">
          <h1 className="text-lg font-bold">Detail Items</h1>
          <div className="flex gap-3 py-3">
            <div className="w-[100px] h-[100px]">
              <img
                className="rounded-md min-w-full min-h-full max-w-full max-h-full object-cover"
                src="https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg"
                alt="Burger"
              />
            </div>
            <div>
              <h1 className="text-md font-bold">Burger</h1>
              <h1 className="text-sm font-light text-gray-500">Food</h1>
              <h1 className="text-md font-bold text-orange-500">
                Rp. 45.000, 00
              </h1>
              <div className="flex gap-3 items-center">
                <button className="flex justify-center items-center px-3 py-1 rounded-md text-white bg-orange-500">
                  -
                </button>
                <p className="text-lg font-medium">1</p>
                <button className="flex justify-center items-center px-3 py-1 rounded-md text-white bg-orange-500">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3 py-3">
            <div className="w-[100px] h-[100px]">
              <img
                className="rounded-md min-w-full min-h-full max-w-full max-h-full object-cover"
                src="https://www.foodandwine.com/thmb/mMJAvZyK09gP8_sIfViIVyMm_YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/urdaburger-FT-RECIPE0621-f8488fae404d4ae686d612a7bb201fe3.jpg"
                alt="Burger"
              />
            </div>
            <div>
              <h1 className="text-md font-bold">Burger</h1>
              <h1 className="text-sm font-light text-gray-500">Food</h1>
              <h1 className="text-md font-bold text-orange-500">
                Rp. 45.000, 00
              </h1>
              <div className="flex gap-3 items-center">
                <button className="flex justify-center items-center px-3 py-1 rounded-md text-white bg-orange-500">
                  -
                </button>
                <p className="text-lg font-medium">1</p>
                <button className="flex justify-center items-center px-3 py-1 rounded-md text-white bg-orange-500">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold">Summary</h1>
          <div className="grid grid-cols-12">
            <div className="col-span-5">Items</div>
            <div className="col-span-1">:</div>
            <div className="col-span-5">2</div>
            <div className="col-span-5">Total Price</div>
            <div className="col-span-1">:</div>
            <div className="col-span-5">Rp. 250.000, 00</div>
            <div className="col-span-5">Tax (12%)</div>
            <div className="col-span-1">:</div>
            <div className="col-span-5">Rp. 27.500, 00</div>
            <div className="col-span-5">Discount</div>
            <div className="col-span-1">:</div>
            <div className="col-span-5">10%</div>
            <div className="col-span-5 font-bold text-lg">Total</div>
            <div className="col-span-1 font-bold text-lg">:</div>
            <div className="col-span-5 font-bold text-lg">Rp. 275.000, 00</div>
          </div>
        </div>
        <div className="px-5 py-10 absolute w-full right-0 bottom-0">
          <button className="btn bg-orange-500 text-white w-full py-3 rounded-md hover:bg-black">
            Create Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
