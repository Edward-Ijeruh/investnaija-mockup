import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import heroOne from "../../assets/investin/hero-1.png";
import heroTwo from "../../assets/investin/hero-2.png";

// Animation
const AnimatedText = ({
  text,
  className,
  delay = 0,
  stagger = 0.025,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) => {
  const letters = text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((char, i) => (
        <motion.span key={i} variants={child}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const heroImages = [heroOne, heroTwo];

export default function InvestINHero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-black">
      {/* Background images */}
      <AnimatePresence>
        <motion.img
          key={currentImage}
          src={heroImages[currentImage]}
          alt=""
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] text-center px-4 sm:px-6">
        <div className="space-y-5 sm:space-y-6 max-w-xl sm:max-w-2xl">
          {/* Paragraph */}
          <AnimatedText
            text="Invest smarter with structured portfolios designed to grow your wealth steadily over time."
            className="hidden sm:block mt-20 text-gray-300 text-sm sm:text-base leading-relaxed"
            stagger={0.02}
          />

          {/* Headline */}
          <h1 className="mt-10 sm:mt-0 text-2xl sm:text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            <AnimatedText text="Invest Better. " delay={1} stagger={0.05} />

            <span className="bg-[#e55356] bg-clip-text text-transparent">
              <AnimatedText text="Grow Faster." delay={1.3} stagger={0.06} />
            </span>
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 text-gray-300/80 text-xs sm:text-sm pt-2">
            <AnimatedText
              text="Smart portfolio investing"
              delay={2.8}
              stagger={0.02}
            />

            <span className="opacity-30">•</span>

            <AnimatedText
              text="Diversified asset exposure"
              delay={3.0}
              stagger={0.02}
            />

            <span className="opacity-30">•</span>

            <AnimatedText
              text="Built for long-term growth"
              delay={3.2}
              stagger={0.02}
            />
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.5 }}
            className="flex justify-center pt-5 sm:pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white text-sm sm:text-base font-medium
              bg-white/10 backdrop-blur-xl border border-white/15
              hover:bg-white/15 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.25)] cursor-pointer"
            >
              Start Investing
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400"
        >
          <ChevronDown size={26} />
        </motion.div>
      </div>
    </section>
  );
}
