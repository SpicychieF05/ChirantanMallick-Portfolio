import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function About() {
  const technologies = [
    "JavaScript (ES6+)",
    "React.js",
    "Python",
    "Firebase",
    "Machine Learning",
    "Tailwind CSS",
  ];

  return (
    <section
      id="about"
      className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center sm:mb-16"
        >
          <h2 className="font-clash text-accent-indigo mr-3 text-2xl font-bold sm:mr-4 sm:text-3xl lg:text-4xl">
            01.
          </h2>
          <h2 className="font-clash text-2xl font-bold sm:text-3xl lg:text-4xl">
            About Me
          </h2>
          <div className="ml-4 h-px flex-1 bg-slate-600 sm:ml-8"></div>
        </motion.div>

        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              I'm <span className="text-accent-teal">Chirantan Mallick</span>, a
              final-year BCA student at{" "}
              <span className="text-accent-teal">Seacom Skills University</span>
              , driven by a deep curiosity that began with a simple question:{" "}
              <span className="text-accent-indigo">How do websites work?</span>{" "}
              That early fascination sparked a journey through the world of
              technology—one that now blends front-end development with the
              power of artificial intelligence.
            </p>

            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              I started with web development, gradually expanding into AI and
              its integration with modern applications. Along the way, I gained
              practical experience through internships with{" "}
              <span className="text-accent-indigo">IBM SkillsBuild</span> and{" "}
              <span className="text-accent-teal">
                Microsoft-SAP (TechSaksham)
              </span>
              , where I worked on impactful projects and explored emerging
              technologies hands-on.
            </p>

            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              One of the defining moments in my journey was founding{" "}
              <span className="text-accent-indigo">SemesterHub</span>, a
              collaborative academic note-sharing platform built to simplify
              learning and resource-sharing for students. It taught me the value
              of building tools that solve real-world problems.
            </p>

            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              Recently, I participated in{" "}
              <span className="text-accent-teal">Ideathon 2025</span>, where I
              led innovative, problem-solving projects that deepened my
              commitment to building tech that's both smart and meaningful.
            </p>

            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              Today, I focus on creating{" "}
              <span className="text-accent-indigo">
                intelligent, user-friendly web applications
              </span>{" "}
              that bring together thoughtful design and AI-driven functionality.
              As I near graduation, I'm excited to contribute to projects that
              push boundaries, solve real problems, and make technology more
              human.
            </p>

            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              Here are a few technologies I've been working with recently:
            </p>

            <div className="grid grid-cols-1 gap-1.5 font-mono text-sm sm:grid-cols-2 sm:gap-2">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <ChevronRight className="text-accent-teal h-4 w-4" />
                  <span>{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Shining effect overlay */}
              <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl">
                <div className="animate-shine absolute -inset-10 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>

              <div className="glassmorphism h-80 w-72 overflow-hidden rounded-2xl sm:h-96 sm:w-80 lg:h-[28rem] lg:w-96 xl:h-[32rem] xl:w-[26rem]">
                <img
                  src="https://res.cloudinary.com/dlxybta5a/image/upload/v1754429079/Chirantan-mallick-hero-image_sdw6ld.jpg"
                  alt="Chirantan Mallick"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Crect width='320' height='320' fill='%23334155' rx='12'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='central' text-anchor='middle' font-family='Arial, sans-serif' font-size='24' fill='%2394a3b8'%3EProfile Photo%3C/text%3E%3Ctext x='50%25' y='65%25' dominant-baseline='central' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='%2364748b'%3EPlace your image here%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              <div className="border-accent-teal absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-2xl border-2 sm:translate-x-5 sm:translate-y-5 lg:translate-x-6 lg:translate-y-6"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
