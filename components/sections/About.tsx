"use client";

import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section className="section" id="about">
      <Reveal>
        <p className="eyebrow">About</p>
      </Reveal>

      <div className="about-grid">
        <div className="about-label">
          <Reveal delay={0.1}>
            <h2>
              Building software that solves{" "}
              <span className="gradient-text">real problems.</span>
            </h2>
          </Reveal>
        </div>

        <div className="about-text">
          <Reveal delay={0.2}>
            <p>
              I&apos;m a <strong>Full-Stack Developer</strong> focused on
              building practical, scalable and user-friendly web applications.
              My experience includes working on business platforms, ERP and CRM
              systems, accounting applications, e-commerce and POS solutions,
              educational platforms and modern company websites.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p>
              I enjoy working across the{" "}
              <strong>entire application lifecycle</strong> — from designing
              interfaces and building APIs to database modeling, authentication,
              business logic and deployment. I&apos;m not only a frontend
              developer — I work across the frontend, backend, APIs, database,
              business logic, admin systems, and deployment side of
              applications.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
