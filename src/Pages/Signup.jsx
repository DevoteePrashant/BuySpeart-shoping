
import React from 'react';
// import '../components/Header.css'; // We'll style it separately
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


import { useState } from "react";


import { Link } from "react-router";
// import Profile from '../pages/Profile';

const Signup = () => {

return (
    <>
<div class="flex items-center justify-center min-h-screen bg-gray-100">
<div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Create an account</h2>
    <p class="text-gray-600 text-center mb-4">Enter your details below</p>
    <form>
    
    <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700"> Enter Your Name</label>
        <input type="text"id="name"class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"placeholder="Enter Your Name"/>
    </div>

    
    <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email or Phone Number</label>
        <input type="email"  id="email"class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Email or Phone Number" />
    </div>

    
    <div class="mb-6">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password"id="password"class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Password"
        />
    </div>

    
    <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
        Create Account
    </button>

    <div class="flex items-center justify-center mt-4">
<button type="button" class="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="h-5 w-5 mr-2">
    <path fill="#EA4335" d="M24 9.5c3.9 0 6.5 1.7 8 3.1l6-6C34.6 3.9 29.7 2 24 2 14.8 2 7.1 7.6 4.2 15h7.4c1.6-4.3 5.8-7.5 12.4-7.5z"></path>
    <path fill="#34A853" d="M9.6 28c-.3-.8-.6-1.7-.8-2.5H2v5h7.4C9.1 29.7 9.4 28.9 9.6 28z"></path>
    <path fill="#FBBC05" d="M24 46c5.3 0 10-1.8 13.8-4.9L30.8 35C29.2 36.1 26.8 37 24 37c-6 .1-11-3.9-12.8-10H4v6c3 .7 5 .9 7 .9C13.3 41.6 18.4 46 24 46z"></path>
    <path fill="#4285F4" d="M46,24c0,-1,-0,-2,-0,-3H24v9h12c-1,3,-3,5,-6,6l8,8C43,39,46,32,46,24z"></path>
    </svg>
    Sign up with Google
</button>
</div>


      
      <p class="text-center text-sm text-gray-600 mt-4">
        Already have account? 
        <Link to="/Login"><a href="#" class="text-black hover:underline">Log in</a></Link>
      </p>
    </form>
  </div>
</div>




    </>
  );
};


export default Signup;



