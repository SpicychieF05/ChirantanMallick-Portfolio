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
    { title: "Python Programming - Udemy", icon: Award },
    { title: "AWS Cloud Practitioner", icon: Award },
    { title: "IBM AI Engineering", icon: Award },
    { title: "Deloitte Technology Consulting", icon: Award },
    { title: "Ideathon 2025 Team Leader", icon: Users },
    { title: "Final Year BCA Student", icon: GraduationCap }
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
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <motion.div 
                    key={cert.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center space-x-3"
                  >
                    <IconComponent className="w-5 h-5 text-accent-teal" />
                    <span>{cert.title}</span>
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
