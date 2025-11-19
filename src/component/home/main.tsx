"use client";

import { useAppContext } from "@/context/product-context";
import CardFilter from "../card/card-filter";
import CardTravel from "../card/card-travel";
import { ChangeEvent, useState } from "react";
import { travelProducts } from "@/data/villa";

const Main = () => {
  const { products } = useAppContext();
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("latest");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  let filteredProducts = products.filter((item) => {
    const match = search.toLowerCase();

    return (
      item.title.toLowerCase().includes(match) ||
      item.category.toLowerCase().includes(match) ||
      item.location.toLowerCase().includes(match)
    );
  });

  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.currentPrice - b.currentPrice
    );
  }

  if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.currentPrice - a.currentPrice
    );
  }

  if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating
    );
  }

  return (
    <main className="px-6 md:px-10 mb-10 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <h3 className="text-2xl font-semibold text-gray-800">
          All Available Resorts in West Indies
        </h3>

        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Search"
          className="rounded-2xl w-2/5 px-5 py-1 border border-zinc-300"
        />
        <div className="flex items-center gap-2 text-gray-600 text-sm border border-gray-300 rounded-md px-3 py-1 bg-white">
          <span>Sort by:</span>
          <select
            onChange={handleSort}
            value={sortBy}
            className="bg-transparent focus:outline-none"
          >
            <option value="latest">Latest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Two-Column Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filter Column */}
        <div className="lg:w-1/4">
          <CardFilter />
        </div>

        {/* Cards Column */}
        <div className="flex-1 flex flex-col gap-6">
          {filteredProducts.map((item, index) => (
            <CardTravel key={index} product={item} />
          ))}
        </div>
      </div>

      {/* Pagination (OUTSIDE the card div) */}
      <div className="flex justify-end mt-4">
        <div className="flex items-center gap-2 text-sm ">
          <button className="px-3 py-1 rounded-md font-medium">
            &lt; Previous
          </button>

          <div className="flex items-center gap-1 text-gray-700">
            <button className="px-3 py-1 rounded-md bg-blue-600 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded-md">2</button>
            <button className="px-3 py-1 rounded-md">3</button>
            <button className="px-3 py-1 rounded-md">4</button>
            <button className="px-3 py-1 rounded-md">5</button>
            <button className="px-3 py-1 rounded-md">6</button>
            <button className="px-3 py-1 rounded-md">7</button>
            <button className="px-3 py-1 rounded-md">8</button>
            <button className="px-3 py-1 rounded-md">9</button>
            <button className="px-3 py-1 rounded-md">10</button>
          </div>

          <button className="px-3 py-1 rounded-md font-medium">
            Next &gt;
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
