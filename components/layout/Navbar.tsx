"use client";
import { useEffect, useState } from "react";
const links = [["About", "#about"], ["Work", "#work"], ["Contact", "#contact"]] as const;
export function Navbar() { const [scrolled, setScrolled] = useState(false); useEffect(() => { const handler = () => setScrolled(window.scrollY > 30); handler(); window.addEventListener("scroll", handler); return () => window.removeEventListener("scroll", handler); }, []); return <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}><a href="#top" className="logo">NB<span>·</span></a><nav>{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav><a href="#contact" className="nav-cta">Let&apos;s talk</a></header>; }
