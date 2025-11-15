import React from "react";
import { FaBed, FaUsers, FaStar, FaArrowRight } from "react-icons/fa";

const CardTravel = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row gap-6 px-6 py-6">
      {/* Image Section */}
      <div className="max-w-md relative rounded-2xl overflow-hidden">
        <img
          src="/images/travelone.jpg"
          className="w-full h-64 md:h-full object-cover rounded-2xl"
          alt="Luxury Sunshine Beach Resort"
        />
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-xl">
          Only 12 rooms left
        </span>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col gap-2.5">
        {/* Title and Rating */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800">
            Luxury Sunshine Beach Resort
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="flex gap-1 text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <span className="text-gray-600 text-sm">
              4.8/5 (from 667 reviews)
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="flex gap-2">
          <div className="w-px bg-gray-300"></div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-600 text-base line-clamp-2">
              Cozy beach resort with modern amenities and breathtaking views.
            </p>
            <span className="text-sm font-medium">Name of the property</span>
          </div>
        </div>

        {/* Room Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-medium">Economy Double room</span>
            <div className="text-gray-600 flex items-center gap-1">
              <FaBed />1 large double bed
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-medium">Breakfast included</span>
            <div className="text-gray-600 flex items-center gap-1">
              <FaUsers />
              for 2 adults
            </div>
          </div>
        </div>

        {/* Price & Availability */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-1">
          {/* Price & Details */}
          <div className="flex flex-col gap-1.5">
            <div className="flex gap-2 text-gray-800 text-xl font-semibold">
              <span>$999.99</span>
              <span className="line-through text-red-500">$1999.99</span>
            </div>
            <span className="text-gray-600 text-sm">4 nights & 2 adults</span>
          </div>

          {/* Button */}
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg cursor-pointer flex items-center gap-2 mt-3 md:mt-0">
            See Availability
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTravel;
