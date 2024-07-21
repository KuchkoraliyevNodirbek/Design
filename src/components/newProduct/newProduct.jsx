import React from "react";

export const NewProduct = ({ title, img1, img2, btn }) => {
  return (
    <div className="bg-black text-white py-12 container pt=[70px]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="title pt-[50px]">
            <h2 className="text-[50px]">{title}</h2>
            <button className="bg-yellow-400 text-black py-2 px-4 rounded-full mb-8 mt-[15px]">
              {btn}
            </button>
          </div>

          <div className="flex space-x-4">
            <img
              src={img1}
              alt="Product 1"
              className="w-[400px] h-auto rounded"
            />
            <img
              src={img2}
              alt="Product 2"
              className="w-[400px] h-auto rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
