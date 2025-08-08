import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Background from "@/components/ui/background";
import Cursor from "@/components/ui/cursor";
import Navbar from "@/components/ui/navbar";
import {
  SEO_CONFIG,
  updateCanonicalUrl,
  updateMetaTag,
  updateOpenGraphTags,
  updateTwitterTags,
} from "@/lib/seo-utils";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Set comprehensive SEO meta tags
    document.title = SEO_CONFIG.defaultTitle;

    // Update meta tags
    updateMetaTag("description", SEO_CONFIG.defaultDescription);
    updateMetaTag(
      "keywords",
      "Chirantan Mallick, Front-end Developer, AI Engineer, Machine Learning, React, Portfolio, BCA Student"
    );
    updateMetaTag("author", SEO_CONFIG.author);

    // Update canonical URL
    updateCanonicalUrl(SEO_CONFIG.baseUrl);

    // Update Open Graph tags
    updateOpenGraphTags({
      title: SEO_CONFIG.defaultTitle,
      description:
        "Portfolio showcasing AI/ML projects and front-end development expertise",
      url: SEO_CONFIG.baseUrl,
      image: SEO_CONFIG.defaultImage,
    });

    // Update Twitter tags
    updateTwitterTags({
      title: SEO_CONFIG.defaultTitle,
      description:
        "Portfolio showcasing AI/ML projects and front-end development expertise",
      image: SEO_CONFIG.defaultImage,
    });
  }, []);

  return (
    <div className="bg-dark-base relative min-h-screen text-foreground">
      <Background />
      <Cursor />
      <Navbar />

      <main role="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer
        className="relative z-10 px-4 py-12 text-center sm:px-6 lg:px-8"
        role="contentinfo"
      >
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
