import { buttonOutline, glass } from '../ui/classes.js';

export default function BlogCard({ item }) {
  return (
    <article className={`${glass} overflow-hidden p-0`}>
      <div className="relative aspect-video border-b border-white/10 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.18),rgba(10,10,10,0.95)_62%)]">
        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold tracking-wider text-cyan-300">READ</div>
      </div>
      <div className="flex min-h-64 flex-col p-6">
        <span className="mb-3 w-fit rounded bg-cyan-300/10 px-2 py-1 text-xs font-medium text-cyan-300">{item.category}</span>
        <h3 className="mb-3 text-xl font-semibold leading-snug text-white">{item.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-6 text-neutral-400">{item.excerpt || item.description}</p>
        <div className="mb-5 flex gap-4 text-xs text-neutral-500">
          <span>{item.author || 'Admin'}</span>
          <span>{item.readTime || '5 min read'}</span>
        </div>
        <button className={buttonOutline}>Read More</button>
      </div>
    </article>
  );
}
