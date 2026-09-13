import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h4>Nikhil Bhavsar</h4>
          <p>Full-Stack Developer</p>
          <p className="footer-stack">React • Next.js • Node.js • TypeScript</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/Nikhilbhavsar2810"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-bhavsarb/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a href="mailto:nikhilbhavsar1028@gmail.com" aria-label="Email">
            <Mail size={16} />
          </a>
        </div>
      </div>
      <p className="footer-copyright">
        © 2026 Nikhil Bhavsar. All rights reserved.
      </p>
    </footer>
  );
}
