import Background from "@/components/ui/background";
import Cursor from "@/components/ui/cursor";
import Navbar from "@/components/ui/navbar";
import { motion } from "framer-motion";
import { ArrowLeft, Code, Coffee, Heart, Music } from "lucide-react";
import { useEffect } from "react";

export default function MySide() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    document.title = "My Side - Chirantan Mallick";

    // Add canonical URL for this page
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute(
        "href",
        "https://chirantan-portfolio.vercel.app/my-side"
      );
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute(
        "href",
        "https://chirantan-portfolio.vercel.app/my-side"
      );
      document.head.appendChild(canonicalLink);
    }
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

      {/* Fullscreen Hero Section with Overlay Content */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage.src}
            alt={heroImage.caption}
            className="h-full w-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Overlay - Positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 pb-16 text-center sm:px-6 lg:px-8">
          {/* Main Heading - Smaller */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-clash mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            My <span className="text-accent-indigo">Side</span>
          </motion.h1>

          {/* Description Text - Smaller */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl"
          >
            A glimpse into my daily life, capturing moments from coding sessions
            to personal adventures. These photos tell the story beyond the code.
          </motion.p>

          {/* Scroll Down Indicator - Below description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 flex flex-col items-center space-y-2"
          >
            <span className="font-mono text-sm text-white/70">Scroll Down</span>
            <div className="h-6 w-0.5 animate-pulse bg-white/50"></div>
          </motion.div>
        </div>
      </section>

      <main className="relative z-10 px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
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
            {/* Back to Portfolio Button - Centered at top of bottom section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8"
            >
              <a
                href="/"
                className="text-accent-teal hover:text-accent-indigo glassmorphism inline-flex items-center space-x-2 rounded-full border border-white/20 px-6 py-3 backdrop-blur-md transition-all duration-300 hover:border-white/40"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Portfolio</span>
              </a>
            </motion.div>

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
