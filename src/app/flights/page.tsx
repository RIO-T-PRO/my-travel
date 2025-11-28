"use client";

import { flights } from "@/lib/data";
import { useState } from "react";

export default function FlightsPage() {
  const [selectedStops, setSelectedStops] = useState<number[]>([]);
  const [selectedAirlines, setSelectedAirlines] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const airlines = [...new Set(flights.map((flight) => flight.airline))];
  const prices = [...new Set(flights.map((flight) => flight.price))];
  const maxPrice = Math.max(...prices);

  const [priceRange, setPriceRange] = useState(maxPrice);

  const toggleStop = (stops: number) => {
    setSelectedStops((prev) =>
      prev.includes(stops)
        ? prev.filter((stop) => stop !== stops)
        : [...prev, stops]
    );
  };

  const toggleAirline = (airlines: string) => {
    setSelectedAirlines((prev) =>
      prev.includes(airlines)
        ? prev.filter((airline) => airline !== airlines)
        : [...prev, airlines]
    );
  };

  const getDurationMinutes = (duration: string) => {
    const match = duration.match(/(\d+)h\s*(\d+)?m?/); // match "7h 30m"
    if (!match) return 0;
    const hours = parseInt(match[1], 10);
    const minutes = match[2] ? parseInt(match[2], 10) : 0;
    return hours * 60 + minutes;
  };

  const getDepartureMinutes = (time: string) => {
    const [hourMin, modifier] = time.split(" "); // "10:45 AM" => ["10:45", "AM"]
    const [hours, minutes] = hourMin.split(":").map(Number);
    let hrs = hours % 12;
    if (modifier.toUpperCase() === "PM") hrs += 12;
    return hrs * 60 + minutes;
  };

  const handleSort = (value: string) => {
    if (value === "bestPrice") {
      flights.sort((a, b) => a.price - b.price);
    } else if (value === "fatest") {
      flights.sort(
        (a, b) =>
          getDurationMinutes(a.duration) - getDurationMinutes(b.duration)
      );
    } else if (value === "departureTime") {
      flights.sort(
        (a, b) =>
          getDepartureMinutes(a.departure) - getDepartureMinutes(a.departure)
      );
    }
  };

  const flightsPerTab = 5;
  const numberOfTabs = Math.ceil(flights.length / flightsPerTab);
  const tabs = Array.from({ length: numberOfTabs }, (_, i) => i + 1);

  const filteredFlights = flights.filter((flight) => {
    const matchesStops =
      selectedStops.length === 0 || selectedStops.includes(flight.stops);
    const matchesAirline =
      selectedAirlines.length === 0 ||
      selectedAirlines.includes(flight.airline);
    const matchesPrice = flight.price <= priceRange;
    return matchesStops && matchesAirline && matchesPrice;
  });

  const startIndex = (currentPage - 1) * flightsPerTab;
  const endIndex = startIndex + flightsPerTab;
  const displayedFlights = filteredFlights.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <main>
      {/* Hero Search Section */}
      <section className="relative bg-primary-dark">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=400&fit=crop"
            alt="Travel background"
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            It's time for a new adventure!
          </h1>
          <p className="text-lg md:text-xl text-primary-light mb-8 max-w-2xl mx-auto">
            Let's find the perfect flight for your next journey.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative lg:col-span-1">
                <label className="text-sm font-medium text-white/80 mb-2 block text-left">
                  Origin
                </label>
                <div className="flex items-center bg-white/10 rounded-lg p-3">
                  <span className="material-icons-outlined text-white/70 mr-3">
                    flight_takeoff
                  </span>
                  <input
                    type="text"
                    placeholder="New York (JFK)"
                    className="w-full bg-transparent border-0 p-0 text-white placeholder-white/70 focus:ring-0 outline-none"
                  />
                </div>
              </div>

              <div className="relative lg:col-span-1">
                <label className="text-sm font-medium text-white/80 mb-2 block text-left">
                  Destination
                </label>
                <div className="flex items-center bg-white/10 rounded-lg p-3">
                  <span className="material-icons-outlined text-white/70 mr-3">
                    flight_land
                  </span>
                  <input
                    type="text"
                    placeholder="London (LHR)"
                    className="w-full bg-transparent border-0 p-0 text-white placeholder-white/70 focus:ring-0 outline-none"
                  />
                </div>
              </div>

              <div className="relative lg:col-span-1">
                <label className="text-sm font-medium text-white/80 mb-2 block text-left">
                  Departure
                </label>
                <div className="flex items-center bg-white/10 rounded-lg p-3">
                  <span className="material-icons-outlined text-white/70 mr-3">
                    calendar_today
                  </span>
                  <input
                    type="text"
                    placeholder="Select date"
                    className="w-full bg-transparent border-0 p-0 text-white placeholder-white/70 focus:ring-0 outline-none"
                  />
                </div>
              </div>

              <div className="relative lg:col-span-1">
                <label className="text-sm font-medium text-white/80 mb-2 block text-left">
                  Passengers
                </label>
                <div className="flex items-center bg-white/10 rounded-lg p-3">
                  <span className="material-icons-outlined text-white/70 mr-3">
                    person_outline
                  </span>
                  <input
                    type="text"
                    placeholder="2 Adults"
                    className="w-full bg-transparent border-0 p-0 text-white placeholder-white/70 focus:ring-0 outline-none"
                  />
                </div>
              </div>

              <button className="bg-primary text-white w-full flex items-center justify-center py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors lg:col-span-1 lg:self-end">
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
                <button
                  onClick={() => {
                    setSelectedStops([]);
                    setSelectedAirlines([]);
                    setPriceRange(maxPrice);
                  }}
                  className="text-sm text-primary hover:underline"
                >
                  Clear all
                </button>
              </div>

              <div className="space-y-6">
                {/* Stops Filter */}
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Stops
                  </h4>
                  <div className="space-y-2">
                    {[0, 1, 2].map((stops) => (
                      <label
                        key={stops}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedStops.includes(stops)}
                          onChange={() => toggleStop(stops)}
                          className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/50 bg-slate-100 dark:bg-slate-700"
                        />
                        <span className="ml-2 text-slate-600 dark:text-slate-300">
                          {stops === 0
                            ? "Non-stop"
                            : stops === 1
                            ? "1 stop"
                            : "2+ stops"}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Airlines Filter */}
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Airlines
                  </h4>
                  <div className="space-y-2">
                    {airlines.map((airline) => (
                      <label
                        key={airline}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedAirlines.includes(airline)}
                          onChange={() => toggleAirline(airline)}
                          className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary/50 bg-slate-100 dark:bg-slate-700"
                        />
                        <span className="ml-2 text-slate-600 dark:text-slate-300">
                          {airline}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">
                    Price Range
                  </h4>
                  <input
                    type="range"
                    min="200"
                    max="1500"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mt-2">
                    <span>$200</span>
                    <span>${priceRange}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Flight Results */}
          <div className="lg:col-span-3">
            <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                {filteredFlights.length} flights found
              </h2>
              <div className="flex items-center">
                <span className="text-sm text-slate-500 dark:text-slate-400 mr-2">
                  Sort by:
                </span>
                <select
                  onChange={(e) => handleSort(e.target.value)}
                  className="bg-white dark:bg-card-dark border-slate-300 dark:border-slate-600 rounded-md shadow-sm text-sm focus:border-primary focus:ring-primary/50 px-3 py-2"
                >
                  <option value="bestPrice">Best price</option>
                  <option value="fatest">Fastest</option>
                  <option value="departureTime">Departure time</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {displayedFlights.map((flight) => (
                <div
                  key={flight.id}
                  className="bg-white dark:bg-card-dark p-4 rounded-lg border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center gap-6"
                >
                  <div className="grow w-full">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={flight.airlineLogo}
                          alt={flight.airline}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">
                            {flight.airline}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {flight.route}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-center">
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            {flight.departureTime}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {flight.origin}
                          </p>
                        </div>

                        <div className="text-center">
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {flight.duration}
                          </div>
                          <div className="w-20 h-px bg-slate-200 dark:bg-slate-700 my-1 relative">
                            <span className="material-icons-outlined text-primary text-base absolute -right-2 -top-2.5 transform rotate-90">
                              flight
                            </span>
                          </div>
                          <div
                            className={`text-xs font-medium ${
                              flight.stops === 0
                                ? "text-primary"
                                : "text-slate-500 dark:text-slate-400"
                            }`}
                          >
                            {flight.stops === 0
                              ? "Non-stop"
                              : `${flight.stops} stop${
                                  flight.stops > 1 ? "s" : ""
                                } ${
                                  flight.stopLocation
                                    ? `(${flight.stopLocation})`
                                    : ""
                                }`}
                          </div>
                        </div>

                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            {flight.arrivalTime}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {flight.destination}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-auto shrink-0 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700 pt-4 md:pt-0 md:pl-6 mt-4 md:mt-0">
                    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-2">
                      <div className="text-left md:text-right">
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">
                          ${flight.price}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          per person
                        </div>
                      </div>
                      <button className="bg-primary text-white py-2 px-4 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors flex items-center">
                        Select
                        <span className="material-icons-outlined text-base ml-1">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 pt-6">
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
                  className={`px-3 py-1 rounded-md
                    ${
                      currentPage === tabs
                        ? "bg-primary text-white"
                        : " text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                    }
                    `}
                >
                  {tabs}
                </button>
              ))}
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
