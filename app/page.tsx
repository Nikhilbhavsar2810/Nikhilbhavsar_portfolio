import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Workflow } from "@/components/sections/Workflow";
import { GitHubSection } from "@/components/sections/GitHub";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Services />
      <Skills />
      <Workflow />
      <GitHubSection />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
