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
  Loader2,
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
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Primary: MailerLite Integration
      const mailerLiteApiKey = import.meta.env.VITE_MAILERLITE_API_KEY;
      const mailerLiteGroupId = import.meta.env.VITE_MAILERLITE_GROUP_ID;

      console.log("Debug - API Key exists:", !!mailerLiteApiKey);
      console.log("Debug - Group ID:", mailerLiteGroupId);

      if (
        mailerLiteApiKey &&
        mailerLiteApiKey !== "your_mailerlite_api_key_here"
      ) {
        // Add subscriber to MailerLite (this triggers automation)
        const requestBody = {
          email: formData.email,
          name: formData.name,
          groups: mailerLiteGroupId ? [mailerLiteGroupId] : [],
        };

        console.log("Debug - Simplified request body:", requestBody);

        const response = await fetch(
          "https://connect.mailerlite.com/api/subscribers",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${mailerLiteApiKey}`,
            },
            body: JSON.stringify(requestBody),
          }
        );

        console.log("Debug - Response status:", response.status);

        const responseData = await response.json();
        console.log("Debug - Response data:", responseData);

        if (response.ok || response.status === 422) {
          // 422 means subscriber already exists, which is fine

          // Also send the message details via Formspree so you get the actual message
          try {
            const notificationResponse = await fetch(
              "https://formspree.io/f/xzzvjnor",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: formData.name,
                  email: formData.email,
                  subject: formData.subject,
                  message: formData.message,
                  _replyto: formData.email,
                  source: "MailerLite + Formspree Integration",
                }),
              }
            );
            console.log(
              "Debug - Formspree notification sent:",
              notificationResponse.ok
            );
          } catch (notificationError) {
            console.log(
              "Debug - Formspree notification failed:",
              notificationError
            );
          }

          toast({
            title: "Message Sent Successfully!",
            description:
              "Thank you for your message. You'll receive a confirmation email shortly, and I'll get back to you within 24-48 hours!",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          throw new Error(
            `MailerLite API error: ${response.status} - ${JSON.stringify(responseData)}`
          );
        }
      } else {
        throw new Error("MailerLite not configured");
      }
    } catch (error) {
      console.error("MailerLite error:", error);

      // Fallback to Formspree
      try {
        const fallbackResponse = await fetch(
          "https://formspree.io/f/xzzvjnor",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
              _replyto: formData.email,
            }),
          }
        );

        if (fallbackResponse.ok) {
          toast({
            title: "Message Sent Successfully!",
            description:
              "Thank you for your message. I'll get back to you soon!",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          throw new Error("Fallback failed");
        }
      } catch (fallbackError) {
        // Final fallback: Email client
        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:mallickchirantan@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoLink, "_blank");

        toast({
          title: "Using Email Client",
          description: "Opening your email client to send the message.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
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
                  className={`bg-dark-card focus:border-accent-indigo focus:ring-accent-indigo w-full rounded-lg border px-4 py-3 transition-colors duration-300 focus:ring-1 ${
                    errors.name ? "border-red-500" : "border-slate-600"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
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
                  className={`bg-dark-card focus:border-accent-indigo focus:ring-accent-indigo w-full rounded-lg border px-4 py-3 transition-colors duration-300 focus:ring-1 ${
                    errors.email ? "border-red-500" : "border-slate-600"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
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
                  className={`bg-dark-card focus:border-accent-indigo focus:ring-accent-indigo w-full rounded-lg border px-4 py-3 transition-colors duration-300 focus:ring-1 ${
                    errors.subject ? "border-red-500" : "border-slate-600"
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                )}
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
                  className={`bg-dark-card focus:border-accent-indigo focus:ring-accent-indigo w-full resize-none rounded-lg border px-4 py-3 transition-colors duration-300 focus:ring-1 ${
                    errors.message ? "border-red-500" : "border-slate-600"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>
              <AnimatedButton
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                <div className="flex items-center justify-center space-x-2">
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Mail className="h-5 w-5" />
                  )}
                  <span>{isLoading ? "Sending..." : "Send Message"}</span>
                </div>
              </AnimatedButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
