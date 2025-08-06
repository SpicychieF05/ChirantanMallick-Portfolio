import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "AI/ML Intern",
      company: "IBM SkillsBuild",
      period: "2025",
      description: [
        "Developed machine learning models for predictive analytics with focus on salary prediction algorithms",
        "Collaborated with cross-functional teams to implement AI solutions for real-world business problems",
        "Gained expertise in data preprocessing, model training, and performance optimization techniques",
      ],
      tech: ["Python", "Machine Learning", "Data Analytics", "IBM Watson"],
    },
    {
      title: "Tech Intern",
      company: "Microsoft-SAP (TechSaksham)",
      period: "2025",
      description: [
        "Participated in comprehensive technology internship program focusing on enterprise solutions",
        "Developed skills in cloud computing, enterprise software development, and digital transformation",
        "Contributed to projects involving modern tech stacks and industry best practices",
      ],
      tech: [
        "Cloud Computing",
        "Enterprise Solutions",
        "Digital Transformation",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Freelance Projects",
      period: "2024 - Present",
      description: [
        "Built responsive web applications using React.js and modern JavaScript frameworks",
        "Implemented UI/UX designs with focus on user experience and performance optimization",
        "Integrated APIs and managed state using Redux and Context API",
      ],
      tech: ["React.js", "JavaScript", "Tailwind CSS", "API Integration"],
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
      title: "Deloitte Forge Technology",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429359/Deloitte-ForgeTechnology_Job_Simulation_nd4kkc.jpg",
      description: "Deloitte technology job simulation program",
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
      description: "Comprehensive React.js development bootcamp",
    },
    {
      title: "Tata Certificate Forge",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429350/Tata_Certificate-Forge_praypv.jpg",
      description: "Tata Forge technology certification",
    },
    {
      title: "LetsUpgrade C++",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429344/LetsUpgrade-C_umgqko.jpg",
      description: "C++ programming certification",
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
      description: "Artificial Intelligence program certification",
    },
    {
      title: "Constellation Soft Skills",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429357/constilation_soft_skill-certificate_kvpck7.jpg",
      description: "Professional soft skills development",
    },
    {
      title: "Secom Certificate",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429348/Secom_certificate_01.05.2024._enpn6k.jpg",
      description: "Secom technology certification",
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
              <div className="mb-4 aspect-video h-48 overflow-hidden rounded-lg bg-slate-700/50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
