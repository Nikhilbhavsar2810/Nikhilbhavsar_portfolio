"use client";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
export function Hero() { return <section className="hero" id="top"><div className="hero-orb" /><motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>I build digital<br /><em>experiences</em> that move.</motion.h1><div className="hero-bottom"><p>Software developer focused on thoughtful, high-performing web products.</p><MagneticButton href="#work" className="round-link"><span>Selected<br />work</span><ArrowDownRight size={22} /></MagneticButton></div><p className="hero-index">01 — 05</p></section>; }
