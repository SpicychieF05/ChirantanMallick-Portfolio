import { motion } from "framer-motion";
import { Code, Database, GitBranch, Layout } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C/C++", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: ["React.js", "HTML/CSS", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend & DB",
      icon: Database,
      skills: ["Firebase", "Supabase", "MySQL", "Streamlit"],
    },
    {
      title: "Tools & Other",
      icon: GitBranch,
      skills: ["Git & GitHub", "VS Code", "Canva", "Machine Learning"],
    },
  ];

  const iconMap = {
    Languages: Code,
    Frontend: Layout,
    "Backend & DB": Database,
    "Tools & Other": GitBranch,
  };

  return (
    <section
      id="skills"
      className="relative z-10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center sm:mb-16"
        >
          <h2 className="font-clash text-accent-indigo mr-3 text-2xl font-bold sm:mr-4 sm:text-3xl lg:text-4xl">
            02.
          </h2>
          <h2 className="font-clash text-2xl font-bold sm:text-3xl lg:text-4xl">
            Skills & Technologies
          </h2>
          <div className="ml-4 h-px flex-1 bg-slate-600 sm:ml-8"></div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glassmorphism hover:shadow-accent-indigo/20 rounded-xl p-4 transition-all duration-300 hover:shadow-lg sm:p-6"
              >
                <h3 className="font-clash text-accent-indigo mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">
                  {category.title}
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + skillIndex * 0.1,
                      }}
                      className="flex items-center space-x-2 sm:space-x-3"
                    >
                      <IconComponent className="text-accent-teal h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-sm sm:text-base">{skill}</span>
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
