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
      <svg style={{position: 'absolute', width: 0, height: 0}}>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq">
          <feColorMatrix values="1 0 0 0 0 
          0 1 0 0 0 
          0 0 1 0 0 
          0 0 0 9 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq2">
          <feColorMatrix values="1 0 0 0 0 
          0 1 0 0 0 
          0 0 1 0 0 
          0 0 0 3 0" />
        </filter>
        <filter width="300%" x="-100%" height="300%" y="-100%" id="unopaq3">
          <feColorMatrix values="1 0 0 0.2 0 
          0 1 0 0.2 0 
          0 0 1 0.2 0 
          0 0 0 2 0" />
        </filter>
      </svg>
      
      <div className="button-container relative w-fit">
        <button 
          type={type}
          onClick={onClick}
          className="real-button absolute w-full h-full z-10 outline-none border-none rounded-2xl cursor-pointer opacity-0"
        />
        
        <div className="backdrop absolute -inset-[9900%] bg-radial-backdrop bg-[length:3px_3px] -z-10" />
        
        <div className="button-container">
          <div className="spin spin-blur absolute inset-0 -z-20 opacity-50 overflow-hidden transition-opacity duration-300 blur-[2em]" 
               style={{filter: 'blur(2em) url(#unopaq)'}} />
          <div className="spin spin-intense absolute -inset-0.5 -z-20 opacity-50 overflow-hidden transition-opacity duration-300 rounded-xl blur-sm"
               style={{filter: 'blur(0.25em) url(#unopaq2)'}} />
          
          <div className="backdrop absolute -inset-[9900%] bg-radial-backdrop bg-[length:3px_3px] -z-10" />
          
          <div className="button-border p-0.5 bg-black/30 rounded-2xl w-48 h-16"
               style={{clipPath: "path('M 90 0 C 121 0 126 5 126 33 C 126 61 121 66 90 66 L 33 66 C 5 66 0 61 0 33 C 0 5 5 0 33 0 Z')"}}>
            
            <div className="spin spin-inside absolute -inset-0.5 rounded-2xl -z-10 blur-sm"
                 style={{filter: 'blur(2px) url(#unopaq3)'}} />
            
            <div className="button flex justify-center items-center border-none rounded-2xl w-full h-full bg-dark-base text-white overflow-hidden font-semibold"
                 style={{clipPath: "path('M 90 0 C 115 0 120 5 120 30 C 120 55 115 60 90 60 L 30 60 C 5 60 0 55 0 30 C 0 5 5 0 30 0 Z')"}}>
              {children}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .bg-radial-backdrop {
          background: radial-gradient(
            circle at 50% 50%,
            transparent 0,
            transparent 20%,
            rgba(17, 17, 17, 0.67) 50%
          );
        }
        
        .real-button:active ~ div .spin {
          opacity: 1;
        }
        
        .spin::before {
          content: "";
          position: absolute;
          inset: -150%;
          animation: speen 8s cubic-bezier(0.56, 0.15, 0.28, 0.86) infinite,
                     woah 4s infinite;
          animation-play-state: paused;
        }
        
        .real-button:hover ~ div .spin::before {
          animation-play-state: running;
        }
        
        .spin-blur::before {
          background: linear-gradient(90deg, #6366f1 30%, transparent 50%, #14b8a6 70%);
        }
        
        .spin-intense::before {
          background: linear-gradient(90deg, #8b5cf6 20%, transparent 45% 55%, #06b6d4 80%);
        }
        
        .spin-inside::before {
          background: linear-gradient(90deg, #f59e0b 30%, transparent 45% 55%, #10b981 70%);
        }
        
        @keyframes speen {
          0% {
            rotate: 10deg;
          }
          50% {
            rotate: 190deg;
          }
          to {
            rotate: 370deg;
          }
        }
        
        @keyframes woah {
          0%, 100% {
            scale: 1;
          }
          50% {
            scale: 0.75;
          }
        }
      `}</style>
    </div>
  );
}