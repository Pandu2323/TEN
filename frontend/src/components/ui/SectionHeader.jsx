import { gradientText } from './classes.js';

export default function SectionHeader({ title, accent, subtitle }) {
  return (
    <div className="mb-14 text-center">
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title} <span className={gradientText}>{accent}</span>
      </h2>
      <p className="mx-auto max-w-2xl text-neutral-400">{subtitle}</p>
    </div>
  );
}
