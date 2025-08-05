import { motion } from "framer-motion";
import { Award, ChevronRight, GraduationCap, Users, X } from "lucide-react";
import { useState } from "react";

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const experiences = [
    {
      title: "AI/ML Intern",
      company: "IBM SkillsBuild",
      logo: "/assets/images/experience/companies/ibm-logo.png",
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
      logo: "/assets/images/experience/companies/microsoft-sap-logo.png",
      period: "2025",
      description: [
        "Worked on enterprise-level web applications using modern JavaScript frameworks and cloud technologies",
        "Contributed to digital transformation initiatives and learned industry best practices for scalable development",
        "Enhanced skills in cloud computing, DevOps practices, and agile development methodologies",
      ],
      tech: ["JavaScript", "Cloud Computing", "Azure", "SAP"],
    },
  ];

  const certifications = [
    {
      title: "AWS Forge Certificate",
      icon: Award,
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429355/AWS-Forge-certificate_dcdub1.jpg",
    },
    {
      title: "Constellation Soft Skills",
      icon: Award,
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429357/constilation_soft_skill-certificate_kvpck7.jpg",
    },
    {
      title: "Deloitte Technology Job Simulation",
      icon: Award,
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429359/Deloitte-ForgeTechnology_Job_Simulation_nd4kkc.jpg",
    },
    {
      title: "Edunet AI Program",
      icon: Award,
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429361/Edunet-Artifical-Intelligence-Program_g87ldr.jpg",
    },
    {
      title: "Google Gen AI Certificate",
      icon: Award,
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429363/Google-Gen-Ai-Certificate_hhqwjr.jpg",
    },
    {
      title: "IBM Skills Build",
      icon: Award,
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429365/IBMDesign20250723-29-5w2i6j_suosud.jpg",
    },
    {
      title: "LetsUpgrade C++",
      icon: Award,
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429344/LetsUpgrade-C_umgqko.jpg",
    },
    {
      title: "LetsUpgrade Prompt Engineering",
      icon: Award,
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429346/LetsUpgrade-PromptEng_sb90yw.jpg",
    },
    {
      title: "React Bootcamp Skillected",
      icon: Award,
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429346/React-Bootcamp-Skillected_tbqwsv.jpg",
    },
    {
      title: "Seacom University Certificate",
      icon: GraduationCap,
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429348/Secom_certificate_01.05.2024._enpn6k.jpg",
    },
    {
      title: "Tata Certificate Forge",
      icon: Award,
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429350/Tata_Certificate-Forge_praypv.jpg",
    },
    {
      title: "TechSaksham Internship",
      icon: Users,
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429352/TechSaksham-Internship-certificate_yepmjf.jpg",
    },
    {
      title: "Udemy Python Certificate",
      icon: Award,
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429353/Udemy_Python_Certificate_j1dhoj.jpg",
    },
  ];

  const techColors: Record<string, string> = {
    Python: "bg-accent-indigo/20 text-accent-indigo",
    "Machine Learning": "bg-accent-teal/20 text-accent-teal",
    "Data Analytics": "bg-purple-500/20 text-purple-400",
    "IBM Watson": "bg-pink-500/20 text-pink-400",
    JavaScript: "bg-accent-indigo/20 text-accent-indigo",
    "Cloud Computing": "bg-accent-teal/20 text-accent-teal",
    Azure: "bg-purple-500/20 text-purple-400",
    SAP: "bg-pink-500/20 text-pink-400",
  };

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
          className="mb-16 flex items-center"
        >
          <h2 className="font-clash text-accent-indigo mr-4 text-3xl font-bold sm:text-4xl">
            04.
          </h2>
          <h2 className="font-clash text-3xl font-bold sm:text-4xl">
            Experience
          </h2>
          <div className="ml-8 h-px flex-1 bg-slate-600"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glassmorphism hover:shadow-accent-indigo/20 rounded-xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-12 w-12 rounded-lg bg-white/10 object-contain p-2"
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load company logo: ${exp.logo}`);
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' fill='%23334155' rx='8'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='%2394a3b8'%3E🏢%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <h3 className="font-clash text-accent-indigo text-xl font-bold">
                    {exp.title}
                  </h3>
                </div>
                <span className="text-accent-teal font-mono">{exp.period}</span>
              </div>
              <h4 className="mb-4 ml-16 text-lg font-semibold">
                {exp.company}
              </h4>
              <div className="mb-6 ml-16 space-y-3 text-slate-300">
                {exp.description.map((desc, descIndex) => (
                  <motion.div
                    key={descIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + descIndex * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <ChevronRight className="text-accent-teal mt-1 h-4 w-4 flex-shrink-0" />
                    <p>{desc}</p>
                  </motion.div>
                ))}
              </div>
              <div className="ml-16 flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full px-3 py-1 font-mono text-sm ${techColors[tech] || "bg-gray-500/20 text-gray-400"}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glassmorphism rounded-xl p-8"
          >
            <h3 className="font-clash text-accent-indigo mb-6 text-xl font-bold">
              Certifications & Achievements
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="relative cursor-pointer"
                    onClick={() => setSelectedCert(index)}
                  >
                    <div className="glassmorphism hover:shadow-accent-indigo/20 aspect-[4/3] overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          console.error(
                            `Failed to load certificate image: ${cert.image}`
                          );
                          e.currentTarget.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23334155' rx='8'/%3E%3Ctext x='50%25' y='40%25' dominant-baseline='central' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='%2394a3b8'%3E🏆%3C/text%3E%3Ctext x='50%25' y='70%25' dominant-baseline='central' text-anchor='middle' font-family='Arial, sans-serif' font-size='10' fill='%2364748b'%3ECertificate%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-2 left-2 right-2">
                          <div className="mb-1 flex items-center space-x-2">
                            <IconComponent className="text-accent-teal h-4 w-4" />
                          </div>
                          <p className="line-clamp-2 text-xs font-semibold leading-tight text-white">
                            {cert.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Modal popup on tap/click */}
            {selectedCert !== null && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                onClick={() => setSelectedCert(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="glassmorphism shadow-accent-indigo/40 border-accent-indigo/30 relative m-4 h-[24rem] w-[36rem] overflow-hidden rounded-2xl border shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-colors duration-200 hover:bg-black/70"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <img
                    src={certifications[selectedCert].image}
                    alt={certifications[selectedCert].title}
                    className="h-full w-full object-cover"
                    loading="eager"
                    onError={(e) => {
                      console.error(
                        `Failed to load modal certificate image: ${certifications[selectedCert].image}`
                      );
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23334155' rx='8'/%3E%3Ctext x='50%25' y='40%25' dominant-baseline='central' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='%2394a3b8'%3E🏆%3C/text%3E%3Ctext x='50%25' y='70%25' dominant-baseline='central' text-anchor='middle' font-family='Arial, sans-serif' font-size='14' fill='%2364748b'%3ECertificate%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="mb-3 flex items-center space-x-3">
                        {(() => {
                          const IconComponent =
                            certifications[selectedCert].icon;
                          return (
                            <IconComponent className="text-accent-teal h-6 w-6" />
                          );
                        })()}
                        <span className="text-accent-teal font-mono text-sm">
                          Certificate
                        </span>
                      </div>
                      <h4 className="font-clash text-xl font-bold leading-tight text-white">
                        {certifications[selectedCert].title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
