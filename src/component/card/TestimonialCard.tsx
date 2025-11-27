import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  comment,
  image,
  date,
}: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-card-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className="rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">
            {name}
          </h4>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {location}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`material-icons-outlined text-sm ${
              i < rating
                ? "text-yellow-400"
                : "text-slate-300 dark:text-slate-600"
            }`}
          >
            star
          </span>
        ))}
      </div>

      <p className="text-slate-600 dark:text-slate-300 mb-3">{comment}</p>

      <p className="text-xs text-slate-400">
        {new Date(date).toLocaleDateString()}
      </p>
    </div>
  );
}
