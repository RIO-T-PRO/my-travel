import {
  FaBed,
  FaPlane,
  FaHotel,
  FaUtensils,
  FaUser,
  FaCalendarCheck,
  FaCalendarAlt,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="w-full px-4 md:px-10 py-10">
      <div className="relative">
        {/* Background Image */}
        <img
          src="/images/headphone.jpg"
          alt="Travel background"
          className="w-full h-[60vh] md:h-[70vh] object-cover rounded-3xl"
        />

        {/* Text Overlay */}
        <div className="absolute top-5 md:top-5 left-4 md:left-1/2 md:-translate-x-1/2 text-left md:text-center text-white px-2 md:px-4">
          <h3 className="text-3xl md:text-5xl font-bold mb-2">
            Personalize Trips
          </h3>
          <p className="text-sm sm:text-base md:text-lg max-w-2xl">
            Plan your perfect journey from luxurious stays and seamless flights
            to exquisite dining experiences and memorable adventures all in one
            convenient platform. Discover tailored recommendations, explore new
            destinations, and create unforgettable travel memories designed just
            for you and your loved ones.
          </p>
        </div>

        {/* Card Overlay */}
        <div
          className="
            mt-6 sm:mt-6 md:mt-6
            lg:absolute lg:bottom-10 lg:left-1/2 lg:transform lg:-translate-x-1/2
            w-full sm:w-[95%] md:w-[95%] lg:w-[80%]
          "
        >
          {/* Top Buttons */}
          <div className="bg-white shadow-md rounded-t-xl px-4 py-3 md:px-6 md:py-4 flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-4 md:gap-8">
            <button className="flex gap-2 sm:gap-3 items-center text-gray-700 text-sm sm:text-base">
              <FaBed className="text-lg" />
              <span>Stays</span>
            </button>
            <button className="flex gap-2 sm:gap-3 items-center text-gray-700 text-sm sm:text-base">
              <FaPlane className="text-lg" />
              <span>Flight</span>
            </button>
            <button className="flex gap-2 sm:gap-3 items-center text-gray-700 text-sm sm:text-base">
              <FaHotel className="text-lg" />
              <span>Hotel</span>
            </button>
            <button className="flex gap-2 sm:gap-3 items-center text-gray-700 text-sm sm:text-base">
              <FaUtensils className="text-lg" />
              <span>Restaurant</span>
            </button>
          </div>

          {/* Bottom Search Fields */}
          <div className="bg-white shadow-md rounded-b-xl px-4 py-4 md:px-6 md:py-5 mt-px flex flex-col gap-4 md:flex-row md:gap-6 items-center justify-between">
            <div className="flex flex-col md:flex-row w-full md:flex-1 gap-4 md:gap-6">
              {/* Destination */}
              <div className="flex gap-3 items-center w-full md:flex-1 border-b md:border-0 pb-2 md:pb-0">
                <FaBed className="text-lg" />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">
                    Destination
                  </span>
                  <span className="text-gray-500 text-sm">
                    City or Destination
                  </span>
                </div>
              </div>

              {/* Divider for md */}
              <div className="hidden md:block w-px h-8 bg-gray-300"></div>

              {/* Check-In */}
              <div className="flex gap-3 items-center w-full md:flex-1 border-b md:border-0 pb-2 md:pb-0">
                <FaCalendarCheck className="text-lg" />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">Check-In</span>
                  <span className="text-gray-500 text-sm">Select date</span>
                </div>
              </div>

              <div className="hidden md:block w-px h-8 bg-gray-300"></div>

              {/* Check-Out */}
              <div className="flex gap-3 items-center w-full md:flex-1 border-b md:border-0 pb-2 md:pb-0">
                <FaCalendarAlt className="text-lg" />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">Check-Out</span>
                  <span className="text-gray-500 text-sm">Select date</span>
                </div>
              </div>

              <div className="hidden md:block w-px h-8 bg-gray-300"></div>

              {/* Traveler's */}
              <div className="flex gap-3 items-center w-full md:flex-1 border-b md:border-0 pb-2 md:pb-0">
                <FaUser className="text-lg" />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">
                    Traveler's
                  </span>
                  <span className="text-gray-500 text-sm">Add Guests</span>
                </div>
              </div>
            </div>

            {/* Sign In Button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg transition w-full md:w-auto">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
