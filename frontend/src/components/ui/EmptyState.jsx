import { glass } from './classes.js';

export default function EmptyState({ title, desc }) {
  return (
    <div className={`${glass} col-span-full mx-auto flex max-w-xl flex-col items-center border-dashed py-16 text-center`}>
      <div className="mb-5 flex h-20 w-36 items-center justify-center overflow-hidden rounded-xl border border-cyan-300/20 bg-black">
        <img src="/assets/ten-logo.png" alt="TEN - The Epoch Nova" className="h-full w-full object-contain p-2" />
      </div>
      <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
      <p className="max-w-md text-neutral-400">{desc}</p>
    </div>
  );
}
