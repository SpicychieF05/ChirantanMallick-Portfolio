import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SalaryScope",
      description: "An intelligent Machine Learning application that predicts software developer salaries with 96% R² accuracy. Built using advanced regression algorithms and trained on comprehensive industry data to provide accurate salary insights for different roles, experience levels, and locations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tech: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "Data Analysis"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "SemesterHub",
      description: "A comprehensive academic note-sharing platform built with React.js and Firebase, designed to foster collaboration among students. Features real-time document sharing, organized course materials, user authentication, and a clean, intuitive interface for seamless academic resource management.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tech: ["React.js", "Firebase", "JavaScript", "Tailwind CSS", "Authentication"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "AI Resume Screener",
      description: "An intelligent resume screening application powered by Natural Language Processing and machine learning. Features PDF parsing, skill extraction, job matching algorithms, and automated candidate ranking to streamline the recruitment process for HR professionals.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tech: ["Python", "NLP", "Streamlit", "PDF Processing", "Machine Learning"],
      github: "#",
      live: "#",
      featured: true
    }
  ];

  const techColors: Record<string, string> = {
    "Python": "bg-accent-indigo/20 text-accent-indigo",
    "Scikit-Learn": "bg-accent-teal/20 text-accent-teal",
    "React.js": "bg-accent-indigo/20 text-accent-indigo",
    "Firebase": "bg-accent-teal/20 text-accent-teal",
    "JavaScript": "bg-purple-500/20 text-purple-400",
    "Tailwind CSS": "bg-pink-500/20 text-pink-400",
    "Machine Learning": "bg-yellow-500/20 text-yellow-400",
    "NLP": "bg-accent-teal/20 text-accent-teal",
    "Streamlit": "bg-pink-500/20 text-pink-400",
    "Pandas": "bg-purple-500/20 text-purple-400",
    "Data Analysis": "bg-yellow-500/20 text-yellow-400",
    "Authentication": "bg-yellow-500/20 text-yellow-400",
    "PDF Processing": "bg-pink-500/20 text-pink-400"
  };

  return (
    <section id="projects" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-16"
        >
          <h2 className="font-clash font-bold text-3xl sm:text-4xl text-accent-indigo mr-4">03.</h2>
          <h2 className="font-clash font-bold text-3xl sm:text-4xl">Featured Projects</h2>
          <div className="flex-1 h-px bg-slate-600 ml-8"></div>
        </motion.div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="glassmorphism rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <p className="font-mono text-accent-teal mb-2">Featured Project</p>
                <h3 className="font-clash font-bold text-2xl sm:text-3xl mb-4">{project.title}</h3>
                <div className="glassmorphism p-6 rounded-xl mb-6">
                  <p className="text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-mono ${techColors[tech] || 'bg-gray-500/20 text-gray-400'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    className="text-accent-indigo hover:text-accent-teal transition-colors duration-300 hover:scale-110"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href={project.live} 
                    className="text-accent-indigo hover:text-accent-teal transition-colors duration-300 hover:scale-110"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
