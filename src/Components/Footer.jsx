import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Subscription Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Exclusive</h3>
          <p className="mb-4">Get 10% off your first order</p>
          <form className="flex items-center  md:m-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-300"
            >
              &rarr;
            </button>
          </form>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-center">Support</h3>
          <p className="text-center">Surat, Gujarat</p>
          <p className="text-center">buyspeart@gmail.com</p>
          <p className="text-center">+91 99091 93962</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-center">Account</h3>
          <ul className="space-y-2 text-center">
            <li><a href="/Acount" className="hover:underline">My Account</a></li>
            <li><a href="/Login" className="hover:underline">Login / Register</a></li>
            <li><a href="/Cart" className="hover:underline">Cart</a></li>
            <li><a href="/Wishlist" className="hover:underline">Wishlist</a></li>
            <li><a href="/Ourproduct" className="hover:underline">Shop</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-center">Quick Link</h3>
          <ul className="space-y-2 text-center">
            <li><a href="/" className="hover:underline text-center">Privacy Policy</a></li>
            <li><a href="/" className="hover:underline text-center">Terms Of Use</a></li>
            <li><a href="/" className="text-center hover:underline text-center">Contact</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-center text-lg font-bold mb-4">Follow us on</h3>
          <ul className="space-y-2">
    <li className="mt-8  border-gray-700 pt-4 flex justify-center items-center  md:m-auto">
      <a href="/" aria-label="Facebook" className="flex items-center justify-center md:justify-start hover:underline">
        <FaFacebook className="mr-2" /> Facebook
      </a>
    </li>
    <li className="mt-8  border-gray-700 pt-4 flex justify-center items-center  md:m-auto">
      <a href="/" aria-label="Twitter" className="flex items-center justify-center md:justify-start hover:underline">
        <FaTwitter className="mr-2" /> Twitter
      </a>
    </li>
    <li className="mt-8  border-gray-700 pt-4 flex justify-center items-center  md:m-auto">
      <a href="/" aria-label="Instagram" className="flex items-center justify-center md:justify-start hover:underline">
        <FaInstagram className="mr-2" /> Instagram
      </a>
    </li>
    <li className="mt-8  border-gray-700 pt-4 flex justify-center items-center  md:m-auto">
      <a href="/" aria-label="LinkedIn" className="flex items-center justify-center md:justify-start hover:underline">
        <FaLinkedin className="mr-2" /> LinkedIn
      </a>
    </li>
  </ul>
        </div>
      </div>
   {/* Footer Bottom Section */}
<div className="mt-8  border-gray-700 pt-4 flex justify-center items-center  md:m-auto">
  <p className="text-center">&copy; Copyright Buyspeart 2025. All rights reserved.</p>
</div>
    </footer>
  );
};

export default Footer;
