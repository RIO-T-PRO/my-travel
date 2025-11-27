interface Stat {
  label: string;
  value: string;
  icon: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-6 bg-white dark:bg-card-dark rounded-lg border border-slate-200 dark:border-slate-800"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="material-icons-outlined text-primary text-2xl">
              {stat.icon}
            </span>
          </div>
          <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
            {stat.value}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
