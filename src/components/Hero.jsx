import { profile, highlights } from "../data";

export default function Hero() {
  return (
    <header id="top" className="mx-auto max-w-5xl px-6 pt-32">
      <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs text-green-900">
            <span className="size-1.5 rounded-full bg-green-600" />
            {profile.available}
          </span>
          <h1 className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
            {profile.headline}
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            Hi, I'm {profile.name}. {profile.intro}
          </p>
          <div className="mt-7 flex gap-3">
            <a href="#contact" className="rounded-full bg-ink px-5 py-2.5 text-sm text-white hover:opacity-85">
              Get in touch
            </a>
            <a href="#projects" className="rounded-full border border-line bg-white px-5 py-2.5 text-sm hover:bg-neutral-50">
              View projects
            </a>
          </div>
        </div>

        {/* Stavi svoju sliku u public/profile.jpg */}
        <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-200">
          <img
            src="/profile.jpg"
            alt={profile.name}
            className="h-full w-full object-cover grayscale"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 border-y border-line py-6 text-sm text-muted">
        {highlights.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </header>
  );
}
