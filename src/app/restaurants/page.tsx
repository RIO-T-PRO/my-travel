import Image from "next/image";

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
}

const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "The Gourmet Spot",
    cuisine: "French",
    location: "Paris, France",
    rating: 4.8,
    reviews: 320,
    image: "/images/travelone.jpg",
  },
  {
    id: 2,
    name: "Oceanview Diner",
    cuisine: "Seafood",
    location: "Sydney, Australia",
    rating: 4.5,
    reviews: 210,
    image: "/images/travelone.jpg",
  },
  {
    id: 3,
    name: "Urban Bites",
    cuisine: "Italian",
    location: "New York, USA",
    rating: 4.2,
    reviews: 180,
    image: "/images/travelone.jpg",
  },
];

const RestaurantsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Restaurants</h1>
      <p className="text-center text-gray-600 mb-12">
        Explore the best dining experiences around the world.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {mockRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white shadow-md rounded-xl overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h2 className="font-semibold text-lg">{restaurant.name}</h2>
              <p className="text-gray-500 text-sm">
                {restaurant.cuisine} • {restaurant.location}
              </p>
              <p className="text-yellow-400 font-semibold">
                {restaurant.rating} ⭐ ({restaurant.reviews} reviews)
              </p>
              <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition font-semibold">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsPage;
