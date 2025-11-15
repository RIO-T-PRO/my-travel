"use client";

import { useAppContext } from "@/context/product-context";
import { travelProducts } from "@/data/villa";
import Link from "next/link";
import { useEffect, useState } from "react";

const CardFilter = () => {
  const categories = [...new Set(travelProducts.map((item) => item.category))];
  const locations = [...new Set(travelProducts.map((item) => item.location))];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { setProducts } = useAppContext();

  const toggleCategory = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    applyFilter();
  }, [selectedCategories]);

  const applyFilter = () => {
    const filtered = travelProducts.filter((item) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category);

      return categoryMatch;
    });

    setProducts(filtered);
  };

  return (
    <div className="rounded-2xl border border-gray-400 bg-white shadow-sm ">
      {/* Filter by header */}
      <div className="flex flex-col gap-5 p-5">
        <span className="text-lg font-semibold text-gray-800">Filter by:</span>
      </div>

      {/* Divider after Filter by */}
      <div className="w-full border-b border-gray-300 my-3"></div>

      <div className="flex flex-col gap-6 p-5">
        {/* Category Section */}
        <div>
          <span className="text-base font-medium text-gray-700">Category</span>
          <ul className="flex flex-col gap-2 mt-2 text-sm text-gray-700">
            {categories.map((category, index) => (
              <li key={index} className="flex justify-between items-center">
                <label className="flex items-center gap-1">
                  <input
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    type="checkbox"
                  />
                  <span>{category}</span>
                </label>
                <span className="text-gray-500">
                  {
                    travelProducts.filter((item) => item.category === category)
                      .length
                  }
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Location Section */}
        <div>
          <span className="text-base font-medium text-gray-700">Location</span>
          <ul className="flex flex-col gap-2 mt-2 text-sm text-gray-700">
            {locations.map((location, index) => (
              <li key={index} className="flex justify-between items-center">
                <label className="flex items-center gap-1">
                  <input type="checkbox" /> <span>{location}</span>
                </label>
                <span className="text-gray-500">
                  {
                    travelProducts.filter((item) => item.location === location)
                      .length
                  }
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reviews Section */}
        <div>
          <span className="text-base font-medium text-gray-700">Reviews</span>
          <ul className="flex flex-col gap-2 mt-2 text-sm text-gray-700">
            {[1, 2, 3, 4, 5].map((review, index) => (
              <li key={index} className="flex justify-between items-center">
                <label className="flex items-center gap-1">
                  <input type="checkbox" /> <span>{review}</span>
                </label>
                <span className="text-gray-500">
                  {
                    travelProducts.filter(
                      (item) => Math.floor(item.rating) === review
                    ).length
                  }
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Languages Section */}
        {/* <div>
          <span className="text-base font-medium text-gray-700">Languages</span>
          <ul className="flex flex-col gap-2 mt-2 text-sm text-gray-700">
            <li className="flex justify-between items-center">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> <span>English</span>
              </label>
              <span className="text-gray-500">197</span>
            </li>
            <li className="flex justify-between items-center">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> <span>French</span>
              </label>
              <span className="text-gray-500">100</span>
            </li>
            <li className="flex justify-between items-center">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> <span>Spanish</span>
              </label>
              <span className="text-gray-500">27</span>
            </li>
            <li className="flex justify-between items-center">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> <span>Japanese</span>
              </label>
              <span className="text-gray-500">200</span>
            </li>
            <li className="flex justify-between items-center">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> <span>Italian</span>
              </label>
              <span className="text-gray-500">144</span>
            </li>
            <li className="flex justify-between items-center">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> <span>Brazil</span>
              </label>
              <span className="text-gray-500">323</span>
            </li>
            <li className="flex justify-between items-center">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> <span>Chinese</span>
              </label>
              <span className="text-gray-500">323</span>
            </li>
            <li className="flex justify-between items-center">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> <span>Russian</span>
              </label>
              <span className="text-gray-500">323</span>
            </li>
            <li className="flex justify-between items-center">
              <label className="flex items-center gap-1">
                <input type="checkbox" /> <span>Korean</span>
              </label>
              <span className="text-gray-500">323</span>
            </li>
          </ul>
        </div> */}

        {/* Show more link */}
        <Link href="#">
          <span className="text-blue-600 font-medium text-sm cursor-pointer">
            Show more
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CardFilter;
