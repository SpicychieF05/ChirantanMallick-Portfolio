import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function AnimatedButton({ children, onClick, type = "button", className = "" }: AnimatedButtonProps) {
  return (
    <div className={`relative flex justify-center ${className}`}>
      <button 
        type={type}
        onClick={onClick}
        className="group relative overflow-hidden px-8 py-4 rounded-2xl glassmorphism border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 active:scale-95"
      >
        {/* Rotating Neon Border */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-[-2px] rounded-2xl animate-spin-slow">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-indigo via-accent-teal to-purple-500 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="absolute inset-[1px] bg-gradient-to-r from-accent-indigo/20 via-accent-teal/20 to-purple-500/20 rounded-2xl animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Inner glassmorphism content */}
        <div className="relative z-10 flex items-center justify-center space-x-2 font-semibold text-white">
          {children}
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-indigo/10 via-accent-teal/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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