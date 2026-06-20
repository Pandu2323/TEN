import { buttonPrimary, buttonSecondary, glass } from '../ui/classes.js';

export default function TutorialCard({ item }) {
  const imageSrc = item.imageData || item.imageUrl || '';

  return (
    <article className={`${glass} overflow-hidden p-0`}>
      <div className="relative aspect-video bg-neutral-900">
        {imageSrc ? (
          <img src={imageSrc} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(123,97,255,0.18),rgba(10,10,10,0.96)_64%)]">
            <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              No image uploaded
            </div>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded bg-gradient-to-r from-cyan-300 to-violet-500 px-3 py-1 text-xs font-bold uppercase text-black">{item.category}</span>
        <span className="absolute bottom-3 right-3 rounded border border-white/10 bg-black/70 px-2 py-1 text-xs text-white">{item.duration || '30 min'}</span>
      </div>
      <div className="flex min-h-64 flex-col p-6">
        <h3 className="mb-3 text-lg font-semibold leading-snug text-white">{item.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-6 text-neutral-400">{item.description}</p>
        <div className="mb-4 flex justify-between border-t border-white/[0.05] pt-4 text-xs text-neutral-500">
          <span>{item.level || 'Beginner'}</span>
          <span>{item.status || 'published'}</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className={`${buttonPrimary} px-3 py-2 text-sm`}>Watch</button>
          <button className={`${buttonSecondary} px-3 py-2 text-sm`}>Save</button>
        </div>
      </div>
    </article>
  );
}
