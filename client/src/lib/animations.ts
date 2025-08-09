import { Variants } from "framer-motion";

// Smooth animation variants optimized for Lenis
export const smoothAnimations = {
  // Fade in from bottom
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      type: "tween",
    },
    viewport: { once: true, margin: "-100px" },
  },

  // Fade in from left
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      type: "tween",
    },
    viewport: { once: true, margin: "-50px" },
  },

  // Fade in from right
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      type: "tween",
    },
    viewport: { once: true, margin: "-50px" },
  },

  // Stagger container
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as Variants,

  // Stagger item
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        type: "tween",
      },
    },
  } as Variants,

  // Scale on hover
  scaleOnHover: {
    whileHover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.1, ease: "easeOut" },
    },
  },

  // Float animation
  float: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};
