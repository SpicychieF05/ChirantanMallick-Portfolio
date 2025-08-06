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
      github: "#",
      live: "#",
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
      github: "#",
      live: "#",
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
    <section
      id="projects"
      className="relative z-10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center sm:mb-16"
        >
          <h2 className="font-clash text-accent-indigo mr-2 text-2xl font-bold sm:mr-4 sm:text-3xl lg:text-4xl">
            03.
          </h2>
          <h2 className="font-clash text-2xl font-bold sm:text-3xl lg:text-4xl">
            Featured Projects
          </h2>
          <div className="ml-4 h-px flex-1 bg-slate-600 sm:ml-8"></div>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="glassmorphism group overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] lg:hover:scale-105">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to a placeholder with project name
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23334155' rx='8'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='central' text-anchor='middle' font-family='Arial, sans-serif' font-size='20' fill='%2394a3b8'%3E${project.title}%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='central' text-anchor='middle' font-family='Arial, sans-serif' font-size='12' fill='%2364748b'%3EScreenshot needed%3C/text%3E%3C/svg%3E`;
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
                <p className="text-accent-teal mb-2 font-mono text-sm sm:text-base">
                  Featured Project
                </p>
                <h3 className="font-clash mb-4 text-xl font-bold sm:text-2xl lg:text-3xl">
                  {project.title}
                </h3>
                <div className="glassmorphism mb-6 rounded-xl p-4 sm:p-6">
                  <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                    {project.description}
                  </p>
                </div>
                <div className="mb-6 flex flex-wrap gap-2 sm:gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full px-2.5 py-1 font-mono text-xs transition-all duration-200 hover:scale-105 sm:px-3 sm:text-sm ${techColors[tech] || "bg-gray-500/20 text-gray-400"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-6">
                  <a
                    href={project.github}
                    className="text-accent-indigo hover:text-accent-teal flex items-center gap-2 text-sm transition-all duration-300 hover:scale-110 sm:text-base"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="text-accent-indigo hover:text-accent-teal flex items-center gap-2 text-sm transition-all duration-300 hover:scale-110 sm:text-base"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="hidden sm:inline">Demo</span>
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
