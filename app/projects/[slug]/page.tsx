import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <main className="project-page"><Link href="/#work" className="back"><ArrowLeft size={16} /> Back to selected work</Link><div className={`project-hero project-${project.slug}`}><p className="eyebrow">Case study / {project.index}</p><h1>{project.name}</h1><p>{project.description}</p></div><section className="project-copy"><div><p className="eyebrow">The brief</p><p>{project.longDescription}</p></div><div><p className="eyebrow">Technology</p><ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul></div><a className="text-link" href="#contact">Discuss a similar build <ArrowUpRight size={18} /></a></section></main>;
}
