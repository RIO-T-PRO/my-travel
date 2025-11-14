import CardFilter from "./card-filter";
import CardTravel from "./card-travel";

const Main = () => {
  return (
    <main className="px-6 md:px-10 mb-10 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <h3 className="text-2xl font-semibold text-gray-800">
          All Available Resorts in West Indies
        </h3>
        <div className="flex items-center gap-2 text-gray-600 text-sm border border-gray-300 rounded-md px-3 py-1 bg-white">
          <span>Sort by:</span>
          <select className="bg-transparent focus:outline-none">
            <option>Latest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4">
          <CardFilter />
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <CardTravel />
          <CardTravel />
          <CardTravel />
        </div>
      </div>
    </main>
  );
};

export default Main;
