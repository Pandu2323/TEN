import { gradientText } from '../ui/classes.js';

export default function StatCard({ value, label }) {
  return (
    <div className="text-center">
      <div className={`mb-2 text-4xl font-bold ${gradientText}`}>{value}</div>
      <div className="text-sm text-neutral-400">{label}</div>
    </div>
  );
}
