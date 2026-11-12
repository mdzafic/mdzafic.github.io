import { Link } from "react-router-dom";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-center text-2xl font-medium tracking-tight">Selected projects</h2>
      <div className="mt-12 space-y-5">
        {projects.map((p) => (
          // Cijela kartica je klikabilna (preko naslova), a "Code" ostaje poseban link
          <article
            key={p.slug}
            className={`relative cursor-pointer rounded-3xl border border-line p-6 transition-shadow hover:shadow-md ${p.tint}`}
          >
            <div className="flex justify-between text-sm text-muted">
              <span>{p.year}</span>
              <span>{p.type}</span>
            </div>
            <h3 className="mt-6 text-xl font-medium">
              <Link to={`/projects/${p.slug}`} className="after:absolute after:inset-0 after:rounded-3xl">
                {p.title}
              </Link>
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">{p.text}</p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full bg-white/80 px-3 py-1 text-xs">{t}</span>
                ))}
              </div>
              <div className="relative z-10 flex gap-4 text-sm">
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="underline underline-offset-4">Code</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="underline underline-offset-4">Demo</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
