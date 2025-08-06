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
      className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-accent-teal mb-3 font-mono text-sm sm:mb-4 sm:text-lg"
          >
            Hello, my name is
          </motion.p>

          <h1 className="font-clash mb-3 text-3xl font-bold leading-tight sm:mb-4 sm:text-5xl md:text-6xl lg:text-7xl">
            <span className={`${!isComplete ? "typing-cursor" : ""}`}>
              {startTyping ? displayedText : ""}
            </span>
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="font-clash mb-6 px-2 text-center text-base font-semibold leading-relaxed text-slate-400 sm:mb-8 sm:px-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
          >
            <span className="inline-block">
              Front-end Developer | AI Engineer | BCA Student
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mx-auto mb-8 max-w-2xl px-2 text-sm leading-relaxed text-slate-300 sm:mb-12 sm:px-0 sm:text-lg lg:text-xl"
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
          className="flex flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:gap-6 sm:px-0"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="gradient-border group w-full sm:w-auto"
          >
            <div className="bg-dark-base hover:bg-dark-card rounded-xl px-6 py-3 font-semibold transition-all duration-300 group-hover:scale-105 sm:px-8 sm:py-4">
              View My Projects
            </div>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="border-accent-indigo text-accent-indigo hover:bg-accent-indigo w-full rounded-xl border px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:text-white sm:w-auto sm:px-8 sm:py-4"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}
