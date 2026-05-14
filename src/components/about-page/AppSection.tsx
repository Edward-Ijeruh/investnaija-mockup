import { motion } from "framer-motion";
import appImage from "../../assets/about/app.png";

const trustItems = [
  {
    title: "Regulated Structure",
    desc: "SEC licensed Fund/Portfolio Manager & Broker Dealer.",
  },
  {
    title: "Market Access",
    desc: "NGX, FMDQ, AFEX, NASD & cross-border WACMI access.",
  },
  {
    title: "Investor Protection",
    desc: "NDIC-insured deposits via InvestIN MFB (CBN regulated).",
  },
];

export default function AppSection() {
  return (
    <section className="relative py-28 bg-gray-200 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              <img
                src={appImage}
                alt="InvestNaija App"
                className="relative w-[280px] sm:w-[320px] md:w-[380px] drop-shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
              />
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[#050505]"
          >
            {/* Label */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/10 text-[11px] tracking-[0.2em] uppercase text-black/50">
              Institutional Grade Infrastructure
            </div>

            {/* Headline */}
            <h3 className="mt-6 text-2xl md:text-3xl font-semibold leading-tight text-[#050505]">
              Built on{" "}
              <span className="text-[#d91b08]">
                regulated trust infrastructure
              </span>
            </h3>

            {/* Intro */}
            <p className="mt-5 text-sm md:text-base text-black/60 leading-relaxed">
              InvestNaija by Chapel Hill Denham is a brand of InvestIN Limited,
              built for long-term financial confidence and regulatory clarity.
            </p>

            {/* Trust cards */}
            <div className="mt-8 space-y-4">
              {trustItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl border border-black/20 shadow-[0_10px_35px_rgba(0,0,0,0.04)]"
                >
                  <p className="text-sm font-medium text-[#050505]">
                    {item.title}
                  </p>

                  <p className="text-xs md:text-sm text-black/60 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Footer trust line */}
            <div className="mt-8 h-px w-full bg-black/20" />

            <p className="mt-6 text-xs text-black/40 tracking-wide">
              SEC Licensed • CBN Regulated • NDIC Protected Deposits
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
