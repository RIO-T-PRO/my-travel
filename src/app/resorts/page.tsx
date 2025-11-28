"use client";

import { useState } from "react";
import { resorts } from "@/lib/data";

export default function ResortsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const locations = [...new Set(resorts.map((resort) => resort.location))];
  const categories = [...new Set(resorts.map((resort) => resort.category))];

  const toggleLocation = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const resortPerTabs = 4;
  const numberOfTabs = Math.ceil(resorts.length / resortPerTabs);
  const tabs = Array.from({ length: numberOfTabs }, (_, i) => i + 1);

  const filteredResort = resorts.filter((resort) => {
    const matchLocation =
      selectedLocations.length === 0 ||
      selectedLocations.includes(resort.location);

    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(resort.category);

    return matchLocation && matchCategory;
  });

  const startIndex = (currentPage - 1) * resortPerTabs;
  const endIndex = startIndex + resortPerTabs;
  const displayedFilteredResorts = filteredResort.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, numberOfTabs));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <main>
      {/* Hero Search Section */}
      <section className="relative bg-slate-700">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&h=400&fit=crop"
            alt="Resort pool"
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Personalize Trips
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We help you to find the best choices for your next travel
            destination
          </p>

          <div className="bg-white rounded-lg p-4 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block text-left">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="West Indies"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block text-left">
                  Check-in
                </label>
                <input
                  type="text"
                  placeholder="18 Aug 2023"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block text-left">
                  Check-out
                </label>
                <input
                  type="text"
                  placeholder="22 Aug 2023"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <button className="bg-primary text-white flex items-center justify-center py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors self-end">
                <span className="material-icons-outlined mr-2">search</span>
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white dark:bg-card-dark p-6 rounded-lg sticky top-24 border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Filter by:
                </h3>
                <button className="text-sm text-primary hover:underline">
                  Clear all
                </button>
              </div>

              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Category
                  </h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleCategory(category)}
                            className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/50"
                          />
                          <span className="ml-2 text-slate-600 dark:text-slate-300">
                            {category}
                          </span>
                        </div>
                        <span className="text-sm text-slate-400">
                          {
                            resorts.filter((item) => item.category === category)
                              .length
                          }
                        </span>
                      </label>
                    ))}
                  </div>
                  <button className="text-sm text-primary hover:underline mt-2">
                    Show More
                  </button>
                </div>

                {/* Location Filter */}
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Location
                  </h4>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <label
                        key={location}
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center">
                          <input
                            checked={selectedLocations.includes(location)}
                            onChange={() => toggleLocation(location)}
                            type="checkbox"
                            className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/50"
                          />
                          <span className="ml-2 text-slate-600 dark:text-slate-300">
                            {location}
                          </span>
                        </div>
                        <span className="text-sm text-slate-400">
                          {
                            resorts.filter((item) => item.location === location)
                              .length
                          }
                        </span>
                      </label>
                    ))}
                  </div>
                  <button className="text-sm text-primary hover:underline mt-2">
                    Show More
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Resort Results */}
          <div className="lg:col-span-3">
            <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                All Available Resort in West Indies
              </h2>
              <div className="flex items-center">
                <span className="text-sm text-slate-500 dark:text-slate-400 mr-2">
                  Sort by:
                </span>
                <select className="bg-white dark:bg-card-dark border-slate-300 dark:border-slate-600 rounded-md shadow-sm text-sm focus:border-primary focus:ring-primary/50 px-3 py-2">
                  <option>Latest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayedFilteredResorts.map((resort) => (
                <div
                  key={resort.id}
                  className="bg-white dark:bg-card-dark rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
                >
                  {resort.discount && (
                    <div className="absolute z-10 mt-4 ml-4">
                      <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {resort.discount}% Discount
                      </span>
                    </div>
                  )}
                  {resort.roomLeft && (
                    <div className="absolute z-10 mt-4 ml-4">
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        Only {resort.roomLeft} rooms left
                      </span>
                    </div>
                  )}

                  <div className="relative h-48">
                    <img
                      src={resort.images[0]}
                      alt={resort.name}
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {resort.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`material-icons-outlined text-sm ${
                              i < Math.floor(resort.rating)
                                ? "text-yellow-400"
                                : "text-slate-300"
                            }`}
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        {resort.rating}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        (from {resort.reviewCount} reviews)
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                      "{resort.description}" - by {resort.author}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-semibold text-slate-900 dark:text-white">
                          {resort.roomType}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {resort.roomDetails}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900 dark:text-white">
                          Breakfast{" "}
                          {resort.breakfastIncluded
                            ? "included"
                            : "not included"}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          for {resort.adults} adults
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div>
                        {resort.originalPrice !== resort.discountedPrice && (
                          <p className="text-sm text-slate-400 line-through">
                            ${resort.originalPrice.toFixed(2)}
                          </p>
                        )}
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">
                          ${resort.discountedPrice.toFixed(2)}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {resort.nights} nights & {resort.adults} adults
                        </p>
                      </div>
                      <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center">
                        See Availability
                        <span className="material-icons-outlined text-sm ml-1">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 pt-8">
              <button
                onClick={handlePrevious}
                className="flex items-center px-3 py-1 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <span className="material-icons-outlined text-lg mr-1">
                  arrow_back
                </span>
                Previous
              </button>
              {tabs.map((tabs) => (
                <button
                  key={tabs}
                  onClick={() => setCurrentPage(tabs)}
                  className={`px-3 py-1 rounded-md  ${
                    currentPage === tabs
                      ? "bg-primary text-white"
                      : " text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
                >
                  {tabs}
                </button>
              ))}
              <span className="text-slate-500 dark:text-slate-400">...</span>
              <button
                onClick={handleNextPage}
                className="flex items-center px-3 py-1 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                Next
                <span className="material-icons-outlined text-lg ml-1">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
