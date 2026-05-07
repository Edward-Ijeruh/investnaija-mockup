import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";

// Reusable Animated Text
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

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/investnaija-hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100svh] text-center px-4 sm:px-6">
        <div className="space-y-5 sm:space-y-6 max-w-xl sm:max-w-2xl">
          {/* Paragrapgh */}
          <AnimatedText
            text="A disciplined, transparent approach to investing, designed for Nigerians"
            className="hidden sm:block mt-20 text-gray-300 text-sm sm:text-base leading-relaxed"
            stagger={0.02}
          />

          {/* Headline */}
          <h1 className="mt-10 sm:mt-0 text-2xl sm:text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
            <AnimatedText text="Build " delay={1} stagger={0.05} />
            <span className="bg-gradient-to-r from-[#e01e03] to-[#fbd90a] bg-clip-text text-transparent">
              <AnimatedText text="wealth" delay={1.3} stagger={0.06} />
            </span>{" "}
            <AnimatedText text="with confidence." delay={1.8} stagger={0.045} />
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 text-gray-400 text-xs sm:text-sm pt-2">
            <AnimatedText text="₦250B+ managed" delay={2.8} stagger={0.02} />
            <span className=" sm:inline opacity-40">•</span>

            <AnimatedText text="240,000+ users" delay={3.0} stagger={0.02} />
            <span className=" sm:inline opacity-40">•</span>

            <AnimatedText
              text="Secure & regulated"
              delay={3.2}
              stagger={0.02}
            />
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.5 }}
            className="flex justify-center pt-5 sm:pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-white text-sm sm:text-base font-medium bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
            >
              <Download size={18} />
              Get Started
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
