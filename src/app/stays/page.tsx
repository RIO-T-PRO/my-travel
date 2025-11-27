import { travelProducts } from "@/data/villa";
import CardTravel from "@/component/card/card-travel";
const StaysPage = () => {
  const stays = travelProducts.filter((item) =>
    ["Hotels", "Resorts", "Villas", "Apartments"].includes(item.category)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Stays</h1>
      <p className="text-center text-gray-600 mb-12">
        Find your perfect stay anywhere in the world. Hotels, villas, resorts,
        and apartments — all in one place.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stays.map((stay) => (
          <CardTravel key={stay.id} product={stay} />
        ))}
      </div>
    </div>
  );
};

export default StaysPage;
