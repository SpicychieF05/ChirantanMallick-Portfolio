import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-lg bg-dark-base/80' : ''}`}>
      <div className="glassmorphism">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-clash font-bold text-xl text-accent-indigo cursor-pointer" onClick={() => scrollToSection('home')}>
              CM
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-accent-indigo transition-colors duration-300">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-accent-indigo transition-colors duration-300">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-accent-indigo transition-colors duration-300">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-accent-indigo transition-colors duration-300">
                Projects
              </button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-accent-indigo transition-colors duration-300">
                Experience
              </button>
              <a href="/my-side" className="hover:text-accent-indigo transition-colors duration-300">
                My-Side
              </a>
              <button onClick={() => scrollToSection('contact')} className="hover:text-accent-indigo transition-colors duration-300">
                Contact
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-accent-indigo transition-colors duration-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-4 pt-2 pb-4 space-y-2">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-accent-indigo transition-colors duration-300">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-accent-indigo transition-colors duration-300">
                  About
                </button>
                <button onClick={() => scrollToSection('skills')} className="block w-full text-left hover:text-accent-indigo transition-colors duration-300">
                  Skills
                </button>
                <button onClick={() => scrollToSection('projects')} className="block w-full text-left hover:text-accent-indigo transition-colors duration-300">
                  Projects
                </button>
                <button onClick={() => scrollToSection('experience')} className="block w-full text-left hover:text-accent-indigo transition-colors duration-300">
                  Experience
                </button>
                <a href="/my-side" className="block w-full text-left hover:text-accent-indigo transition-colors duration-300">
                  My-Side
                </a>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-accent-indigo transition-colors duration-300">
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
