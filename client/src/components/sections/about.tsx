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
              Hello! I'm Chirantan, a passionate final-year BCA student at <span className="text-accent-teal">Seacom Skills University</span> with a deep fascination for technology and innovation. My journey began with curiosity about how websites work, which led me to explore front-end development and eventually discover the exciting world of artificial intelligence.
            </p>
            
            <p className="text-lg leading-relaxed text-slate-300">
              During my internships at <span className="text-accent-indigo">IBM SkillsBuild</span> and <span className="text-accent-teal">Microsoft-SAP (TechSaksham)</span>, I've gained hands-on experience in cutting-edge technologies and worked on impactful projects. I'm also the founder of <span className="text-accent-indigo">SemesterHub</span>, an academic note-sharing platform that helps students collaborate and learn together.
            </p>
            
            <p className="text-lg leading-relaxed text-slate-300">
              My goal is to bridge the gap between beautiful user interfaces and intelligent systems, creating web applications that are not only visually appealing but also powered by AI to solve real-world problems. I'm actively preparing for <span className="text-accent-teal">Ideathon 2025</span> where I'll be leading innovative projects.
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
