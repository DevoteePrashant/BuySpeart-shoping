import React from 'react';
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-50 p-4 sm:p-6 lg:p-12 space-y-6 lg:space-y-0 ">
    {/* Left Section: Contact Details */}
    <div className="w-full lg:w-1/3 space-y-6">
      {/* Call To Us */}
      <div className="flex items-start space-x-4 p-4 sm:p-6">
        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
          <MdCall size={20} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Call To Us</h2>
          <p className="text-gray-800 font-medium">We are available 24/7, 7 days a week.</p>
          <p className="text-gray-800 font-medium">Phone: +91 99091 93962</p>
        </div>
      </div>

      {/* Write To Us */}
      <div className="flex items-start space-x-4 p-4 sm:p-6">
        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
          <IoMdMail size={20} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Write To Us</h2>
          <p className="text-gray-800">Fill out our form and we will contact you within 24 hours.</p>
          <p className="text-gray-800 font-medium">Email: customer@buyspeart.com</p>
          <p className="text-gray-800 font-medium">Email: support@buyspeart.com</p>
        </div>
      </div>
    </div>

    {/* Right Section: Contact Form */}
    <div className="w-full lg:w-2/3 bg-white shadow-md rounded-md p-4 sm:p-6 lg:p-8 border-black">
      <form className="space-y-4 sm:space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Your Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="+91 12345 67890"
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div> 
  </div>


  );
};

export default Contact;
