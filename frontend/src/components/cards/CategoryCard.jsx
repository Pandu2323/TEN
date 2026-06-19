import Link from '../ui/Link.jsx';
import { buttonOutline, glass } from '../ui/classes.js';

export default function CategoryCard({ item }) {
  return (
    <article className={`${glass} flex min-h-80 flex-col items-start`}>
      <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg font-bold ${item.accent}`}>
        {item.icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
      <p className="mb-5 flex-1 text-sm leading-6 text-neutral-400">{item.desc}</p>
      <div className="mb-7 flex flex-wrap gap-2">
        {item.topics.map((topic) => (
          <span key={topic} className="rounded-full border border-white/[0.06] bg-white/[0.04] px-3 py-1 text-xs text-neutral-400">
            {topic}
          </span>
        ))}
      </div>
      <Link href={`/tutorials?category=${item.id}`} className={buttonOutline}>Learn More -&gt;</Link>
    </article>
  );
}
