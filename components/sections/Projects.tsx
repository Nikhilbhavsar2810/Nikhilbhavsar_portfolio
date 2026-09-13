"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section className="section" id="projects">
      <Reveal>
        <p className="eyebrow">Projects</p>
      </Reveal>

      <div className="projects-header">
        <Reveal delay={0.1}>
          <h2 className="section-heading">
            Things I&apos;ve helped{" "}
            <span className="gradient-text">build.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p>
            A selection of professional work across business software, e-commerce,
            education and manufacturing.
          </p>
        </Reveal>
      </div>

      <div className="project-list">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={0.1 + i * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
