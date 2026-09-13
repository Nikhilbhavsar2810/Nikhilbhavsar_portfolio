"use client";

import { Download } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Resume() {
  return (
    <section className="section section-alt resume-section" id="resume">
      <Reveal>
        <p className="eyebrow">Resume</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="section-heading" style={{ marginTop: 24 }}>
          Experience that goes{" "}
          <span className="gradient-text">beyond the code.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="resume-content">
          <p>
            A summary of my professional experience, technical skills, education
            and selected projects — everything in one place.
          </p>

          <div className="resume-pillars">
            <span className="resume-pillar">Professional Experience</span>
            <span className="resume-pillar">Technical Skills</span>
            <span className="resume-pillar">Education</span>
            <span className="resume-pillar">Selected Projects</span>
          </div>

          <a href="#" className="btn-primary">
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </Reveal>
    </section>
  );
}
