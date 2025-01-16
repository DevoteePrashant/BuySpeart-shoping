
import React from 'react';
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaUser, FaBox, FaTimesCircle, FaStar, FaSignOutAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import ShoppingCartLogo from '../images/image 64.png';


import { useState } from "react";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <><div className="bg-black">
    <div className="max-w-screen-xl mx-auto px-4 py-3 text-white sm:text-center md:px-8">
        <p className="font-medium">
            Free Express Delivery - OFF 50%! <a href="javascript:(0)" className="font-semibold underline duration-150 hover:text-indigo-100 inline-flex items-center gap-x-1">
                Shop Now
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                </svg>
            </a>
        </p>
    </div>
</div>
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
      <div className="flex items-center space-x-2">
  <img src={ShoppingCartLogo} alt="Shopping Cart Logo" className="w-6 h-6" />
  <span className="text-2xl font-bold text-black">BuySpeart</span>
</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600 font-bold"> Home</a>
          <a href="/Ourproduct" className="text-gray-700 hover:text-blue-600 font-bold">Our Products</a>
       
          <a href="/contact" className="text-gray-700 hover:text-blue-600 font-bold">Contact</a>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="text-white bg-black px-3 py-1 rounded-lg hover:bg-blue-600">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
        <a href="/Wishlist">   <FaRegHeart /></a>  
        <div className="relative">
        <a href="/Ourproduct"> <FaShoppingCart className="text-gray-700 text-xl cursor-pointer hover:text-blue-600" /></a>
      
          </div>
        <div className="relative">
      {/* User Icon */}
      <FaUser
        className="text-gray-700 text-xl cursor-pointer hover:text-blue-600"
        onClick={toggleMenu}
      />

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-10 right-0 bg-black text-white rounded-lg shadow-lg p-4 w-52">
          <ul>
          <li className="flex items-center gap-2 mb-2 cursor-pointer hover:text-gray-300">
                  <a href="/" className="flex items-center gap-2 mb-2 cursor-pointer hover:text-gray-300"> <FaHome   />Home</a>
      
            </li>
            <li className="flex items-center gap-2 mb-2 cursor-pointer hover:text-gray-300">
          
      <a href="/contact" className="flex items-center gap-2 mb-2 cursor-pointer hover:text-gray-300">  <IoIosCall    />Contact</a>
             
            </li>
            <li className="flex items-center gap-2 mb-2 cursor-pointer hover:text-gray-300">
            <a href="/Acount" className="flex items-center gap-2 mb-2 cursor-pointer hover:text-gray-300"> <FaUser />
              Manage My Account</a>
            </li>
            <li className="flex items-center gap-2 mb-2 cursor-pointer hover:text-gray-300">
            <a href="/" className="flex items-center gap-2 mb-2 cursor-pointer hover:text-gray-300">  <FaBox />
              My Order </a>
            </li>
            <li className="flex items-center gap-2 mb-2 cursor-pointer hover:text-gray-300">
              <FaTimesCircle />
              My Cancellations
            </li>
            <li className="flex items-center gap-2 mb-2 cursor-pointer hover:text-gray-300">
              <FaStar />
              My Reviews
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
              <FaSignOutAlt />
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
         
        </div>

        {/* Hamburger Menu for Mobile */}
       
      </div>

     
    </header>
    </>
  );
};


export default Header;