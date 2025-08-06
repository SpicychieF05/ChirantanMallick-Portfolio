import React from "react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export default function AnimatedButton({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: AnimatedButtonProps) {
  return (
    <div className={`relative flex justify-center ${className}`}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`glassmorphism group relative overflow-hidden rounded-2xl border border-white/10 px-8 py-4 transition-all duration-500 hover:scale-105 hover:border-white/20 active:scale-95 ${
          disabled ? "cursor-not-allowed opacity-50 hover:scale-100" : ""
        }`}
      >
        {/* Rotating Neon Border */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="animate-spin-slow absolute inset-[-2px] rounded-2xl">
            <div className="from-accent-indigo via-accent-teal absolute inset-0 rounded-2xl bg-gradient-to-r to-purple-500 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"></div>
          </div>
          <div className="from-accent-indigo/20 via-accent-teal/20 animate-spin-slow absolute inset-[1px] rounded-2xl bg-gradient-to-r to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
        </div>

        {/* Inner glassmorphism content */}
        <div className="relative z-10 flex items-center justify-center space-x-2 font-semibold text-white">
          {children}
        </div>

        {/* Glow effect */}
        <div className="from-accent-indigo/10 via-accent-teal/10 absolute inset-0 rounded-2xl bg-gradient-to-r to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      </button>

      <style>{`
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
