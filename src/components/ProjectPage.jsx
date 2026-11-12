import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data";

function Shot({ img, onOpen }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure>
      <button
        type="button"
        onClick={() => !failed && onOpen(img)}
        className="block aspect-video w-full overflow-hidden rounded-2xl border border-line bg-neutral-100 text-xs text-muted"
        aria-label={`Open image: ${img.caption}`}
      >
        {failed ? (
          <span className="flex h-full items-center justify-center">Add image: public{img.src}</span>
        ) : (
          <img src={img.src} alt={img.caption} onError={() => setFailed(true)} className="h-full w-full object-cover" />
        )}
      </button>
      <figcaption className="mt-2 text-xs text-muted">{img.caption}</figcaption>
    </figure>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const [open, setOpen] = useState(null);
  const index = projects.findIndex((p) => p.slug === slug);
  const p = projects[index];

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {p.images.map((img) => (
          <Shot key={img.src} img={img} onOpen={setOpen} />
        ))}
      </div>

      <h2 className="mt-14 text-sm font-medium">Overview</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{p.overview}</p>

      <h2 className="mt-10 text-sm font-medium">Key features</h2>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
        {p.features.map((f) => <li key={f}>{f}</li>)}
      </ul>

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

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <img src={open.src} alt={open.caption} className="max-h-full max-w-full rounded-xl" />
        </div>
      )}
    </main>
  );
}
