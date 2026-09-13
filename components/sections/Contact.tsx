"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <Reveal>
        <p className="eyebrow">Contact</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="section-heading">
          Let&apos;s build something{" "}
          <span className="gradient-text">useful.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="contact-text">
          Have a project, product idea, or business problem that needs a
          technical solution? Let&apos;s talk.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <div className="contact-buttons">
          <a
            href="mailto:nikhilbhavsar1028@gmail.com"
            className="contact-link primary"
          >
            <Mail size={18} />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-bhavsarb/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Nikhilbhavsar2810"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
