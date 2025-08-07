import Background from "@/components/ui/background";
import Cursor from "@/components/ui/cursor";
import Navbar from "@/components/ui/navbar";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Coffee, Heart, Music } from "lucide-react";
import { useEffect } from "react";

export default function MySide() {
  useEffect(() => {
    document.title = "My Side - Chirantan Mallick";
  }, []);

  // Hero image
  const heroImage = {
    src: "https://res.cloudinary.com/dlxybta5a/image/upload/v1754590725/My-side-hero-image_ir3apg.jpg",
    caption: "My Journey",
    category: "featured",
  };

  // Personal photos
  const photos = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dlxybta5a/image/upload/v1754590724/image-01_yltdgx.jpg",
      caption: "Moments that matter",
      category: "personal",
      icon: Heart,
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dlxybta5a/image/upload/v1754590725/image-02_l4fkmg.jpg",
      caption: "2nd year's last exam complete",
      category: "academic",
      icon: Heart,
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dlxybta5a/image/upload/v1754590725/image-03_vdngjx.jpg",
      caption: "Exam time",
      category: "academic",
      icon: Coffee,
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dlxybta5a/image/upload/v1754590725/image-04_n4yiyt.jpg",
      caption: "College Sessions",
      category: "academic",
      icon: Code,
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dlxybta5a/image/upload/v1754590725/image-05_avfghy.jpg",
      caption: "Average College classes",
      category: "academic",
      icon: Coffee,
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dlxybta5a/image/upload/v1754590724/image-06_gdbabp.jpg",
      caption: "After exam",
      category: "personal",
      icon: Music,
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dlxybta5a/image/upload/v1754590724/image-07_zmsvre.jpg",
      caption: "Fun time",
      category: "personal",
      icon: Heart,
    },
  ];

  return (
    <div className="bg-dark-base relative min-h-screen text-foreground">
      <Background />
      <Cursor />
      <Navbar />

      <main className="relative z-10 px-4 pb-12 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-16 text-center"
          >
            <div className="mb-6 flex items-center justify-center">
              <a
                href="/"
                className="text-accent-teal hover:text-accent-indigo mb-4 flex items-center space-x-2 transition-colors duration-300"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Portfolio</span>
              </a>
            </div>

            <h1 className="font-clash mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
              My <span className="text-accent-indigo">Side</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              A glimpse into my daily life, capturing moments from coding
              sessions to personal adventures. These photos tell the story
              beyond the code.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-20"
          >
            <div className="relative mx-auto max-w-4xl">
              <div className="glassmorphism hover:shadow-accent-indigo/20 rounded-3xl border border-white/10 p-6 transition-all duration-300 hover:border-white/20 hover:shadow-2xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={heroImage.src}
                    alt={heroImage.caption}
                    className="h-auto w-full object-cover"
                    style={{ aspectRatio: "auto" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="mb-3 flex items-center space-x-2">
                        <Heart className="text-accent-teal h-6 w-6" />
                        <span className="text-accent-teal font-mono text-base capitalize">
                          {heroImage.category}
                        </span>
                      </div>
                      <h2 className="font-clash text-2xl font-bold leading-tight text-white sm:text-3xl">
                        {heroImage.caption}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hero shadow */}
              <div className="absolute inset-0 -z-10 rotate-1 transform rounded-3xl bg-white/5"></div>
            </div>
          </motion.div>

          {/* Photo Album Grid */}
          <div className="columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3">
            {photos.map((photo, index) => {
              const IconComponent = photo.icon;
              return (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative mb-8 cursor-pointer break-inside-avoid"
                >
                  {/* Album Frame */}
                  <div className="relative">
                    {/* Photo Frame Background */}
                    <div className="glassmorphism group-hover:shadow-accent-indigo/20 rounded-2xl border border-white/10 p-4 transition-all duration-300 group-hover:border-white/20 group-hover:shadow-xl">
                      {/* Photo Container */}
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          style={{ aspectRatio: "auto" }}
                        />

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="mb-2 flex items-center space-x-2">
                              <IconComponent className="text-accent-teal h-5 w-5" />
                              <span className="text-accent-teal font-mono text-sm capitalize">
                                {photo.category}
                              </span>
                            </div>
                            <p className="text-sm font-semibold leading-tight text-white">
                              {photo.caption}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Frame Caption */}
                      <div className="mt-4 text-center">
                        <p className="text-sm font-medium leading-tight text-slate-300">
                          {photo.caption}
                        </p>
                      </div>
                    </div>

                    {/* Polaroid-style shadow */}
                    <div className="absolute inset-0 -z-10 rotate-1 transform rounded-2xl bg-white/5 transition-transform duration-300 group-hover:rotate-2"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="glassmorphism mx-auto max-w-2xl rounded-xl p-8">
              <h3 className="font-clash text-accent-indigo mb-4 text-2xl font-bold">
                Life in Frames
              </h3>
              <p className="leading-relaxed text-slate-300">
                These moments capture the essence of my journey as a developer
                and student. From late-night coding sessions to university
                events, each photo represents a piece of the story that shapes
                who I am today.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
