import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useIsMobile } from "../../hooks/use-mobile";
import { lenisScrollTo, scrollToTop } from "../../lib/scroll-utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isOpen && !target.closest("nav")) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const navItems = [
    { name: "About", href: "#about", type: "scroll" },
    { name: "Skills", href: "#skills", type: "scroll" },
    { name: "Experience", href: "#experience", type: "scroll" },
    { name: "Projects", href: "#projects", type: "scroll" },
    { name: "My Side", href: "/my-side", type: "route" },
    { name: "Contact", href: "#contact", type: "scroll" },
  ];

  const handleNavClick = (href: string, type: string) => {
    setIsOpen(false);

    if (type === "route") {
      // Navigate to different page
      setLocation(href);
    } else {
      // Use Lenis for smooth scrolling to section
      lenisScrollTo(href);
    }
  };

  const handleHomeClick = () => {
    setIsOpen(false);

    // If not on home page, navigate to home first
    if (location !== "/") {
      setLocation("/");
      // Wait a bit for the page to load, then scroll to hero
      setTimeout(() => {
        const heroElement = document.querySelector("#home");
        if (heroElement) {
          lenisScrollTo("#home");
        } else {
          scrollToTop();
        }
      }, 100);
    } else {
      // Already on home page, just scroll to hero section
      const heroElement = document.querySelector("#home");
      if (heroElement) {
        lenisScrollTo("#home");
      } else {
        scrollToTop();
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-white/5 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={handleHomeClick}
          >
            <motion.span
              className="font-apricots text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                y: [0, -12, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              Chirantan
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.type)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              onTouchEnd={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
              className="relative z-[101] inline-flex items-center justify-center rounded-md p-3 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 active:bg-gray-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ touchAction: "manipulation" }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[98] bg-black/50 backdrop-blur-sm md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <motion.div
        className={`fixed left-0 right-0 top-16 z-[99] md:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="space-y-1 border-b border-white/10 bg-black/95 px-2 pb-3 pt-2 backdrop-blur-md sm:px-3">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavClick(item.href, item.type)}
              onTouchEnd={(e) => {
                e.preventDefault();
                handleNavClick(item.href, item.type);
              }}
              className="block w-full rounded-md px-4 py-3 text-left text-base font-medium text-gray-300 transition-colors duration-200 hover:bg-white/10 hover:text-white active:bg-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              style={{ touchAction: "manipulation" }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
