import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import learnImage from "../../assets/learnin/learn.webp";

export default function LearnSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              <img
                src={learnImage}
                alt="LearnIN platform"
                className="w-[280px] sm:w-[340px] md:w-[420px] rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.12)]"
              />
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left max-w-xl mx-auto md:mx-0"
          >
            {/* Title */}
            <div className="text-[11px] md:text-sm uppercase tracking-[0.22em] text-black/40">
              LearnIN Platform
            </div>

            {/* Headline */}
            <h2 className="mt-7 text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#050505]">
              Learn.
              <span className="bg-[#e55356] bg-clip-text text-transparent">
                Earn.
              </span>{" "}
              Grow.
            </h2>

            {/* Subheading */}
            <p className="mt-6 text-sm md:text-base text-black/60 leading-relaxed">
              To learn is to earn. Join millions of like-minded people gaining
              access to free, simple-to-understand articles, videos, and
              podcasts designed to improve financial well-being and unlock
              financial freedom.
            </p>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#050505] text-white text-sm font-medium shadow-[0_12px_45px_rgba(0,0,0,0.10)] hover:bg-black transition-all cursor-pointer"
            >
              Start LearnIN
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
