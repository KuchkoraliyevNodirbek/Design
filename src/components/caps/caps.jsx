// src/components/ProductGrid.js
import React from "react";
import CapsImage from "../caps/menu img/caps.png";
import TrousersImage from "../caps/menu img/trousers.png";
import JacketsImage from "../caps/menu img/jackets.png";
import SneakersImage from "../caps/menu img/sneakers.png";

const ProductGrid = () => {
  return (
    <div className="flex items-center justify-center  bg-black text-white pt-[30px]">
      <div className="grid grid-cols-1 gap-8 p-4 bg-black text-black sm:grid-cols-2  ">
        <div className=" w-[500px] h-[200px] flex items-center justify-between p-4 bg-[#EBEBEB] rounded-lg">
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-bold">CAPS</h2>
            <button className="mt-2 px-3 py-1 bg-orange-500 rounded-full hover:bg-orange-600">
              SHOP NOW &rarr;
            </button>
          </div>
          <img
            src={CapsImage}
            alt="Caps"
            className="w-[150px] h-36 object-cover rounded-lg"
          />
        </div>
        <div className=" w-[500px] h-[200px] flex items-center justify-between p-4 bg-[#EBEBEB] rounded-lg">
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-bold">TROUSERS</h2>
            <button className="mt-2 px-3 py-1 bg-blue-500 rounded-full hover:bg-blue-600">
              SHOP NOW &rarr;
            </button>
          </div>
          <img
            src={TrousersImage}
            alt="Trousers"
            className="w-[150px] h-36 object-cover rounded-lg"
          />
        </div>
        <div className="w-[500px] h-[200px] flex items-center justify-between p-4 bg-[#EBEBEB] rounded-lg">
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-bold">JACKETS</h2>
            <button className="mt-2 px-3 py-1 bg-orange-500 rounded-full hover:bg-orange-600">
              SHOP NOW &rarr;
            </button>
          </div>
          <img
            src={JacketsImage}
            alt="Jackets"
            className="w-[150px] h-36 object-cover rounded-lg"
          />
        </div>
        <div className="w-[500px] h-[200px] flex items-center justify-between p-4 bg-[#EBEBEB] rounded-lg">
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-bold">SNEAKERS</h2>
            <button className="mt-2 px-3 py-1 bg-orange-500 rounded-full hover:bg-orange-600">
              SHOP NOW &rarr;
            </button>
          </div>
          <img
            src={SneakersImage}
            alt="Sneakers"
            className="w-[150px] h-36 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
