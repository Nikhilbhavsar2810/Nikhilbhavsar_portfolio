"use client";

import { Github } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useMemo } from "react";

export function GitHubSection() {
  const cells = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < 91; i++) {
      const r = Math.random();
      if (r < 0.4) arr.push(0);
      else if (r < 0.65) arr.push(1);
      else if (r < 0.82) arr.push(2);
      else if (r < 0.93) arr.push(3);
      else arr.push(4);
    }
    return arr;
  }, []);

  return (
    <section className="section github-section" id="github">
      <Reveal>
        <p className="eyebrow">Open Source</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="section-heading" style={{ marginTop: 24 }}>
          Code on <span className="gradient-text">GitHub.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="github-card">
          <div className="github-avatar">
            <Github size={36} />
          </div>
          <h3>Nikhilbhavsar2810</h3>
          <p>
            Check out my repositories, contributions, and open-source work on
            GitHub.
          </p>

          <div className="github-contributions">
            {cells.map((level, i) => (
              <div
                key={i}
                className={`contrib-cell ${level > 0 ? `l${level}` : ""}`}
              />
            ))}
          </div>

          <a
            href="https://github.com/Nikhilbhavsar2810"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <Github size={16} />
            View GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
