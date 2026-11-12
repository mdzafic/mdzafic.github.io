import { education, skillGroups } from "../data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-center text-2xl font-medium tracking-tight">About me</h2>

      <h3 className="mt-12 text-sm font-medium">Education</h3>
      <ul className="mt-4 divide-y divide-line border-y border-line">
        {education.map((e) => (
          <li key={e.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between">
            <div>
              <p className="text-sm">{e.title}</p>
              <p className="text-sm text-muted">{e.place}</p>
            </div>
            <p className="text-sm text-muted">{e.period}</p>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 text-sm font-medium">Technical skills</h3>
      <dl className="mt-4 divide-y divide-line border-y border-line">
        {skillGroups.map((g) => (
          <div key={g.label} className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr]">
            <dt className="text-sm">{g.label}</dt>
            <dd className="text-sm text-muted">{g.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
