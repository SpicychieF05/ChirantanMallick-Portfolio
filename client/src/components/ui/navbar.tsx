import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-dark-base/80 backdrop-blur-lg" : ""}`}
    >
      <div className="glassmorphism w-full">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div
              className="font-clash text-accent-indigo cursor-pointer text-xl font-bold"
              onClick={() => scrollToSection("home")}
            >
              CM
            </div>

            {/* Desktop Navigation */}
            <div className="hidden space-x-8 md:flex">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-accent-indigo transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-accent-indigo transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-accent-indigo transition-colors duration-300"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-accent-indigo transition-colors duration-300"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="hover:text-accent-indigo transition-colors duration-300"
              >
                Experience
              </button>
              <a
                href="/my-side"
                className="hover:text-accent-indigo transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                My-Side
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-accent-indigo transition-colors duration-300"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-accent-indigo text-foreground transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="space-y-2 px-4 pb-4 pt-2">
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-accent-indigo block w-full text-left transition-colors duration-300"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-accent-indigo block w-full text-left transition-colors duration-300"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="hover:text-accent-indigo block w-full text-left transition-colors duration-300"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-accent-indigo block w-full text-left transition-colors duration-300"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="hover:text-accent-indigo block w-full text-left transition-colors duration-300"
                >
                  Experience
                </button>
                <a
                  href="/my-side"
                  className="hover:text-accent-indigo block w-full text-left transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  My-Side
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-accent-indigo block w-full text-left transition-colors duration-300"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
