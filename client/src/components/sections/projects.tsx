import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SalaryScope",
      description:
        "An intelligent Machine Learning application that predicts software developer salaries with 96% R² accuracy. Built using advanced regression algorithms and trained on comprehensive industry data to provide accurate salary insights for different roles, experience levels, and locations.",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429205/salaryscope-project_aivyxb.png",
      tech: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "Data Analysis"],
      github: "https://github.com/SpicychieF05/salary_scope",
      live: "https://salaryscope.streamlit.app/",
      featured: true,
    },
    {
      title: "SemesterHub",
      description:
        "A comprehensive academic note-sharing platform built with React.js and Firebase, designed to foster collaboration among students. Features real-time document sharing, organized course materials, user authentication, and a clean, intuitive interface for seamless academic resource management.",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429175/semesterhub-project_wrskff.png",
      tech: [
        "React.js",
        "Firebase",
        "JavaScript",
        "Tailwind CSS",
        "Authentication",
      ],
      github: "https://github.com/SpicychieF05/semester-hub",
      live: "https://semesterhub.vercel.app/",
      featured: true,
    },
    {
      title: "AI Resume Screener",
      description:
        "An intelligent resume screening application powered by Natural Language Processing and machine learning. Features PDF parsing, skill extraction, job matching algorithms, and automated candidate ranking to streamline the recruitment process for HR professionals.",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429147/ai-resume-screener-project_pnabv9.png",
      tech: [
        "Python",
        "NLP",
        "Streamlit",
        "PDF Processing",
        "Machine Learning",
      ],
      github: "https://github.com/SpicychieF05/Ai-resume-analyser",
      live: "https://resume-analyser-cm.streamlit.app/",
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
    <section
      id="projects"
      className="relative z-10 w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 flex w-full items-center sm:mb-16"
        >
          <h2 className="font-clash text-accent-indigo mr-2 text-2xl font-bold sm:mr-4 sm:text-3xl lg:text-4xl">
            03.
          </h2>
          <h2 className="font-clash text-2xl font-bold sm:text-3xl lg:text-4xl">
            Featured Projects
          </h2>
          <div className="ml-4 h-px flex-1 bg-slate-600 sm:ml-8"></div>
        </motion.div>

        <div className="w-full space-y-16 sm:space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.25, 0.25, 0.25, 0.75],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="glassmorphism group overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl lg:hover:scale-105">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to a placeholder with project name
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23334155' rx='8'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='central' text-anchor='middle' font-family='Arial, sans-serif' font-size='20' fill='%2394a3b8'%3E${project.title}%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='central' text-anchor='middle' font-family='Arial, sans-serif' font-size='12' fill='%2364748b'%3EScreenshot needed%3C/text%3E%3C/svg%3E`;
                      }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                </div>
              </div>

              <div
                className={
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }
              >
                <p className="text-accent-teal mb-2 font-mono text-xs sm:text-sm">
                  Featured Project
                </p>
                <motion.h3
                  className="font-clash hover:text-accent-teal mb-3 text-lg font-bold transition-colors duration-300 sm:mb-4 sm:text-xl lg:text-2xl xl:text-3xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <div className="glassmorphism mb-4 rounded-xl p-3 transition-all duration-300 hover:bg-slate-800/60 sm:mb-6 sm:p-4 lg:p-6">
                  <p className="text-sm leading-relaxed text-slate-300 lg:text-base">
                    {project.description}
                  </p>
                </div>
                <div className="mb-4 flex flex-wrap gap-1.5 sm:mb-6 sm:gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      className={`rounded-full px-2 py-0.5 font-mono text-xs transition-all duration-200 hover:scale-105 hover:shadow-lg sm:px-2.5 sm:py-1 sm:text-sm ${techColors[tech] || "bg-gray-500/20 text-gray-400"}`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-indigo hover:text-accent-teal border-accent-indigo/30 hover:border-accent-teal hover:bg-accent-indigo/10 group flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm transition-all duration-300 hover:scale-105 sm:gap-2 sm:px-4 sm:py-2.5 lg:text-base"
                    aria-label={`View ${project.title} on GitHub`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 sm:h-5 sm:w-5" />
                    <span className="font-medium">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-teal hover:text-accent-indigo border-accent-teal/30 hover:border-accent-indigo hover:bg-accent-teal/10 group flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm transition-all duration-300 hover:scale-105 sm:gap-2 sm:px-4 sm:py-2.5 lg:text-base"
                    aria-label={`View ${project.title} live demo`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-5 sm:w-5" />
                    <span className="font-medium">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
