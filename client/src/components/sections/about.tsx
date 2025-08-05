import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function About() {
  const technologies = [
    "JavaScript (ES6+)",
    "React.js",
    "Python",
    "Firebase",
    "Machine Learning",
    "Tailwind CSS"
  ];

  return (
    <section id="about" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-16"
        >
          <h2 className="font-clash font-bold text-3xl sm:text-4xl text-accent-indigo mr-4">01.</h2>
          <h2 className="font-clash font-bold text-3xl sm:text-4xl">About Me</h2>
          <div className="flex-1 h-px bg-slate-600 ml-8"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-slate-300">
              I'm <span className="text-accent-teal">Chirantan Mallick</span>, a final-year BCA student at <span className="text-accent-teal">Seacom Skills University</span>, driven by a deep curiosity that began with a simple question: <span className="text-accent-indigo">How do websites work?</span> That early fascination sparked a journey through the world of technology—one that now blends front-end development with the power of artificial intelligence.
            </p>
            
            <p className="text-lg leading-relaxed text-slate-300">
              I started with web development, gradually expanding into AI and its integration with modern applications. Along the way, I gained practical experience through internships with <span className="text-accent-indigo">IBM SkillsBuild</span> and <span className="text-accent-teal">Microsoft-SAP (TechSaksham)</span>, where I worked on impactful projects and explored emerging technologies hands-on.
            </p>
            
            <p className="text-lg leading-relaxed text-slate-300">
              One of the defining moments in my journey was founding <span className="text-accent-indigo">SemesterHub</span>, a collaborative academic note-sharing platform built to simplify learning and resource-sharing for students. It taught me the value of building tools that solve real-world problems.
            </p>
            
            <p className="text-lg leading-relaxed text-slate-300">
              Recently, I participated in <span className="text-accent-teal">Ideathon 2025</span>, where I led innovative, problem-solving projects that deepened my commitment to building tech that's both smart and meaningful.
            </p>
            
            <p className="text-lg leading-relaxed text-slate-300">
              Today, I focus on creating <span className="text-accent-indigo">intelligent, user-friendly web applications</span> that bring together thoughtful design and AI-driven functionality. As I near graduation, I'm excited to contribute to projects that push boundaries, solve real problems, and make technology more human.
            </p>
            
            <p className="text-lg leading-relaxed text-slate-300">
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 gap-2 text-sm font-mono">
              {technologies.map((tech, index) => (
                <motion.div 
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <ChevronRight className="w-4 h-4 text-accent-teal" />
                  <span>{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden glassmorphism hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                  alt="Chirantan Mallick" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute inset-0 border-2 border-accent-teal rounded-2xl translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
