"use client";

import { useEffect, useState } from "react";

const links = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a href="#top" className="logo">
          NB<span className="logo-accent">.</span>
        </a>
        <nav className="nav-links">
          {links.map(([label, href]) => (
            <a href={href} key={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="nav-cta">
          Let&apos;s Talk
        </a>
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
