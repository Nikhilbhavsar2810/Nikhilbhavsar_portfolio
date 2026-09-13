import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Nikhil Bhavsar`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="project-page">
      <Link href="/#projects" className="back-link">
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <div
        className="project-hero-section"
        style={{ background: project.gradient }}
      >
        <span className="project-category" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
          {project.category}
        </span>
        <h1>{project.name}</h1>
        <p className="project-hero-desc">{project.shortDescription}</p>
      </div>

      <div className="case-study">
        {/* Overview */}
        <div className="case-section">
          <span className="case-label">Overview</span>
          <h2>About this project</h2>
          <p>{project.overview}</p>
        </div>

        {/* Business Problem */}
        <div className="case-section">
          <span className="case-label">The Problem</span>
          <h2>Business Challenge</h2>
          <p>{project.problem}</p>
        </div>

        {/* Solution */}
        <div className="case-section">
          <span className="case-label">The Solution</span>
          <h2>What We Built</h2>
          <p>{project.solution}</p>
        </div>

        {/* My Role */}
        <div className="case-section">
          <span className="case-label">My Role</span>
          <h2>Responsibilities</h2>
          <p>{project.role}</p>
          <ul className="case-list">
            {project.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="case-section">
          <span className="case-label">Features</span>
          <h2>Key Capabilities</h2>
          <div className="case-features">
            {project.features.map((f) => (
              <div key={f.title} className="case-feature">
                <h4>{f.title}</h4>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="case-section">
          <span className="case-label">Tech Stack</span>
          <h2>Technologies Used</h2>
          <div className="case-tech-tags">
            {project.stack.map((tech) => (
              <span key={tech} className="case-tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="case-section">
          <span className="case-label">Challenges</span>
          <h2>Technical Challenges</h2>
          <ul className="case-list">
            {project.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Impact */}
        <div className="case-section">
          <span className="case-label">Impact</span>
          <h2>Result</h2>
          <p>{project.impact}</p>
        </div>

        {/* Back CTA */}
        <div className="case-back-cta">
          <Link href="/#projects" className="btn-secondary">
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}
