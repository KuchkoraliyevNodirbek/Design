import React from "react";
import products from "../../DataProduct";

export const Products = () => {
  return (
    <>
      <h1 className="text-3xl font-bold-[50px] mb-4 text-white container pt-[40px]">
        New Products
      </h1>
      <div className="grid grid-cols-4 gap-4 container">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative p-4 border border-gray-200 rounded-lg bg-white"
          >
            {product.discount && (
              <div
                className={`absolute top-2 left-2 px-2 py-1 rounded text-white ${
                  product.discount === "NEW" ? "bg-blue-500" : "bg-red-500"
                }`}
              >
                {product.discount}
              </div>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-xl font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
