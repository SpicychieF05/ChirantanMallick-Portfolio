import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: any;
  }
}

export default function Background() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current && window.VANTA) {
      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x6366f1,
        backgroundColor: 0x0f172a,
        points: 10.00,
        maxDistance: 23.00,
        spacing: 17.00
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Vanta.js Background */}
      <div ref={vantaRef} className="fixed inset-0 z-0" />
      
      {/* Additional gradient overlays */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>
    </>
  );
}
