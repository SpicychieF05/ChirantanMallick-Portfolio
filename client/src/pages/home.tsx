import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience-ultra-simple";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Background from "@/components/ui/background";
import Cursor from "@/components/ui/cursor";
import Navbar from "@/components/ui/navbar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = "Chirantan Mallick - Front-end Developer & AI Engineer";
  }, []);

  return (
    <div className="bg-dark-base relative min-h-screen text-foreground">
      <Background />
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="relative z-10 px-4 py-12 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="glassmorphism rounded-xl p-8">
            <p className="mb-4 text-slate-400">
              Designed & Built by Chirantan Mallick
            </p>
            <p className="font-mono text-sm text-slate-500">
              Made with ❤️ using React.js, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
