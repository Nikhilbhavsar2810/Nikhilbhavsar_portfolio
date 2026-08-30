import type { Metadata } from "next";
import { DM_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Nikhil Bhavsar — Software Developer",
  description: "Portfolio of Nikhil Bhavsar, a MERN stack software developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${mono.variable}`}>
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
