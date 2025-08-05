import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Camera, Heart, Coffee, Code, Music } from "lucide-react";
import Navbar from "@/components/ui/navbar";
import Background from "@/components/ui/background";
import Cursor from "@/components/ui/cursor";

export default function MySide() {
  useEffect(() => {
    document.title = "My Side - Chirantan Mallick";
  }, []);

  // Placeholder photos - you can replace these with your actual photos
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      caption: "Coding session at university",
      category: "work",
      icon: Code
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      caption: "Team collaboration during project",
      category: "work",
      icon: Code
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      caption: "Weekend coffee and coding",
      category: "personal",
      icon: Coffee
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      caption: "Exploring new places",
      category: "travel",
      icon: Camera
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      caption: "Late night programming",
      category: "work",
      icon: Code
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1516575266890-a19f5b835723?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      caption: "Music and relaxation",
      category: "personal",
      icon: Music
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      caption: "Nature photography",
      category: "hobby",
      icon: Camera
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      caption: "University events and networking",
      category: "work",
      icon: Heart
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      caption: "Tech meetups and conferences",
      category: "work",
      icon: Code
    }
  ];

  return (
    <div className="min-h-screen bg-dark-base text-foreground relative">
      <Background />
      <Cursor />
      <Navbar />
      
      <main className="pt-24 pb-12 relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <a 
                href="/" 
                className="flex items-center space-x-2 text-accent-teal hover:text-accent-indigo transition-colors duration-300 mb-4"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Portfolio</span>
              </a>
            </div>
            
            <h1 className="font-clash font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              My <span className="text-accent-indigo">Side</span>
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-slate-300">
              A glimpse into my daily life, capturing moments from coding sessions to personal adventures. 
              These photos tell the story beyond the code.
            </p>
          </motion.div>

          {/* Photo Album Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => {
              const IconComponent = photo.icon;
              return (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group relative cursor-pointer"
                >
                  {/* Album Frame */}
                  <div className="relative">
                    {/* Photo Frame Background */}
                    <div className="glassmorphism p-4 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-accent-indigo/20">
                      {/* Photo Container */}
                      <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                        <img 
                          src={photo.src} 
                          alt={photo.caption}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <IconComponent className="w-5 h-5 text-accent-teal" />
                              <span className="text-accent-teal font-mono text-sm capitalize">{photo.category}</span>
                            </div>
                            <p className="text-white font-semibold text-sm leading-tight">
                              {photo.caption}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Frame Caption */}
                      <div className="mt-4 text-center">
                        <p className="text-slate-300 text-sm font-medium leading-tight">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                    
                    {/* Polaroid-style shadow */}
                    <div className="absolute inset-0 bg-white/5 rounded-2xl -z-10 transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="glassmorphism p-8 rounded-xl max-w-2xl mx-auto">
              <h3 className="font-clash font-bold text-2xl mb-4 text-accent-indigo">Life in Frames</h3>
              <p className="text-slate-300 leading-relaxed">
                These moments capture the essence of my journey as a developer and student. 
                From late-night coding sessions to university events, each photo represents 
                a piece of the story that shapes who I am today.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}