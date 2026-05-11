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
    <section className="relative py-28 bg-[#050505] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Lside */}
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
                className="relative w-[280px] sm:w-[320px] md:w-[380px] drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
              />
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            {/* Title */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] tracking-[0.2em] uppercase text-white/60">
              Institutional Grade Infrastructure
            </div>

            {/* Headline */}
            <h3 className="mt-6 text-2xl md:text-3xl font-semibold leading-tight">
              Built on <span className="text-[#0b6e7a]">regulated trust</span>{" "}
              infrastructure
            </h3>

            {/* Intro */}
            <p className="mt-5 text-sm md:text-base text-white/60 leading-relaxed">
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
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.03]"
                >
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-xs md:text-sm text-white/60 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Footer trust line */}
            <div className="mt-8 h-px w-full bg-white/10" />

            <p className="mt-6 text-xs text-white/40 tracking-wide">
              SEC Licensed • CBN Regulated • NDIC Protected Deposits
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
