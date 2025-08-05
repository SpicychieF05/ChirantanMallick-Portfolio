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
        "Worked on enterprise-level web applications using modern JavaScript frameworks and cloud technologies",
        "Contributed to digital transformation initiatives and learned industry best practices for scalable development",
        "Enhanced skills in cloud computing, DevOps practices, and agile development methodologies",
      ],
      tech: ["JavaScript", "Cloud Computing", "Azure", "SAP"],
    },
  ];

  // Super simple certificates array - just images
  const certifications = [
    {
      title: "AWS Forge Certificate",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429355/AWS-Forge-certificate_dcdub1.jpg",
    },
    {
      title: "Constellation Soft Skills",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429357/constilation_soft_skill-certificate_kvpck7.jpg",
    },
    {
      title: "Deloitte Technology Job Simulation",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429359/Deloitte-ForgeTechnology_Job_Simulation_nd4kkc.jpg",
    },
    {
      title: "Edunet AI Program",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429361/Edunet-Artifical-Intelligence-Program_g87ldr.jpg",
    },
    {
      title: "Google Gen AI Certificate",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429363/Google-Gen-Ai-Certificate_hhqwjr.jpg",
    },
    {
      title: "IBM Skills Build",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429365/IBMDesign20250723-29-5w2i6j_suosud.jpg",
    },
    {
      title: "LetsUpgrade C++",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429344/LetsUpgrade-C_umgqko.jpg",
    },
    {
      title: "LetsUpgrade Prompt Engineering",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429346/LetsUpgrade-PromptEng_sb90yw.jpg",
    },
    {
      title: "React Bootcamp Skillected",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429346/React-Bootcamp-Skillected_tbqwsv.jpg",
    },
    {
      title: "Seacom University Certificate",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429348/Secom_certificate_01.05.2024._enpn6k.jpg",
    },
    {
      title: "Tata Certificate Forge",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429350/Tata_Certificate-Forge_praypv.jpg",
    },
    {
      title: "TechSaksham Internship",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429352/TechSaksham-Internship-certificate_yepmjf.jpg",
    },
    {
      title: "Udemy Python Certificate",
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
          {/* Experiences */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphism rounded-xl p-8"
            >
              <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="font-clash text-accent-indigo text-xl font-bold">
                  {exp.title}
                </h3>
                <span className="text-accent-teal font-mono">{exp.period}</span>
              </div>
              <h4 className="mb-4 text-lg font-semibold">{exp.company}</h4>
              <div className="mb-6 space-y-3 text-slate-300">
                {exp.description.map((desc, descIndex) => (
                  <div key={descIndex} className="flex items-start space-x-3">
                    <ChevronRight className="text-accent-teal mt-1 h-4 w-4 flex-shrink-0" />
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
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

          {/* Certifications - SUPER SIMPLE */}
          <div className="glassmorphism rounded-xl p-8">
            <h3 className="font-clash text-accent-indigo mb-6 text-xl font-bold">
              Certifications & Achievements
            </h3>

            {/* Simple grid of images */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-800"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onLoad={() =>
                      console.log(`✅ ${cert.title} loaded successfully`)
                    }
                    onError={(e) => {
                      console.error(`❌ Failed to load ${cert.title}`);
                      // Simple fallback
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="h-full w-full flex items-center justify-center bg-gray-700 text-gray-300 text-center p-2">
                            <div>
                              <div class="text-2xl mb-1">🏆</div>
                              <div class="text-xs">${cert.title}</div>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
