"use client";

import { experiences } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <Reveal>
        <p className="eyebrow">Experience</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="section-heading" style={{ marginTop: 24 }}>
          Professional <span className="gradient-text">work.</span>
        </h2>
      </Reveal>

      <div className="exp-timeline">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={0.15 + i * 0.1}>
            <div className="exp-item">
              <span className="exp-period">{exp.period}</span>
              <div className="exp-content">
                <h3>{exp.role}</h3>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-desc">{exp.description}</p>
                <div className="exp-highlights">
                  {exp.highlights.map((h) => (
                    <span key={h} className="exp-highlight">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
