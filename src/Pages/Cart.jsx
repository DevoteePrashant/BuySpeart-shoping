import React, { useState } from "react";
import img from '../images/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png'
import {Link} from 'react-router' ;
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Organizer for Mockup", price: 500, quantity: 1 },
    { id: 2, name: "Organizer for Mockup", price: 500, quantity: 2 },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) || 1 } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-3">Product</th>
              <th className="border border-gray-300 px-4 py-3">Price</th>
              <th className="border border-gray-300 px-4 py-3">Quantity</th>
              <th className="border border-gray-300 px-4 py-3">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="bg-white">
                <td className="border border-gray-300 px-4 py-3 flex items-center space-x-4">
             
                  <img
                    src={img}
                    alt={item.name}
                    className="w-6 h-6 rounded-md"
                  />
                       <button
                    className="text-red-500 font-bold text-lg"
                    onClick={() =>
                      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
                    }
                  >
                    ✖
                  </button>
                  <span className="text-gray-600 w-36">{item.name}</span>
                </td>
                <td className="border border-gray-300 px-4 py-3">₹{item.price}</td>
                <td className="border border-gray-300 px-4 py-3">
                  <select
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  ₹{item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Return to Shop Button */}
        <Link to="/Ourproduct"><button className="bg-white border border-gray-400 text-black px-6 py-2 rounded-md hover:bg-gray-100 w-full md:w-auto">
          Return To Shop
        </button></Link>

        {/* Update Cart Button */}
        <button className="bg-white border border-gray-400 text-black px-6 py-2 rounded-md hover:bg-gray-100 w-full md:w-auto">
          Update Cart
        </button>
      </div>

      {/* Coupon and Cart Total */}
      <div className="mt-8 grid grid-cols-[1fr] md:grid-cols-[2fr_1fr] gap-x-8 gap-y-6">
        {/* Coupon Section */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-gray-400 rounded px-4 py-[10px]"
          />
          <button className="bg-blue-600 text-white px-[20px] py-[10px] rounded-md sm:w-auto">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total Section */}
        <div className="p-[20px] bg-white border border-gray-300 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold mb-[15px]">Cart Total</h2>
          <div className="flex justify-between items-center mb-[10px]">
            <span>Subtotal:</span>
            <span>₹{calculateSubtotal()}</span>
          </div>
          <div className="flex justify-between items-center mb-[10px]">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="flex justify-between items-center font-bold mt-[10px]">
            <span>Total:</span>
            <span>₹{calculateSubtotal()}</span>
          </div>

          {/* Checkout Button */}
          <button className="mt-[20px] w-full bg-blue-600 text-white px-auto py-[10px] rounded-md">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
