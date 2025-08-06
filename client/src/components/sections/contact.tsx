import AnimatedButton from "@/components/ui/animated-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { faLinktree } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative z-10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-accent-teal mb-4 font-mono">05. What's Next?</h2>
          <h3 className="font-clash mb-8 text-4xl font-bold sm:text-5xl">
            Get In Touch
          </h3>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">
            I'm currently looking for new opportunities and exciting projects to
            work on. Whether you have a question, want to collaborate, or just
            want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glassmorphism rounded-xl p-6">
              <h4 className="font-clash mb-6 text-xl font-semibold">
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-accent-teal h-5 w-5" />
                  <a
                    href="mailto:mallickchirantan@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-indigo text-slate-300 transition-colors duration-300"
                  >
                    mallickchirantan@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-accent-teal h-5 w-5" />
                  <a
                    href="tel:+918327438929"
                    className="hover:text-accent-indigo text-slate-300 transition-colors duration-300"
                  >
                    +91 8327438929
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-accent-teal h-5 w-5" />
                  <span className="text-slate-300">
                    Bolpur, Birbhum, West Bengal, India
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <GraduationCap className="text-accent-teal h-5 w-5" />
                  <span className="text-slate-300">
                    Seacom Skills University
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glassmorphism rounded-xl p-6">
              <h4 className="font-clash mb-6 text-xl font-semibold">
                Connect With Me
              </h4>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/spicychief05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-indigo text-slate-300 transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chirantan-mallick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-indigo text-slate-300 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:mallickchirantan@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-teal text-slate-300 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="tel:+918327438929"
                  className="hover:text-accent-indigo text-slate-300 transition-all duration-300 hover:scale-110"
                >
                  <Phone className="h-6 w-6" />
                </a>
                <a
                  href="https://linktr.ee/chirantan_mallick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-teal text-slate-300 transition-all duration-300 hover:scale-110"
                >
                  <FontAwesomeIcon icon={faLinktree} className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="text-center">
              <a
                href="https://drive.google.com/uc?export=download&id=1QqQ_Wkx8LxN6IeuDaYHx2s3q2zzQHfRs"
                className="gradient-border group inline-block"
                download="Chirantan_Mallick_Resume.pdf"
              >
                <div className="bg-dark-base hover:bg-dark-card flex items-center space-x-2 rounded-xl px-8 py-4 font-semibold transition-all duration-300 group-hover:scale-105">
                  <Download className="h-5 w-5" />
                  <span>Download Resume</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glassmorphism rounded-xl p-8"
          >
            <h4 className="font-clash mb-6 text-xl font-semibold">
              Send Message
            </h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-dark-card focus:border-accent-indigo focus:ring-accent-indigo w-full rounded-lg border border-slate-600 px-4 py-3 transition-colors duration-300 focus:ring-1"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-dark-card focus:border-accent-indigo focus:ring-accent-indigo w-full rounded-lg border border-slate-600 px-4 py-3 transition-colors duration-300 focus:ring-1"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-dark-card focus:border-accent-indigo focus:ring-accent-indigo w-full rounded-lg border border-slate-600 px-4 py-3 transition-colors duration-300 focus:ring-1"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-dark-card focus:border-accent-indigo focus:ring-accent-indigo w-full resize-none rounded-lg border border-slate-600 px-4 py-3 transition-colors duration-300 focus:ring-1"
                />
              </div>
              <AnimatedButton type="submit" className="w-full">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Send Message</span>
                </div>
              </AnimatedButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
