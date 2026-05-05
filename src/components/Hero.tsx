import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
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

      {/* Dark overlay (improves text readability) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-2xl"
        >
          {/* Header */}
          <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
            <span className="text-[#fbd90a]">Secure</span> your money and your
            future.
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold
              bg-gradient-to-r from-[#e01e03] to-[#fbd90a]
              hover:opacity-90 transition-all duration-300 shadow-md"
            >
              <Download size={18} />
              Download
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-lg bg-white text-gray-800 font-semibold
              hover:bg-gray-100 transition-all duration-300 border border-gray-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="mt-6 text-white"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
}
