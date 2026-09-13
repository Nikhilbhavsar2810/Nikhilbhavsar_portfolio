"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, Download, MessageCircle } from "lucide-react";

const HeroScene = dynamic(
  () => import("./HeroScene").then((mod) => ({ default: mod.HeroScene })),
  { ssr: false }
);

const easing = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 + i * 0.15, ease: easing as unknown as [number, number, number, number] },
  }),
};

export function Hero() {
  return (
    <section className="hero" id="top">
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Hi, I&apos;m Nikhil Bhavsar.
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Full-Stack Developer building{" "}
          <span className="gradient-text">scalable web applications</span> and
          real-world digital products.
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          I build modern web applications with React, Next.js, Node.js, Express,
          TypeScript and MongoDB — from polished user interfaces to
          production-ready backend systems.
        </motion.p>

        <motion.div
          className="hero-ctas"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a href="#projects" className="btn-primary">
            <ArrowDown size={16} />
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            <MessageCircle size={16} />
            Let&apos;s Connect
          </a>
          <a href="#resume" className="btn-secondary">
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
