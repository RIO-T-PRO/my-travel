import { travelProducts } from "@/data/villa";

const HotelsPage = () => {
  const hotels = travelProducts.filter((item) => item.category === "Hotels");

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Hotels</h1>
    </div>
  );
};

export default HotelsPage;
