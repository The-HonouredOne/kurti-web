import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FiHeart, FiSearch } from "react-icons/fi";
import { BsHandbagFill } from "react-icons/bs";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      {/* Topbar */}
      {/* Topbar */}
      <div className="top-nav bg-gray-100 text-xs">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center 
                  gap-2 sm:gap-0 px-4 sm:px-6 lg:px-10 py-2">

          {/* Left message */}
          <h1 className="text-white text-center sm:text-left">
            <span className="font-medium">Free </span>
            Shipping Over $99 | USA Customers no traffic
          </h1>

          {/* Right selector */}
          <div className="flex items-center gap-2">
            <h1 className="font-medium text-white text-sm">United States (USD$)</h1>
            <select className="bg-black text-white rounded px-2 py-1 text-xs sm:text-sm">
              <option value="America">America</option>
              <option value="India">India</option>
            </select>
          </div>
        </div>
      </div>


      {/* Navbar */}
      <div className=" main-nav shadow-md shadow-gray-300 pb-3 pt-2 sticky top-0 z-50 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">

          {/* Desktop: grid layout */}
          <div className="hidden md:grid grid-cols-3 items-center gap-4 mt-2">
            {/* Logo */}
            <h1 className="logo text-pink-200 text-5xl font-bold drop-shadow-lg">
              ᴷᵘʳᵗⁱQ
            </h1>

            {/* Search (center) */}
            <div className="relative mx-auto w-full max-w-md">
              <FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-pink-100 py-1 pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>

            {/* Icons (right) */}
            <div className="flex justify-end gap-6">
              <FiHeart size={22} color="#E68190" />
              <BsHandbagFill size={22} color="#E68190" />
              <CgProfile size={22} color="#E68190" />
            </div>
          </div>

          {/* Mobile: logo + icons */}
          <div className="flex md:hidden justify-between items-center mt-5">
            <h1 className="logo text-pink-200 text-3xl font-bold drop-shadow-lg">
              ᴷᵘʳᵗⁱQ
            </h1>
            <div className="flex gap-4">
              <FiHeart size={24} color="#E68190" />
              <BsHandbagFill size={24} color="#E68190" />
              <CgProfile size={24} color="#E68190" />
            </div>
          </div>

          {/* Mobile search below */}
          <div className="relative mt-3 md:hidden">
            <FiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 py-1 pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
