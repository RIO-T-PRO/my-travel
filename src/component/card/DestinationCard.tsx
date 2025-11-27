import Image from "next/image";
import Link from "next/link";

interface DestinationCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  startingPrice: number;
}

export default function DestinationCard({
  id,
  name,
  image,
  description,
  startingPrice,
}: DestinationCardProps) {
  return (
    <Link href={`/resorts?destination=${encodeURIComponent(name)}`}>
      <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-1">{name}</h3>
            <p className="text-sm text-white/90 mb-3">{description}</p>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs">From</span>
                <p className="text-xl font-bold">${startingPrice}</p>
              </div>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
