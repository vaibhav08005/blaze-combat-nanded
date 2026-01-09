import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.9"]
  });

  const words = "CHAMPIONS AREN'T BORN, THEY'RE MADE AT BLAZE. ESTABLISHED 2023. HOME OF THE ASIAN MEDALIST. BOXING. MMA. KICKBOXING. UNLEASH YOUR INNER FIGHTER. THIS IS YOUR ARENA.".split(" ");

  return (
    <section 
      id="manifesto" 
      ref={containerRef} 
      className="relative min-h-[100vh] bg-sanctum-black flex items-center justify-center px-6 py-24"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-[1.5vw] relative z-10">
        {words.map((word, i) => {
          // Stagger the opacity animation based on index
          const start = i / words.length;
          const end = start + (1 / words.length);
          const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
          const color = word === "BLAZE." || word === "FIGHTER." ? "#FF2400" : "#FFFFFF"; // Highlight key words
          
          return (
            <motion.span
              key={i}
              style={{ opacity, color }}
              className="text-[5vw] md:text-[4.5vw] font-display font-bold uppercase leading-[0.9] tracking-tighter transition-colors duration-100 italic"
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </section>
  );
};

export default Manifesto;