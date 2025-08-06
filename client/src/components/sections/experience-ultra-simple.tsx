import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "AI/ML Intern",
      company: "AICTE (leveraging IBM SkillsBuild)",
      period: "2025",
      description: [
        "Developed an AI-powered salary prediction system using Python and Streamlit, implementing Gradient Boosting Regressor model with 96% R² accuracy to deliver precise salary forecasts for job seekers and employers.",
        "Built responsive web application with modern dark UI design featuring glowing blue accents and mobile-first optimization, enabling seamless user interaction across all devices with real-time salary predictions and personalized career insights.",
        "Engineered scalable cloud-deployed solution on Streamlit Community Cloud platform, integrating machine learning pipelines with scikit-learn and pandas to process user inputs and deliver instant salary estimates with confidence indicators.",
      ],
      tech: [
        "Salary Prediction",
        "Machine Learning",
        "Career Analytics",
        "Predictive Modeling",
        "HR Technology",
      ],
    },
    {
      title: "AI Intern",
      company: "Microsoft-SAP (TechSaksham Program) By Edunet.org",
      period: "2025",
      description: [
        "Developed an AI-powered resume screening system using Python and Streamlit, reducing manual recruitment time by 70% and improving candidate matching accuracy.",
        "Built intelligent text processing features using TF-IDF vectorization and cosine similarity, enabling HR teams to process 100+ resumes efficiently with quantified match scores.",
        "Implemented responsive web interface with personalized feedback system, providing actionable career insights to job seekers while maintaining 95% user satisfaction ratings.",
      ],
      tech: [
        "Artificial Intelligence",
        "Talent Analytics",
        "Recruitment Intelligence",
        "HR Technology",
      ],
    },
    {
      title: "Full Stack Ideathon Project",
      company: "Seacom Skills University Ideathon 2025",
      period: "2025",
      description: [
        "Built comprehensive academic platform using React 18, Supabase, and Tailwind CSS, with authentication-protected downloads and secure user access control.",
        "Implemented modern glass morphism UI design with dark theme optimization, focusing on responsive layouts and seamless cross-device user experience.",
        "Integrated Supabase backend APIs with Google OAuth authentication, managing application state and real-time database synchronization for academic resource management.",
        "Developed admin moderation system with real-time user management capabilities, content approval workflows, and scalable platform administration features.",
        "Deployed production-ready application on Vercel with optimized CI/CD pipeline, demonstrating full-stack development expertise and modern deployment practices.",
      ],
      tech: [
        "Academic Platform",
        "React.js",
        "Supabase Integration",
        "Student Collaboration",
        "Educational Technology",
      ],
    },
  ];

  const certificates = [
    {
      title: "AWS Forge Certificate",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429355/AWS-Forge-certificate_dcdub1.jpg",
      description: "Amazon Web Services cloud computing certification",
    },
    {
      title: "Google Gen AI Certificate",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429363/Google-Gen-Ai-Certificate_hhqwjr.jpg",
      description: "Google Generative AI certification program",
    },
    {
      title: "IBM Design Certificate",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429365/IBMDesign20250723-29-5w2i6j_suosud.jpg",
      description: "IBM Design thinking and methodology certification",
    },
    {
      title: "Deloitte Job Simulation",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429359/Deloitte-ForgeTechnology_Job_Simulation_nd4kkc.jpg",
      description: "Deloitte job simulation program by Forge",
    },
    {
      title: "TechSaksham Internship",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429352/TechSaksham-Internship-certificate_yepmjf.jpg",
      description: "Microsoft-SAP TechSaksham internship program",
    },
    {
      title: "React Bootcamp",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429346/React-Bootcamp-Skillected_tbqwsv.jpg",
      description: "Comprehensive React.js development bootcamp by Skillected",
    },
    {
      title: "Tata Certificate Forge",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429350/Tata_Certificate-Forge_praypv.jpg",
      description: "TATA Data Visualization certification",
    },
    {
      title: "LetsUpgrade C++",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429344/LetsUpgrade-C_umgqko.jpg",
      description: "C++ Bootcamp certification",
    },
    {
      title: "LetsUpgrade Prompt Engineering",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429346/LetsUpgrade-PromptEng_sb90yw.jpg",
      description: "AI Prompt Engineering certification",
    },
    {
      title: "Udemy Python Certificate",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429353/Udemy_Python_Certificate_j1dhoj.jpg",
      description: "Complete Python programming course",
    },
    {
      title: "Edunet AI Program",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429361/Edunet-Artifical-Intelligence-Program_g87ldr.jpg",
      description:
        "Artificial Intelligence program certification by IBM SkillsBuild",
    },
    {
      title: "Constellation Soft Skills",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429357/constilation_soft_skill-certificate_kvpck7.jpg",
      description: "Professional soft skills development",
    },
    {
      title: "Ideathon 2025 Certificate",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429348/Secom_certificate_01.05.2024._enpn6k.jpg",
      description: "SSU Ideathon 2025 Certificate",
    },
  ];

  return (
    <section
      id="experience"
      className="relative z-10 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-accent-teal mb-4 font-mono">
            03. Where I've Worked
          </h2>
          <h3 className="font-clash mb-8 text-4xl font-bold sm:text-5xl">
            Experience
          </h3>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
            My journey through various roles and projects, building expertise in
            AI/ML, web development, and emerging technologies.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glassmorphism rounded-xl p-8 transition-all duration-300 hover:bg-slate-800/40"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="md:w-1/4">
                    <h4 className="font-clash mb-2 text-xl font-bold text-white">
                      {experience.title}
                    </h4>
                    <h5 className="text-accent-teal mb-2 font-semibold">
                      {experience.company}
                    </h5>
                    <span className="font-mono text-sm text-slate-400">
                      {experience.period}
                    </span>
                  </div>

                  <div className="md:w-3/4">
                    <ul className="mb-6 space-y-3">
                      {experience.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-slate-300"
                        >
                          <ChevronRight className="text-accent-teal mt-1 h-4 w-4 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-accent-teal/10 text-accent-teal rounded-full px-3 py-1 font-mono text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h3 className="font-clash mb-4 text-3xl font-bold sm:text-4xl">
            Certifications
          </h3>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
            Professional certifications and achievements that showcase my
            commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glassmorphism group rounded-xl p-6 transition-all duration-300 hover:bg-slate-800/40"
            >
              <div className="mb-4 flex h-48 items-center justify-center overflow-hidden rounded-lg bg-slate-700/50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <h4 className="font-clash mb-2 text-lg font-bold text-white">
                {cert.title}
              </h4>
              <p className="text-sm text-slate-400">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
