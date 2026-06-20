import { buttonPrimary, buttonSecondary, glass } from '../ui/classes.js';

export default function NoteCard({ item }) {
  const hasFile = Boolean(item.fileData || item.fileUrl);
  const imageSrc = item.coverImageData || item.imageData || item.imageUrl || '';

  function downloadFile() {
    if (item.fileData) {
      const anchor = document.createElement('a');
      anchor.href = item.fileData;
      anchor.download = item.fileName || `${String(item.title || 'resource').toLowerCase().replace(/[^a-z0-9]+/g, '-')}.pdf`;
      anchor.click();
      return;
    }

    const content = [
      item.title,
      '',
      item.description || '',
      '',
      `Type: ${item.resourceType || item.type || 'PDF'}`,
      `Category: ${item.category || 'general'}`,
    ].join('\n');
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${String(item.title || 'resource').toLowerCase().replace(/[^a-z0-9]+/g, '-')}.txt`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function previewFile() {
    const source = item.fileData || item.fileUrl;
    if (source) {
      window.open(source, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <article className={`${glass} flex min-h-72 flex-col overflow-hidden p-0`}>
      <div className="relative border-b border-white/8 bg-[#08101f]">
        <div className="flex h-40 items-center justify-center overflow-hidden">
          {imageSrc ? (
            <img src={imageSrc} alt={item.title} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),rgba(2,6,23,0.94)_68%)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-cyan-300/10 text-sm font-bold text-cyan-300">PDF</div>
            </div>
          )}
        </div>
        <div className="absolute left-3 top-3 rounded-[6px] border border-cyan-300/20 bg-black/65 px-2.5 py-1 text-[11px] font-bold uppercase text-cyan-300">
          {item.resourceType || item.type || item.category}
        </div>
      </div>
      <div className="flex min-h-64 flex-col p-6">
        <h3 className="mb-3 text-center text-lg font-semibold leading-snug text-white">{item.title}</h3>
        <p className="mb-5 flex-1 text-center text-sm leading-6 text-neutral-400">{item.description}</p>
        <div className="grid grid-cols-2 gap-3">
          <button type="button" onClick={downloadFile} className={`${buttonPrimary} px-3 py-2 text-sm`}>
            {hasFile ? 'Download PDF' : 'Download'}
          </button>
          <button type="button" onClick={previewFile} className={`${buttonSecondary} px-3 py-2 text-sm`} disabled={!hasFile}>
            Preview
          </button>
        </div>
      </div>
    </article>
  );
}
