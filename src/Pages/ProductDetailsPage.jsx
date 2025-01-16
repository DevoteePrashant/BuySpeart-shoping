import React, { useState } from 'react'

function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1);
  // State to manage the main image source
  const [mainImageSrc, setMainImageSrc] = useState(
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080'
  );

  // Function to change the main image
  const changeImage = (newSrc) => {
    setMainImageSrc(newSrc);
  };

  const handleQuantityChange = (operation) => {
    setQuantity((prev) =>
      operation === "increment" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };
  return (
<div class="bg-gray-100">
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-wrap md:flex-nowrap -mx-4">
   

          {/* Left Section: Images */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img
              src={mainImageSrc}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {/* Thumbnails */}
              {[
                "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080",
                "https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
                "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
                "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  onClick={() => changeImage(src)}
                />
              ))}
            </div>
          </div>

   
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">Organizer for Mockup</h2>
            <p className="text-gray-600 mb-4">PlayStation 5 Controller Skin</p>
            <div className="mb-4">
              <span className="text-xl font-bold mr-2">₹560.00</span>
              <span className="text-green-500 font-semibold">In Stock</span>
            </div>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-6 h-6 ${i < 4 ? "text-yellow-500" : "text-gray-300"}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.627 2.826c-.996.608-2.231-.29-1.96-1.425l1.257-5.273L2.553 10c-.887-.76-.415-2.212.749-2.305l5.404-.434L10.788 3z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">(150 Reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">
              High-quality vinyl with air channel adhesive for easy bubble-free installation.
            </p>

            {/* Color Options */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Colours:</h3>
              <div className="flex space-x-2">
                {["bg-red-500", "bg-blue-500"].map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 ${color} rounded-full focus:outline-none focus:ring`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Size:</h3>
              <div className="flex space-x-2">
                {["XS", "S", "M", "L", "XL"].map((size, index) => (
                  <button
                    key={index}
                    className={`px-[12px] py-[6px] border rounded-md ${
                      size === "M" ? "bg-black text-white" : "bg-white text-black border-gray"
                    }  transition`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-[25px] flex items-center gap-[15px]">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="px-[12px] py-[6px] border border-gray rounded-md hover:bg-gray focus:ring focus:ring-indigo focus:outline-none transition"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-[50px] text-center border border-gray rounded-md"
              />
              <button
                onClick={() => handleQuantityChange("increment")}
                className="px-[12px] py-[6px] border border-gray rounded-md hover:bg-gray focus:ring focus:ring-indigo focus:outline-none transition"
              >
                +
              </button>
            </div>

            {/* Buttons */}
            <div className="flex space-x-[15px] mb-[25px]">
            <button className="mt-4 bg-red-600 text-white  px-6 py-2 rounded-sm hover:bg-red-600">
                          Buy Now!
                        </button>
                        <button className="mt-4 bg-blue-500 text-white  px-6 py-2 rounded-sm">
                          Wishlist
                        </button>
            </div>

            {/* Delivery Info */}
            <ul className="list-none space-y-[10px] text-sm text-gray-dark">
              <li>🚚 Free Delivery</li>
              <li>🔄 Return Delivery (7 Days Returns)</li>
            </ul>

            {/* Description */}
            <h3 className="mt-[30px] text-lg font-semibold">Description:</h3>
            <ul className="list-disc pl-[15px] mt-[10px] space-y-[5px] text-sm text-gray-dark">
              {[
                "Georgette lucknowi sequence work rosy brown lehenga choli for pretest younger women.",
                "This delightful and charming rosy pink lehenga is made of georgette material decorated with thread zari sequence embroidered work.",
                "Completed with full sleeves georgette choli in a rosy brown color made of thread zari sequence embroidered work.",
                "This functional lehenga choli also comes with a similar color georgette dupatta garnished with moti lace border stone work.",
                "Georgette lucknowi sequence work rosy brown lehenga choli for pretest younger women.",
                "This delightful and charming rosy pink lehenga is made of georgette material decorated with thread zari sequence embroidered work.",
                "Completed with full sleeves georgette choli in a rosy brown color made of thread zari sequence embroidered work.",
                "This functional lehenga choli also comes with a similar color georgette dupatta garnished with moti lace border stone work."
                
              ].map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default ProductDetailsPage