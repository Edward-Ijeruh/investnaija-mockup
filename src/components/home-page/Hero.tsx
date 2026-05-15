import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

import heroOne from "../../assets/home/hero-1.jpg";
import heroTwo from "../../assets/home/hero-2.png";

// Animations
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

export default function Hero() {
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
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] text-center px-4 sm:px-6">
        <div className="space-y-5 sm:space-y-6 max-w-xl sm:max-w-2xl">
          {/* Paragraph */}
          <AnimatedText
            text="A disciplined, transparent approach to investing, designed for Nigerians"
            className="hidden sm:block mt-20 text-gray-300 text-sm sm:text-base leading-relaxed"
            stagger={0.02}
          />

          {/* Headline */}
          <h1 className="mt-10 sm:mt-0 text-2xl sm:text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            <AnimatedText text="Build " delay={1} stagger={0.05} />
            <span className="bg-[#e55356] bg-clip-text text-transparent">
              <AnimatedText text="wealth" delay={1.3} stagger={0.06} />
            </span>{" "}
            <AnimatedText text="with confidence." delay={1.8} stagger={0.045} />
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 text-gray-300/80 text-xs sm:text-sm pt-2">
            <AnimatedText text="₦250B+ managed" delay={2.8} stagger={0.02} />

            <span className="opacity-30">•</span>

            <AnimatedText text="240,000+ users" delay={3.0} stagger={0.02} />

            <span className="opacity-30">•</span>

            <AnimatedText
              text="Secure & regulated"
              delay={3.2}
              stagger={0.02}
            />
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 4.0,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center gap-5 pt-5 sm:pt-6"
          >
            {/* Primary CTA */}
            <motion.a
              href="https://app.investnaija.com/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white text-sm sm:text-base font-medium
    bg-white/10 backdrop-blur-xl border border-white/15
    hover:bg-white/15 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            >
              Get Started
              <ArrowRight size={18} />
            </motion.a>

            {/* Divider */}
            <div className="flex items-center gap-3 text-xs text-white/40">
              <span className="h-px w-10 bg-white/20" />
              Or download the app
              <span className="h-px w-10 bg-white/20" />
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-row flex-nowrap items-center justify-center gap-2 sm:gap-3 w-full overflow-hidden">
              {/* iOS */}
              <motion.a
                href="https://apps.apple.com/ng/app/investnaija/id1579193940"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-black/40 border border-white/30 backdrop-blur-xl hover:bg-black/60 transition shrink-0"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  className="w-4 h-4 invert"
                  alt="iOS"
                />

                <div className="text-left leading-tight">
                  <p className="text-[9px] sm:text-[10px] text-white/60">
                    Download on the
                  </p>
                  <p className="text-xs sm:text-sm text-white font-medium">
                    App Store
                  </p>
                </div>
              </motion.a>

              {/* Android */}
              <motion.a
                href="https://play.google.com/store/search?q=investnaija&c=apps"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="shrink-0 flex items-center"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-9 sm:h-11 w-auto"
                />
              </motion.a>
            </div>
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
