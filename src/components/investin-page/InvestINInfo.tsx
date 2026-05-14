import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import sect1 from "../../assets/investin/sect-1.png";
import sect2 from "../../assets/investin/sect-2.png";
import sect3 from "../../assets/investin/sect-3.jpg";

function InvestINBlock({
  title,
  highlight,
  description,
  cta,
  image,
  reverse = false,
  bg = "bg-white",
}: {
  title: string;
  highlight: string;
  description: string;
  cta: string;
  image: string;
  reverse?: boolean;
  bg?: string;
}) {
  return (
    <section className={`relative py-28 overflow-hidden ${bg}`}>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`text-center md:text-left max-w-xl mx-auto md:mx-0 ${
              reverse ? "md:order-1" : "md:order-2"
            }`}
          >
            <div className="text-[11px] md:text-sm uppercase tracking-[0.22em] text-black/40">
              SaveIN Features
            </div>

            <h2 className="mt-7 text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#050505]">
              {title}
              <br />
              <span className="text-[#d91b08]">{highlight}</span>
            </h2>

            <p className="mt-6 text-sm md:text-base text-black/60 leading-relaxed">
              {description}
            </p>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#050505] text-white text-sm font-medium shadow-[0_12px_45px_rgba(0,0,0,0.10)] hover:bg-black transition-all cursor-pointer"
            >
              {cta}
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`flex justify-center ${
              reverse
                ? "md:order-2 md:justify-end"
                : "md:order-1 md:justify-start"
            }`}
          >
            <div className="relative">
              <img
                src={image}
                alt="SaveIN section"
                className="w-[280px] sm:w-[340px] md:w-[420px] rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.12)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function InvestINInfo() {
  return (
    <>
      {/* Section 1 */}
      <InvestINBlock
        image={sect1}
        title="Build wealth through"
        highlight="diversified investing."
        description="Access professionally managed portfolios designed to spread your risk across equities, bonds, and alternative assets. Invest smarter with long-term growth strategies tailored to your financial goals."
        cta="Start Investing"
      />

      {/* Section 2 */}
      <InvestINBlock
        image={sect2}
        reverse
        bg="bg-gray-200"
        title="Invest globally,"
        highlight="grow locally."
        description="Diversify your wealth across both domestic and international markets. Gain exposure to foreign currency assets while benefiting from curated investment opportunities managed by certified fund managers."
        cta="Explore Opportunities"
      />

      {/* Section 3 */}
      <InvestINBlock
        image={sect3}
        title="Let experts manage"
        highlight="your investments."
        description="Sit back while certified fund managers actively monitor and optimize your portfolio. We ensure your investments are professionally handled with disciplined risk management and transparency."
        cta="Get Started"
      />

      {/* Trust banner */}
      <section className="relative py-14 bg-black">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base text-white/70 leading-relaxed"
          >
            Invest in{" "}
            <span className="text-white font-medium">
              SEC-regulated mutual funds
            </span>{" "}
            and alternative investments, managed by certified fund managers, in
            domestic and foreign currency.
          </motion.p>
        </div>
      </section>
    </>
  );
}
