import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-display" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nikhil Bhavsar — Full-Stack Developer",
  description:
    "Portfolio of Nikhil Bhavsar, a Full-Stack Developer building modern web applications with React, Next.js, Node.js, Express, TypeScript and MongoDB.",
  keywords: [
    "Nikhil Bhavsar",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "TypeScript",
    "MongoDB",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Nikhil Bhavsar" }],
  openGraph: {
    title: "Nikhil Bhavsar — Full-Stack Developer",
    description:
      "Portfolio of Nikhil Bhavsar, a Full-Stack Developer building modern web applications with React, Next.js, Node.js, Express, TypeScript and MongoDB.",
    type: "website",
    locale: "en_US",
    siteName: "Nikhil Bhavsar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Bhavsar — Full-Stack Developer",
    description:
      "Full-Stack Developer building modern web applications with React, Next.js, Node.js, Express, TypeScript and MongoDB.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
