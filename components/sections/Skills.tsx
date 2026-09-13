"use client";

import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import {
  Layout,
  Server,
  Database,
  Wrench,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  layout: <Layout size={18} />,
  server: <Server size={18} />,
  database: <Database size={18} />,
  wrench: <Wrench size={18} />,
};

export function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <Reveal>
        <p className="eyebrow">Skills</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="section-heading" style={{ marginTop: 24 }}>
          Technologies I{" "}
          <span className="gradient-text">work with.</span>
        </h2>
      </Reveal>

      <div className="skills-grid">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.label} delay={0.15 + gi * 0.08}>
            <div className="skill-group">
              <div className="skill-group-header">
                <span className="skill-group-icon">
                  {iconMap[group.icon] || null}
                </span>
                <span className="skill-group-label">{group.label}</span>
              </div>
              <h3>{group.label}</h3>
              <div className="skill-items">
                {group.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
