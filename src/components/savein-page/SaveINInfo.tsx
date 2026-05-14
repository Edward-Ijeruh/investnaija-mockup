import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import sect1 from "../../assets/savein/sect-1.png";
import sect2 from "../../assets/savein/sect-2.png";
import sect3 from "../../assets/savein/sect-3.png";

function SaveINBlock({
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

export default function SaveINLearn() {
  return (
    <>
      {/* Section
       1 */}
      <SaveINBlock
        image={sect1}
        title="Save with purpose,"
        highlight="cash out anytime."
        description="Save for anything, cash out at your convenience. Trying to save up to N1 million a year? Join Adetola and our growing community of financially savvy individuals to set tailored short-term savings targets."
        cta="Start Target Savings"
      />

      {/* Section
       2 */}
      <SaveINBlock
        image={sect2}
        reverse
        bg="bg-gray-200"
        title="Grow your wealth,"
        highlight="the halal way."
        description="With our Sharia-compliant savings products, you can earn a profit from your investments while adhering to Islamic principles. We allocate your funds to ethical, Sharia-compliant endeavours with the objective of generating returns for you."
        cta="Get Started"
      />

      {/* Section
       3 */}
      <SaveINBlock
        image={sect3}
        title="Stay ready for life,"
        highlight="always covered."
        description="Never be caught off guard, save small-small with our Emergency Savings, and earn attractive interest rates. So come rain or shine, you’re covered."
        cta="Start Emergency Savings"
      />
    </>
  );
}
