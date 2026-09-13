"use client";

import { useRef } from "react";
import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  href,
  className = "",
  onClick,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const move = (event: React.MouseEvent) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box || !ref.current) return;
    const x = (event.clientX - box.left - box.width / 2) * 0.2;
    const y = (event.clientY - box.top - box.height / 2) * 0.2;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={move}
        onMouseLeave={reset}
        className={`magnetic ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={reset}
      className={`magnetic ${className}`}
    >
      {children}
    </button>
  );
}
