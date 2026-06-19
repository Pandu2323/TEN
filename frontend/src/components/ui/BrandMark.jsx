export default function BrandMark({ className = '', compact = false }) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <div className={`text-center leading-none ${compact ? 'scale-90' : ''}`}>
        <div className="flex items-end justify-center gap-1">
          <span className="text-4xl font-black tracking-tight text-white">Ten</span>
          <span className="translate-y-2 text-4xl font-black leading-none text-orange-500">.</span>
        </div>
      </div>
    </div>
  );
}
