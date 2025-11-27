"use client";

import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { useState } from "react";

export interface Flight {
  id: number;
  airline: string;
  departure: string;
  arrival: string;
  price: number;
  duration: string;
}

interface BookedFlight {
  flight: Flight;
  passengers: number;
  flightClass: string;
  date: string;
}

const FlightsPage = () => {
  // Mock flight data
  const flights: Flight[] = [
    {
      id: 1,
      airline: "Airways X",
      departure: "New York (JFK)",
      arrival: "London (LHR)",
      price: 750,
      duration: "7h 30m",
    },
    {
      id: 2,
      airline: "SkyFly",
      departure: "Paris (CDG)",
      arrival: "Tokyo (NRT)",
      price: 1200,
      duration: "12h 15m",
    },
    {
      id: 3,
      airline: "Global Airlines",
      departure: "Dubai (DXB)",
      arrival: "Sydney (SYD)",
      price: 950,
      duration: "14h 45m",
    },
    {
      id: 4,
      airline: "AirVista",
      departure: "Los Angeles (LAX)",
      arrival: "Singapore (SIN)",
      price: 1100,
      duration: "17h 20m",
    },
    {
      id: 5,
      airline: "FlyHigh",
      departure: "Berlin (TXL)",
      arrival: "Rome (FCO)",
      price: 350,
      duration: "2h 15m",
    },
  ];

  // User input states
  const [search, setSearch] = useState({ from: "", to: "", date: "" });
  const [passengers, setPassengers] = useState(1);
  const [flightClass, setFlightClass] = useState("Economy");

  // State to store multiple booked flights
  const [bookedFlights, setBookedFlights] = useState<BookedFlight[]>([]);

  // Function to book a flight
  const handleBookFlight = (flight: Flight) => {
    if (!search.date) {
      alert("Please select a date for your flight!");
      return;
    }

    const newBooking: BookedFlight = {
      flight,
      passengers,
      flightClass,
      date: search.date,
    };

    setBookedFlights([...bookedFlights, newBooking]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Flights</h1>

      {/* Search & Options */}
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-md max-w-4xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        <div className="flex flex-col">
          <label className="font-semibold">From</label>
          <input
            type="text"
            placeholder="Departure city"
            value={search.from}
            onChange={(e) => setSearch({ ...search, from: e.target.value })}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">To</label>
          <input
            type="text"
            placeholder="Arrival city"
            value={search.to}
            onChange={(e) => setSearch({ ...search, to: e.target.value })}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Date</label>
          <input
            type="date"
            value={search.date}
            onChange={(e) => setSearch({ ...search, date: e.target.value })}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Passengers</label>
          <input
            type="number"
            min={1}
            max={10}
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Class</label>
          <select
            value={flightClass}
            onChange={(e) => setFlightClass(e.target.value)}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option>Economy</option>
            <option>Business</option>
            <option>First</option>
          </select>
        </div>
      </div>

      {/* Flight Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-lg">{flight.airline}</h2>
              <span className="text-blue-500 font-semibold">
                ${flight.price}
              </span>
            </div>
            <div className="flex items-center justify-between text-gray-700 mb-1">
              <span>
                <FaPlaneDeparture className="inline mr-1" /> {flight.departure}
              </span>
              <span>{flight.duration}</span>
              <span>
                <FaPlaneArrival className="inline mr-1" /> {flight.arrival}
              </span>
            </div>
            <button
              className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition font-semibold"
              onClick={() => handleBookFlight(flight)}
            >
              Book Flight
            </button>
          </div>
        ))}
      </div>

      {/* Display Booked Flights */}
      {bookedFlights.length > 0 && (
        <div className="max-w-6xl mx-auto mt-10">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Your Booked Flights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookedFlights.map((booking, index) => (
              <div
                key={index}
                className="bg-green-100 p-6 rounded-xl shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">
                    {booking.flight.airline}
                  </h3>
                  <span className="text-green-700 font-semibold">
                    ${booking.flight.price}
                  </span>
                </div>
                <div className="flex items-center justify-between text-gray-700 mb-2">
                  <span>
                    <FaPlaneDeparture className="inline mr-1" />{" "}
                    {booking.flight.departure}
                  </span>
                  <span>{booking.flight.duration}</span>
                  <span>
                    <FaPlaneArrival className="inline mr-1" />{" "}
                    {booking.flight.arrival}
                  </span>
                </div>
                <div className="text-gray-800">
                  <p>Date: {booking.date}</p>
                  <p>Passengers: {booking.passengers}</p>
                  <p>Class: {booking.flightClass}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightsPage;
