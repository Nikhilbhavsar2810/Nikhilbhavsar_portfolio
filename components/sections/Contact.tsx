import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
export function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="eyebrow">05 / Contact</p>
      <h2>
        Have an idea?
        <br />
        <em>Let&apos;s make it real.</em>
      </h2>
      <MagneticButton
        href="mailto:nikhilbhavsar1028@gmail.com"
        className="contact-button"
      >
        <span>Start a conversation</span>
        <ArrowUpRight />
      </MagneticButton>
      <div className="socials">
        <a href="mailto:nikhilbhavsar1028@gmail.com" aria-label="Email">
          <Mail />
        </a>
        <a href="https://github.com/Nikhilbhavsar2810" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/nikhil-bhavsarb/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin />
        </a>
      </div>
    </section>
  );
}
