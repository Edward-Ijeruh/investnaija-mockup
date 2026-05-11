import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import img1 from "../../assets/about/cta1.jpg";
import img2 from "../../assets/about/cta2.jpg";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl mx-auto md:mx-0 text-center md:text-left"
          >
            {/* Title */}
            <div className="text-[11px] text-gray-500 uppercase tracking-[0.2em]">
              Built for Financial Discipline
            </div>

            {/* Headline */}
            <h2 className="mt-7 text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#050505]">
              Wouldn’t you rather keep your money{" "}
              <span className="bg-gradient-to-r from-[#d91b08] to-[#fbc710] bg-clip-text text-transparent">
                safe and growing
              </span>{" "}
              with us?
            </h2>

            {/* Supporting text */}
            <p className="mt-6 text-sm md:text-base text-black/60 leading-relaxed">
              Join thousands of Nigerians building long-term financial security
              through structured investing, disciplined savings, and regulated
              infrastructure.
            </p>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#050505] text-white text-sm font-medium shadow-[0_12px_45px_rgba(0,0,0,0.10)] cursor-pointer hover:bg-black transition-all mx-auto md:mx-0"
            >
              I’m in
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center md:justify-end mt-10 md:mt-0"
          >
            <div className="relative w-[260px] sm:w-[320px] md:w-[420px] aspect-square md:h-[420px]">
              {/* Image 1 */}
              <img
                src={img1}
                alt="InvestNaija savings"
                className="
                  absolute
                  top-0
                  left-0
                  w-[90%]
                  rounded-2xl
                  shadow-[0_25px_70px_rgba(0,0,0,0.15)]
                  rotate-[-6deg]
                  z-20
                "
              />

              {/* Image 2 */}
              <img
                src={img2}
                alt="InvestNaija growth"
                className="
                  absolute
                  bottom-0
                  right-0
                  w-[90%]
                  rounded-2xl
                  shadow-[0_25px_70px_rgba(0,0,0,0.20)]
                  rotate-[6deg]
                  z-10
                  border border-black/5
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/[0.03] to-transparent rounded-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
