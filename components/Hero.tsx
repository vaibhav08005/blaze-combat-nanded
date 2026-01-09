import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Reduced scale intensity for smoother feel
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        {/* Overlay - Reduced opacity to showcase the premium video quality */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-100"
        >
          <source src={`${import.meta.env.BASE_URL}hero_video.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient only at the bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-sanctum-black via-transparent to-transparent z-20" />
      </motion.div>

      {/* Centered Content */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center px-4">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col items-center"
        >
          <h1 className="text-[10vw] leading-[0.8] font-display font-bold uppercase tracking-tighter text-white text-center drop-shadow-2xl italic">
            BLAZE <br /> <span className="text-sanctum-orange not-italic">COMBAT</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="mt-12 flex flex-col items-center gap-4 text-center"
        >
          <p className="max-w-xl text-sm md:text-xl font-medium tracking-widest text-sanctum-white/90 uppercase drop-shadow-md border-2 border-white/20 px-6 py-2 bg-black/40 backdrop-blur-sm">
            Nanded's First & Largest Combat Arena
          </p>
          <p className="text-xs text-sanctum-orange font-bold tracking-[0.2em] uppercase drop-shadow-md animate-pulse">
            Unleash Your Inner Fighter
          </p>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest animate-bounce z-30 drop-shadow-md"
      >
        ENTER THE ARENA
      </motion.div>
    </section>
  );
};

export default Hero;