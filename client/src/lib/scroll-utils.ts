// Utility function for smooth scrolling with Lenis
export const lenisScrollTo = (target: string | HTMLElement, offset = 0) => {
  // Try to get Lenis instance from window (if it exists)
  const lenis = (window as any).lenis;

  if (lenis) {
    // Use Lenis for smooth scrolling
    if (typeof target === "string") {
      lenis.scrollTo(target, {
        offset,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      lenis.scrollTo(target, {
        offset,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  } else {
    // Fallback to native scrollIntoView
    if (typeof target === "string") {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
};

// Scroll to top function
export const scrollToTop = () => {
  const lenis = (window as any).lenis;

  if (lenis) {
    lenis.scrollTo(0, {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
