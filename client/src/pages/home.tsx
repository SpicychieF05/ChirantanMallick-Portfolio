import { useEffect } from "react";
import Navbar from "@/components/ui/navbar";
import Background from "@/components/ui/background";
import Cursor from "@/components/ui/cursor";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = "Chirantan Mallick - Front-end Developer & AI Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-dark-base text-foreground relative">
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

      <footer className="py-12 text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="glassmorphism p-8 rounded-xl">
            <p className="text-slate-400 mb-4">Designed & Built by Chirantan Mallick</p>
            <p className="font-mono text-sm text-slate-500">Made with ❤️ using React.js, Tailwind CSS & Framer Motion</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
