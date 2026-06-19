import { gradientText, shell } from './classes.js';

export default function PageHeader({ title, accent, subtitle }) {
  return (
    <section className="pt-32 pb-10">
      <div className={`${shell} text-center`}>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title} <span className={gradientText}>{accent}</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-neutral-400">{subtitle}</p>
      </div>
    </section>
  );
}
