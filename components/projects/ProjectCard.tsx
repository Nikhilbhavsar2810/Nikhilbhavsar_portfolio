import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div
        className="project-visual"
        style={{ background: project.gradient }}
      >
        <div className="project-visual-inner">{project.name}</div>
      </div>

      <div className="project-info">
        <span className="project-index">{project.index}</span>
        <span className="project-category">{project.category}</span>
        <h3>{project.name}</h3>
        <p>{project.shortDescription}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-cta">
          View Case Study <ArrowUpRight size={16} />
        </div>
      </div>
    </Link>
  );
}
