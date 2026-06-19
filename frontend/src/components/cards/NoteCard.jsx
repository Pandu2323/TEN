import { buttonPrimary, buttonSecondary, glass } from '../ui/classes.js';

export default function NoteCard({ item }) {
  return (
    <article className={`${glass} flex min-h-72 flex-col`}>
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-cyan-300/10 text-sm font-bold text-cyan-300">PDF</div>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-300">{item.resourceType || item.type || item.category}</span>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
      <p className="mb-5 flex-1 text-sm leading-6 text-neutral-400">{item.description}</p>
      <div className="mb-5 flex flex-wrap gap-3 rounded-lg border border-white/[0.05] bg-white/[0.02] px-4 py-3 text-xs text-neutral-400">
        <span>{item.pages || 10} pages</span>
        <span>{item.category}</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button className={`${buttonPrimary} px-3 py-2 text-sm`}>Download</button>
        <button className={`${buttonSecondary} px-3 py-2 text-sm`}>Preview</button>
      </div>
    </article>
  );
}
