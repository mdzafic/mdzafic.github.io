import { Link } from "react-router-dom";
import { projects } from "../data";
import { ProjectCard } from "./Projects";

export default function AllProjects() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-28">
      <Link to="/" state={{ scrollTo: "projects" }} className="text-sm text-muted hover:text-ink">
        ← Back
      </Link>
      <h1 className="mt-8 text-3xl font-medium tracking-tight sm:text-4xl">All projects</h1>
      <div className="mt-10 space-y-5">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </main>
  );
}
