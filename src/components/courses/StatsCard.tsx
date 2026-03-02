interface StatsCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
}

export default function StatsCard({
  label,
  value,
  icon,
  trend,
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-0.5">{label}</p>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-800">{value}</span>
          {trend && <span className="text-xs text-green-500">{trend}</span>}
        </div>
      </div>
    </div>
  );
}
