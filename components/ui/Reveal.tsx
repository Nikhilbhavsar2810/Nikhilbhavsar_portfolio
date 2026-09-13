"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const yMap = { up: 40, left: 0, right: 0, none: 0 };
  const xMap = { up: 0, left: -40, right: 40, none: 0 };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yMap[direction], x: xMap[direction] }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, y: yMap[direction], x: xMap[direction] }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
