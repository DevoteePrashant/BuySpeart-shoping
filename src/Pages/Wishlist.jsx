import React, { useState } from 'react'

import img from '../images/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png';
function Wishlist() {
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Organizer for Mockup", price: 960, oldPrice: 1160, discount: 36 },
    { id: 2, name: "Organizer for Mockup", price: 1960 },
    { id: 3, name: "Organizer for Mockup", price: 550 },
    { id: 4, name: "Organizer for Mockup", price: 750 },
  ]);

  const justForYou = [
    { id: 1, name: "Organizer for Mockup", price: 960, oldPrice: 1160, discount: 35, rating: 4.5 },
    { id: 2, name: "Organizer for Mockup", price: 1160, rating: 4.0 },
    { id: 3, name: "Organizer for Mockup", price: 560, isNew: true, rating: 4.8 },
    { id: 4, name: "Organizer for Mockup", price: 200, rating: 3.9 },
  ];

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };
  return (
    <> <div className="p-6">
    {/* Wishlist Section */}
    <div>
      <h2 className="text-xl font-bold mb-4">Wishlist ({wishlist.length})</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-4 relative">
            {/* Remove Icon */}
            <div
              className="absolute top-2 right-2 text-red-500 cursor-pointer"
              onClick={() => removeItem(item.id)}
            >
              &#128465;
            </div>
            {/* Product Image */}
            <img
              src={img}
              alt={item.name}
              className="w-60 h-50 object-cover rounded-lg m-auto"
            />  
            {/* Product Details */}
            <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="text-blue-600 font-bold">₹{item.price}</span>
              {item.oldPrice && (
                <span className="line-through text-gray-500">₹{item.oldPrice}</span>
              )}
            </div>
            {/* Discount Badge */}
            {item.discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                -{item.discount}%
              </span>
            )}
            {/* Add to Cart Button */}
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      {/* Move All To Bag Button */}
      <button className="mt-6 bg-gray-200 px-4 py-2 rounded-md border  mx-auto text-center block border-gray-400 ms-auto me-auto">
        Move All To Bag
      </button>
    </div>

    {/* Just For You Section */}
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        Just For You
        <span className="ml-2 w-2 h-full bg-blue-600"></span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {justForYou.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-4 relative">
            {/* New or Discount Badge */}
            {item.isNew && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                NEW
              </span>
            )}
            {item.discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                -{item.discount}%
              </span>
            )}
            {/* View Icon */}
            <div className="absolute top-2 right-2 text-gray-500 cursor-pointer">&#128065;</div>
            {/* Product Image */}
            <img
              src={img}
              alt={item.name}
              className="w-60 h-50 object-cover rounded-lg m-auto"
            />
            {/* Product Details */}
            <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="text-blue-600 font-bold">₹{item.price}</span>
              {item.oldPrice && (
                <span className="line-through text-gray-500">₹{item.oldPrice}</span>
              )}
            </div>
            {/* Rating */}
            {item.rating && (
              <div className="flex items-center mt-1 text-yellow-500">
                {"★".repeat(Math.floor(item.rating))}
                {"☆".repeat(5 - Math.floor(item.rating))}
                <span className="ml-1 text-gray-600">({Math.round(item.rating * 10) / 10})</span>
              </div>
            )}
            {/* Add to Cart Button */}
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      {/* See All Button */}
      <button className="mt-6 bg-gray-200 px-4 py-2 rounded-md border border-gray-400 ms-auto  mx-auto text-center block text-center">
        See All
      </button>
    </div>
  </div>

    </>
  )
}

export default Wishlist
