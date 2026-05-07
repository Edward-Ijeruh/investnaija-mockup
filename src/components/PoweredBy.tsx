import { motion } from "framer-motion";
import CountUp from "./ui/CountUp";

const stats = [
  {
    value: 240000,
    suffix: "+",
    label: "Customers",
  },
  {
    value: 250,
    suffix: "B+",
    prefix: "₦",
    label: "Assets Managed",
  },
  {
    value: 20,
    suffix: "+",
    label: "Years Experience",
  },
];

export default function PoweredBySection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top: Trust statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">
            Trusted Infrastructure
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Built on{" "}
            <span className="bg-gradient-to-r from-[#e01e03] to-[#fbd90a] bg-clip-text text-transparent">
              proven{" "}
            </span>
            financial expertise.
          </h2>

          <p className="mt-4 text-gray-600 text-base">
            InvestNaija is powered by{" "}
            <span className="text-gray-900 font-medium">
              Chapel Hill Denham
            </span>
            , one of Nigeria’s leading investment and asset management firms.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="my-16 h-px bg-gray-100" />

        {/* Stats (MAIN FOCUS) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center"
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="space-y-2"
            >
              <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
                {item.prefix || ""}
                <CountUp value={item.value} suffix={item.suffix} />
              </h3>

              <p className="text-sm text-gray-500 tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
