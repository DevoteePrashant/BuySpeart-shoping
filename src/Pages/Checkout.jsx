import React, { useState } from "react";

const Checkout = () => {
const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    email: "",
});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
};

return (
    <div className="flex flex-col md:flex-row justify-between p-6">
      {/* Billing Details Section */}
    <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
        <form className="space-y-4">
        <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            className="w-full p-2 border border-gray-300 rounded"
            value={billingDetails.firstName}
            onChange={handleInputChange}
        />
        <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            className="w-full p-2 border border-gray-300 rounded"
            value={billingDetails.companyName}
            onChange={handleInputChange}
        />
        <input
            type="text"
            name="streetAddress"
            placeholder="Street Address*"
            className="w-full p-2 border border-gray-300 rounded"
            value={billingDetails.streetAddress}
            onChange={handleInputChange}
        />
        <input
            type="text"
            name="apartment"
            placeholder="Apartment, floor, etc. (optional)"
            className="w-full p-2 border border-gray-300 rounded"
            value={billingDetails.apartment}
            onChange={handleInputChange}
        />
        <input
            type="text"
            name="city"
            placeholder="Town/City*"
            className="w-full p-2 border border-gray-300 rounded"
            value={billingDetails.city}
            onChange={handleInputChange}
        />
        <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number*"
            className="w-full p-2 border border-gray-300 rounded"
            value={billingDetails.phoneNumber}
            onChange={handleInputChange}
        />
        <input
            type="email"
            name="email"
            placeholder="Email Address*"
            className="w-full p-2 border border-gray-300 rounded"
            value={billingDetails.email}
            onChange={handleInputChange}
        />
        <div className="flex items-center">
            <input type="checkbox" id="saveInfo" className="mr-2" />
            <label htmlFor="saveInfo" className="text-sm">
            Save this information for faster check-out next time
            </label>
        </div>
        </form>
    </div>

      {/* Order Summary Section */}
    <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="border border-black p-4 rounded">
        <div className="flex justify-between mb-2">
            <span>Organizer for Mockup</span>
            <span>₹6500</span>
        </div>
        <div className="flex justify-between mb-2">
            <span>Organizer for Mockup</span>
            <span>₹6500</span>
        </div>
        <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>₹6500</span>
        </div>
        <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
        </div>
        <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>₹6500</span>
        </div>
        </div>

        {/* Payment Method */}
        <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Payment Method</h3>
        <div className="flex items-center mb-2">
            <input type="radio" id="online" name="payment" className="mr-2" />
            <label htmlFor="online">Online / Net Banking</label>
        </div>
        <div className="flex items-center">
            <input type="radio" id="cod" name="payment" className="mr-2" />
            <label htmlFor="cod">Cash on delivery</label>
        </div>
        </div>

        {/* Coupon Code */}
        <div className="mt-4 flex items-center">
        <input
            type="text"
            placeholder="Coupon Code"
            className="w-40 p-2 border rounded mr-2 border-black"
        />
        <button className="bg-blue-600 w-20 text-white px-1 py-0 text-xs rounded-full">
            Apply Coupon
        </button>
        </div>

        {/* Place Order Button */}
        <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-full">
        Place Order
        </button>
    </div>
    </div>
);
};

export default Checkout;

