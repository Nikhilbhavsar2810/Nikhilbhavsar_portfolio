import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
export function Projects() { return <section className="section projects" id="work"><p className="eyebrow">04 / Selected work</p><div className="projects-heading"><h2>Things I&apos;ve helped <em>bring to life.</em></h2><p>A selection of product work across business software, manufacturing, and job search.</p></div><div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div></section>; }
