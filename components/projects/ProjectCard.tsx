"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { motion } from "framer-motion";
export function ProjectCard({ project }: { project: Project }) { return <motion.article className={`project-card ${project.accent}`} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65 }}><Link href={`/projects/${project.slug}`}><div className="project-art"><span>{project.index}</span><div className="art-shape" /></div><div className="project-meta"><p>{project.type}</p><ArrowUpRight size={20} /></div><h3>{project.name}</h3><p>{project.description}</p><ul>{project.stack.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul></Link></motion.article>; }
