import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GraduationCap, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-accent-teal mb-4">05. What's Next?</h2>
          <h3 className="font-clash font-bold text-4xl sm:text-5xl mb-8">Get In Touch</h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities and exciting projects to work on. Whether you have a question, want to collaborate, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glassmorphism p-6 rounded-xl">
              <h4 className="font-clash font-semibold text-xl mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-accent-teal" />
                  <a 
                    href="mailto:mallickchirantan@gmail.com" 
                    className="text-slate-300 hover:text-accent-indigo transition-colors duration-300"
                  >
                    mallickchirantan@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-accent-teal" />
                  <a 
                    href="tel:+918327438929" 
                    className="text-slate-300 hover:text-accent-indigo transition-colors duration-300"
                  >
                    +91 8327438929
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-5 h-5 text-accent-teal" />
                  <span className="text-slate-300">Bolpur, Birbhum, West Bengal, India</span>
                </div>
                <div className="flex items-center space-x-4">
                  <GraduationCap className="w-5 h-5 text-accent-teal" />
                  <span className="text-slate-300">Seacom Skills University</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="glassmorphism p-6 rounded-xl">
              <h4 className="font-clash font-semibold text-xl mb-6">Connect With Me</h4>
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/spicychief05" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-accent-indigo transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:mallickchirantan@gmail.com" 
                  className="text-slate-300 hover:text-accent-teal transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a 
                  href="tel:+918327438929" 
                  className="text-slate-300 hover:text-accent-indigo transition-all duration-300 hover:scale-110"
                >
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            {/* Resume Download */}
            <div className="text-center">
              <a 
                href="#" 
                className="gradient-border inline-block group" 
                download="Chirantan_Mallick_Resume.pdf"
              >
                <div className="bg-dark-base px-8 py-4 rounded-xl hover:bg-dark-card transition-all duration-300 font-semibold flex items-center space-x-2 group-hover:scale-105">
                  <Download className="w-5 h-5" />
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
            className="glassmorphism p-8 rounded-xl"
          >
            <h4 className="font-clash font-semibold text-xl mb-6">Send Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-card border border-slate-600 focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-card border border-slate-600 focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-card border border-slate-600 focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-card border border-slate-600 focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo transition-colors duration-300 resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full relative overflow-hidden bg-gradient-to-r from-accent-indigo to-accent-teal p-0.5 rounded-xl group hover:shadow-lg hover:shadow-accent-indigo/25 transition-all duration-300"
              >
                <div className="bg-dark-base rounded-lg px-6 py-4 group-hover:bg-transparent transition-all duration-300">
                  <span className="relative z-10 font-semibold text-white group-hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Send Message</span>
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-indigo to-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
