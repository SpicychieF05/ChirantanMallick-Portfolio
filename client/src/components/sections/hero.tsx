import { useTyping } from "@/hooks/use-typing";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [startTyping, setStartTyping] = useState(false);
  const { displayedText, isComplete } = useTyping("Chirantan Mallick", 150);

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-accent-teal mb-4 font-mono text-lg"
          >
            Hello, my name is
          </motion.p>

          <h1 className="font-clash mb-4 text-4xl font-bold sm:text-6xl lg:text-7xl">
            <span className={`${!isComplete ? "typing-cursor" : ""}`}>
              {startTyping ? displayedText : ""}
            </span>
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="font-clash mb-8 px-4 text-center text-lg font-semibold leading-relaxed text-slate-400 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
          >
            <span className="inline-block">
              Front-end Developer | AI Engineer | BCA Student
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            I'm a final-year BCA student at Seacom Skills University, passionate
            about creating innovative web experiences and exploring the
            frontiers of artificial intelligence. Currently building{" "}
            <span className="text-accent-teal">SemesterHub</span> and working on
            ML projects with{" "}
            <span className="text-accent-indigo">96% accuracy</span>.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          className="flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="gradient-border group"
          >
            <div className="bg-dark-base hover:bg-dark-card rounded-xl px-8 py-4 font-semibold transition-all duration-300 group-hover:scale-105">
              View My Projects
            </div>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="border-accent-indigo text-accent-indigo hover:bg-accent-indigo rounded-xl border px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:text-white"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}
