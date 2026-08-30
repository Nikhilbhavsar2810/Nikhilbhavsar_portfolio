"use client";
import { useEffect } from "react";
import Lenis from "lenis";
export function SmoothScroll() { useEffect(() => { const lenis = new Lenis({ lerp: 0.09, smoothWheel: true }); let id = 0; const raf = (time: number) => { lenis.raf(time); id = requestAnimationFrame(raf); }; id = requestAnimationFrame(raf); return () => { cancelAnimationFrame(id); lenis.destroy(); }; }, []); return null; }
