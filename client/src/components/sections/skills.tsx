import { motion } from "framer-motion";
import { Code, Layout, Database, Cloud, GitBranch, Code2, Palette, Brain } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C/C++", "Python", "JavaScript", "TypeScript"]
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: ["React.js", "HTML/CSS", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend & DB",
      icon: Database,
      skills: ["Firebase", "Supabase", "MySQL", "Streamlit"]
    },
    {
      title: "Tools & Other",
      icon: GitBranch,
      skills: ["Git & GitHub", "VS Code", "Canva", "Machine Learning"]
    }
  ];

  const iconMap = {
    Languages: Code,
    Frontend: Layout,
    "Backend & DB": Database,
    "Tools & Other": GitBranch
  };

  return (
    <section id="skills" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-16"
        >
          <h2 className="font-clash font-bold text-3xl sm:text-4xl text-accent-indigo mr-4">02.</h2>
          <h2 className="font-clash font-bold text-3xl sm:text-4xl">Skills & Technologies</h2>
          <div className="flex-1 h-px bg-slate-600 ml-8"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glassmorphism p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-indigo/20"
              >
                <h3 className="font-clash font-semibold text-xl mb-4 text-accent-indigo">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + skillIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <IconComponent className="w-5 h-5 text-accent-teal" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
