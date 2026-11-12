import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data";

const ZoomIcon = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
  </svg>
);

const Arrow = ({ dir }) => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

function Gallery({ images }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [failed, setFailed] = useState({});
  const touchX = useRef(null);

  const count = images.length;
  const img = images[active];
  const multiple = count > 1;

  const go = (d) => setActive((i) => (i + d + count) % count);
  const markFailed = (src) => setFailed((f) => ({ ...f, [src]: true }));

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft" && multiple) go(-1);
      if (e.key === "ArrowRight" && multiple) go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, multiple, count]);

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current === null || !multiple) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1);
    touchX.current = null;
  };

  const navBtn = "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-sm hover:bg-white";

  return (
    <div className="mt-5">
      {/* Glavna slika */}
      <div className="relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <button
          type="button"
          onClick={() => !failed[img.src] && setLightbox(true)}
          className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-line bg-white text-xs text-muted"
          aria-label={`Open image: ${img.caption}`}
        >
          {failed[img.src] ? (
            <span className="flex aspect-video items-center justify-center">Add image: public{img.src}</span>
          ) : (
            <>
              <img
                src={img.src}
                alt={img.caption}
                onError={() => markFailed(img.src)}
                className="mx-auto block h-auto max-h-[28rem] w-full object-contain"
              />
              <span className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/90 shadow-sm transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                <ZoomIcon />
              </span>
            </>
          )}
        </button>

        {multiple && (
          <>
            <button type="button" onClick={() => go(-1)} className={`${navBtn} left-3`} aria-label="Previous image"><Arrow dir="left" /></button>
            <button type="button" onClick={() => go(1)} className={`${navBtn} right-3`} aria-label="Next image"><Arrow dir="right" /></button>
            <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-xs text-white">
              {active + 1} / {count}
            </span>
          </>
        )}
      </div>

      <p className="mt-2 text-xs text-muted">{img.caption}</p>

      {/* Thumbnailovi */}
      {multiple && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((t, i) => (
            <button
              key={t.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}: ${t.caption}`}
              aria-current={i === active}
              className={`aspect-video w-24 shrink-0 overflow-hidden rounded-lg border bg-neutral-100 transition ${
                i === active ? "border-ink opacity-100" : "border-line opacity-60 hover:opacity-100"
              }`}
            >
              {!failed[t.src] && (
                <img src={t.src} alt="" onError={() => markFailed(t.src)} className="h-full w-full object-cover" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightbox(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
        >
          <figure className="flex max-h-full max-w-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={img.src} alt={img.caption} className="max-h-[80vh] max-w-full rounded-xl object-contain" />
            <figcaption className="mt-3 text-sm text-white/80">
              {img.caption}{multiple && ` (${active + 1}/${count})`}
            </figcaption>
          </figure>

          {multiple && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); go(-1); }} className={`${navBtn} left-4`} aria-label="Previous image"><Arrow dir="left" /></button>
              <button type="button" onClick={(e) => { e.stopPropagation(); go(1); }} className={`${navBtn} right-4`} aria-label="Next image"><Arrow dir="right" /></button>
            </>
          )}

          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const p = projects[index];

  if (!p) {
    return (
      <main className="mx-auto max-w-3xl px-6 pt-32">
        <p className="text-sm">Project not found.</p>
        <Link to="/" className="mt-4 inline-block text-sm underline underline-offset-4">Back to home</Link>
      </main>
    );
  }

  const next = projects[(index + 1) % projects.length];

  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-28">
      <Link to="/" state={{ scrollTo: "projects" }} className="text-sm text-muted hover:text-ink">
        ← All projects
      </Link>

      <div className="mt-8 flex gap-3 text-sm text-muted">
        <span>{p.year}</span>
        <span>{p.type}</span>
      </div>
      <h1 className="mt-3 text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{p.title}</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{p.text}</p>

      <div className="mt-6 flex gap-3">
        {p.repo && (
          <a href={p.repo} target="_blank" rel="noreferrer" className="rounded-full bg-ink px-5 py-2.5 text-sm text-white hover:opacity-85">
            View code
          </a>
        )}
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noreferrer" className="rounded-full border border-line bg-white px-5 py-2.5 text-sm hover:bg-neutral-50">
            Live demo
          </a>
        )}
      </div>

      <div className="mt-12 flex items-center justify-between border-b border-line pb-3">
        <h2 className="text-sm font-medium">Screenshots</h2>
        <span className="flex items-center gap-1.5 text-xs text-muted">
          <ZoomIcon className="size-3.5" />
          Click to enlarge
        </span>
      </div>

      <Gallery key={p.slug} images={p.images} />

      <h2 className="mt-14 text-sm font-medium">Overview</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{p.overview}</p>

      <h2 className="mt-10 text-sm font-medium">Key features</h2>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
        {p.features.map((f) => <li key={f}>{f}</li>)}
      </ul>

      {p.sections?.map((sec) => (
        <div key={sec.title}>
          <h2 className="mt-10 text-sm font-medium">{sec.title}</h2>
          {sec.text && <p className="mt-3 text-sm leading-relaxed text-muted">{sec.text}</p>}
          {sec.table && (
            <div className="mt-4 overflow-x-auto rounded-2xl border border-line bg-white">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <thead className="text-muted">
                  <tr>
                    {sec.table.head.map((h) => (
                      <th key={h} className="px-4 py-3 font-normal">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sec.table.rows.map((r) => (
                    <tr key={r[0]} className="border-t border-line">
                      {r.map((c, i) => (
                        <td key={i} className={`px-4 py-3 ${i === 0 ? "font-medium" : "text-muted"}`}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {sec.items && (
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
              {sec.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          )}
        </div>
      ))}

      <h2 className="mt-10 text-sm font-medium">Tech stack</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((t) => (
          <span key={t} className="rounded-full border border-line bg-white px-3 py-1 text-xs">{t}</span>
        ))}
      </div>

      <Link to={`/projects/${next.slug}`} className="mt-16 block rounded-3xl border border-line bg-white p-6 hover:bg-neutral-50">
        <span className="text-xs text-muted">Next project</span>
        <span className="mt-1 block text-lg font-medium">{next.title}</span>
      </Link>
    </main>
  );
}