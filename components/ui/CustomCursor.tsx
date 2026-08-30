"use client";
import { useEffect } from "react";
export function CustomCursor() { useEffect(() => { const cursor = document.querySelector<HTMLElement>(".cursor"); const move = (event: MouseEvent) => { if (cursor) cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`; }; window.addEventListener("pointermove", move); return () => window.removeEventListener("pointermove", move); }, []); return <div className="cursor" aria-hidden="true" />; }
