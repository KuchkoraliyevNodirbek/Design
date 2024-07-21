import React from "react";
import { FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import Logo from "../../assets/Logo.png";

export const Navbar = () => {
  return (
    <div className="bg-gray-200 ">
      <nav className=" p-4 flex justify-between items-center container">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 mr-8" />
          <ul className="flex space-x-6">
            <li className="text-gray-700 hover:text-gray-900">MEN</li>
            <li className="text-gray-700 hover:text-gray-900">WOMEN</li>
            <li className="text-gray-700 hover:text-gray-900">SALE</li>
            <li className="text-gray-700 hover:text-gray-900">CHILDREN</li>
            <li className="text-gray-700 hover:text-gray-900">COLLECTION</li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <select className="bg-gray-200 border-none focus:ring-0">
              <option>English</option>
              <option>Uzbek</option>
            </select>
          </div>
          <div className="flex space-x-4 text-gray-700">
            <button>
              <FaUser className="text-xl" />
            </button>
            <button>
              <FaHeart className="text-xl" />
            </button>
            <button className="relative">
              <FaShoppingBag className="text-xl" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                2
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
