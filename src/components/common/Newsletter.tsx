import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import newsBg from "../../assets/common/newsletter-bg.png";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${newsBg})` }}
      />

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Title */}
          <div className="text-[11px] md:text-sm uppercase tracking-[0.25em] text-white/60">
            InvestNaija Insights
          </div>

          {/* Headline */}
          <h2 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-white">
            Stay ahead with
            <br />
            <span className="text-[#e55356]">smarter money insights.</span>
          </h2>

          {/* subtext */}
          <p className="mt-6 text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto">
            Get weekly insights on saving, investing, and smart financial
            habits. Practical guidance to help you build wealth consistently
            without noise.
          </p>

          {/* form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-3 justify-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full sm:w-[360px] h-[54px] px-4 rounded-xl
              bg-white/10 backdrop-blur-xl border border-white/20
              text-white placeholder-white/50 outline-none
              focus:border-[#e55356] transition"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto h-[54px] px-6 rounded-xl
              bg-white text-black font-medium flex items-center justify-center gap-2
              hover:bg-white/90 transition shadow-[0_12px_40px_rgba(0,0,0,0.25)] cursor-pointer"
            >
              Subscribe
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
