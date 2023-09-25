import React from "react";

export default function BigHeroCard() {
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  return (
    <div className="w-full h-[50vh] bg-white shadow-lg p-4 absolute top-0 z-20">
      <div className="flex flex-col md:flex-row">
        {/* Images Container */}
        <div className="flex-1 flex md:flex-row flex-col justify-between mb-4 md:mb-0">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Featured Property ${index + 1}`}
              className="h-64 object-cover w-full mb-4 md:mb-0 md:w-1/2 rounded"
            />
          ))}
        </div>

        {/* Real Estate Information Container */}
        <div className="flex-1 flex flex-col justify-center md:pl-4">
          <h2 className="text-2xl font-semibold mb-4">Featured Property</h2>
          <p className="text-gray-600">
            Some description about the property. Luxurious and in a prime
            location...
          </p>
          {/* Add more details about the real estate here */}
        </div>
      </div>
    </div>
  );
}
