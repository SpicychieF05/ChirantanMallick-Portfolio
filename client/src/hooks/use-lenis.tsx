import Lenis from "lenis";
import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    // Add Lenis classes to HTML
    document.documentElement.classList.add("lenis");

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Make Lenis instance available globally for smooth scrolling
    (window as any).lenis = lenis;

    // Animation frame function
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      delete (window as any).lenis;
      document.documentElement.classList.remove("lenis");
    };
  }, []);
}
