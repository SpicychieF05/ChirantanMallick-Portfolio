import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SalaryScope",
      description:
        "An intelligent Machine Learning application that predicts software developer salaries with 96% R² accuracy. Built using advanced regression algorithms and trained on comprehensive industry data to provide accurate salary insights for different roles, experience levels, and locations.",
      image: "/assets/images/projects/salaryscope/salaryscope-project.png",
      tech: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "Data Analysis"],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "SemesterHub",
      description:
        "A comprehensive academic note-sharing platform built with React.js and Firebase, designed to foster collaboration among students. Features real-time document sharing, organized course materials, user authentication, and a clean, intuitive interface for seamless academic resource management.",
      image: "/assets/images/projects/semesterhub/semesterhub-project.png",
      tech: [
        "React.js",
        "Firebase",
        "JavaScript",
        "Tailwind CSS",
        "Authentication",
      ],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "AI Resume Screener",
      description:
        "An intelligent resume screening application powered by Natural Language Processing and machine learning. Features PDF parsing, skill extraction, job matching algorithms, and automated candidate ranking to streamline the recruitment process for HR professionals.",
      image:
        "/assets/images/projects/ai-resume-screener/ai-resume-screener-project.png",
      tech: [
        "Python",
        "NLP",
        "Streamlit",
        "PDF Processing",
        "Machine Learning",
      ],
      github: "#",
      live: "#",
      featured: true,
    },
  ];

  const techColors: Record<string, string> = {
    Python: "bg-accent-indigo/20 text-accent-indigo",
    "Scikit-Learn": "bg-accent-teal/20 text-accent-teal",
    "React.js": "bg-accent-indigo/20 text-accent-indigo",
    Firebase: "bg-accent-teal/20 text-accent-teal",
    JavaScript: "bg-purple-500/20 text-purple-400",
    "Tailwind CSS": "bg-pink-500/20 text-pink-400",
    "Machine Learning": "bg-yellow-500/20 text-yellow-400",
    NLP: "bg-accent-teal/20 text-accent-teal",
    Streamlit: "bg-pink-500/20 text-pink-400",
    Pandas: "bg-purple-500/20 text-purple-400",
    "Data Analysis": "bg-yellow-500/20 text-yellow-400",
    Authentication: "bg-yellow-500/20 text-yellow-400",
    "PDF Processing": "bg-pink-500/20 text-pink-400",
  };

  return (
    <section id="projects" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center"
        >
          <h2 className="font-clash text-accent-indigo mr-4 text-3xl font-bold sm:text-4xl">
            03.
          </h2>
          <h2 className="font-clash text-3xl font-bold sm:text-4xl">
            Featured Projects
          </h2>
          <div className="ml-8 h-px flex-1 bg-slate-600"></div>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="glassmorphism group overflow-hidden rounded-xl transition-all duration-300 hover:scale-105">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        console.log(
                          `Project image failed to load: ${project.image}`
                        );
                        // Fallback to a placeholder with project name
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23334155' rx='8'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='central' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='%2394a3b8'%3E${project.title}%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='central' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' fill='%2364748b'%3EScreenshot needed%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                className={
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }
              >
                <p className="text-accent-teal mb-2 font-mono">
                  Featured Project
                </p>
                <h3 className="font-clash mb-4 text-2xl font-bold sm:text-3xl">
                  {project.title}
                </h3>
                <div className="glassmorphism mb-6 rounded-xl p-6">
                  <p className="leading-relaxed text-slate-300">
                    {project.description}
                  </p>
                </div>
                <div className="mb-6 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full px-3 py-1 font-mono text-sm ${techColors[tech] || "bg-gray-500/20 text-gray-400"}`}
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
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={project.live}
                    className="text-accent-indigo hover:text-accent-teal transition-colors duration-300 hover:scale-110"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="h-6 w-6" />
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
