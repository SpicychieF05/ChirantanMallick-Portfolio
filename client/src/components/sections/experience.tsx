import { motion } from "framer-motion";
import { ChevronRight, Award, Users, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "AI/ML Intern",
      company: "IBM SkillsBuild",
      period: "2025",
      description: [
        "Developed machine learning models for predictive analytics with focus on salary prediction algorithms",
        "Collaborated with cross-functional teams to implement AI solutions for real-world business problems",
        "Gained expertise in data preprocessing, model training, and performance optimization techniques"
      ],
      tech: ["Python", "Machine Learning", "Data Analytics", "IBM Watson"]
    },
    {
      title: "Tech Intern",
      company: "Microsoft-SAP (TechSaksham)",
      period: "2025",
      description: [
        "Worked on enterprise-level web applications using modern JavaScript frameworks and cloud technologies",
        "Contributed to digital transformation initiatives and learned industry best practices for scalable development",
        "Enhanced skills in cloud computing, DevOps practices, and agile development methodologies"
      ],
      tech: ["JavaScript", "Cloud Computing", "Azure", "SAP"]
    }
  ];

  const certifications = [
    { 
      title: "Python Programming - Udemy", 
      icon: Award,
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
    },
    { 
      title: "AWS Cloud Practitioner", 
      icon: Award,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
    },
    { 
      title: "IBM AI Engineering", 
      icon: Award,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
    },
    { 
      title: "Deloitte Technology Consulting", 
      icon: Award,
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
    },
    { 
      title: "Machine Learning Specialization", 
      icon: Award,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
    },
    { 
      title: "React.js Development", 
      icon: Award,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
    },
    { 
      title: "Data Science Fundamentals", 
      icon: Award,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
    },
    { 
      title: "JavaScript ES6+ Advanced", 
      icon: Award,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
    },
    { 
      title: "Ideathon 2025 Team Leader", 
      icon: Users,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
    },
    { 
      title: "Final Year BCA Student", 
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
    }
  ];

  const techColors: Record<string, string> = {
    "Python": "bg-accent-indigo/20 text-accent-indigo",
    "Machine Learning": "bg-accent-teal/20 text-accent-teal",
    "Data Analytics": "bg-purple-500/20 text-purple-400",
    "IBM Watson": "bg-pink-500/20 text-pink-400",
    "JavaScript": "bg-accent-indigo/20 text-accent-indigo",
    "Cloud Computing": "bg-accent-teal/20 text-accent-teal",
    "Azure": "bg-purple-500/20 text-purple-400",
    "SAP": "bg-pink-500/20 text-pink-400"
  };

  return (
    <section id="experience" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-16"
        >
          <h2 className="font-clash font-bold text-3xl sm:text-4xl text-accent-indigo mr-4">04.</h2>
          <h2 className="font-clash font-bold text-3xl sm:text-4xl">Experience</h2>
          <div className="flex-1 h-px bg-slate-600 ml-8"></div>
        </motion.div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glassmorphism p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-indigo/20"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="font-clash font-bold text-xl text-accent-indigo">{exp.title}</h3>
                <span className="font-mono text-accent-teal">{exp.period}</span>
              </div>
              <h4 className="font-semibold text-lg mb-4">{exp.company}</h4>
              <div className="space-y-3 text-slate-300 mb-6">
                {exp.description.map((desc, descIndex) => (
                  <motion.div 
                    key={descIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + descIndex * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <ChevronRight className="w-4 h-4 text-accent-teal mt-1 flex-shrink-0" />
                    <p>{desc}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span 
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm font-mono ${techColors[tech] || 'bg-gray-500/20 text-gray-400'}`}
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
            className="glassmorphism p-8 rounded-xl"
          >
            <h3 className="font-clash font-bold text-xl text-accent-indigo mb-6">Certifications & Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <motion.div 
                    key={cert.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="group relative cursor-pointer"
                  >
                    <div className="glassmorphism rounded-xl overflow-hidden aspect-square transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent-indigo/30 group-hover:scale-105">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-2 left-2 right-2">
                          <div className="flex items-center space-x-2 mb-1">
                            <IconComponent className="w-4 h-4 text-accent-teal" />
                          </div>
                          <p className="text-white text-xs font-semibold leading-tight line-clamp-2">
                            {cert.title}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Large popup in center on hover */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-80 h-80 glassmorphism rounded-2xl overflow-hidden shadow-2xl shadow-accent-indigo/40 border border-accent-indigo/30"
                      >
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center space-x-3 mb-3">
                              <IconComponent className="w-6 h-6 text-accent-teal" />
                              <span className="text-accent-teal font-mono text-sm">Certificate</span>
                            </div>
                            <h4 className="text-white text-xl font-clash font-bold leading-tight">
                              {cert.title}
                            </h4>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
