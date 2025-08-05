import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTyping } from "@/hooks/use-typing";

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
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
            className="text-accent-teal font-mono text-lg mb-4"
          >
            Hello, my name is
          </motion.p>
          
          <h1 className="font-clash font-bold text-4xl sm:text-6xl lg:text-7xl mb-4">
            <span className={`${!isComplete ? 'typing-cursor' : ''}`}>
              {startTyping ? displayedText : ""}
            </span>
          </h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="font-clash font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-400 mb-8 text-center px-4 leading-relaxed"
          >
            <span className="inline-block">Front-end Developer | AI Engineer | BCA Student</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-slate-300 mb-12"
          >
            I'm a final-year BCA student at Seacom Skills University, passionate about creating innovative web experiences and exploring the frontiers of artificial intelligence. Currently building <span className="text-accent-teal">SemesterHub</span> and working on ML projects with <span className="text-accent-indigo">96% accuracy</span>.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button 
            onClick={() => scrollToSection('projects')}
            className="gradient-border group"
          >
            <div className="bg-dark-base px-8 py-4 rounded-xl hover:bg-dark-card transition-all duration-300 font-semibold group-hover:scale-105">
              View My Projects
            </div>
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="border border-accent-indigo text-accent-indigo px-8 py-4 rounded-xl hover:bg-accent-indigo hover:text-white transition-all duration-300 font-semibold hover:scale-105"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}
