"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    let raf: number;
    const animate = () => {
      dot.current.x += (pos.current.x - dot.current.x) * 0.12;
      dot.current.y += (pos.current.y - dot.current.y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${dot.current.x}px, ${dot.current.y}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
