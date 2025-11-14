import CardFilter from "./card-filter";
import CardTravel from "./card-travel";

const Main = () => {
  return (
    <main className="px-10 mb-10 flex flex-col gap-5">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-medium">
            All Available Resort in West Indies
          </h3>

          <span>Sort by: Latest:</span>
        </div>
      </div>

      <div>
        <div className="flex gap-6">
          <div>
            <CardFilter />
          </div>

          <div>
            <CardTravel />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
