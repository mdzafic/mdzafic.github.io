import { profile } from "../data";

export default function Contact() {
  return (
    <footer id="contact" className="mx-auto max-w-3xl px-6 pb-16 pt-24">
      <div className="rounded-3xl bg-ink p-10 text-center text-white">
        <h2 className="text-2xl font-medium tracking-tight">Let’s work together</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-white/70">
          Reach out about internships, junior roles or project collaboration.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block rounded-full bg-white px-6 py-2.5 text-sm text-ink hover:opacity-90"
        >
          {profile.email}
        </a>
        <div className="mt-6 flex justify-center gap-6 text-sm text-white/70">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-muted">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  );
}
