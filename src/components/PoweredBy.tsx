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
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header (reduced cognitive load) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-xl mx-auto"
        >
          <p className="text-[11px] text-gray-500 uppercase tracking-[0.2em]">
            Trusted Infrastructure
          </p>

          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
            Built on{" "}
            <span className="bg-gradient-to-r from-[#e01e03] to-[#fbd90a] bg-clip-text text-transparent">
              proven{" "}
            </span>
            financial expertise.
          </h2>
        </motion.div>

        {/* subtle divider */}
        <div className="my-10 md:my-12 h-px bg-gray-100" />

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center"
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              className="space-y-1"
            >
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                {item.prefix || ""}
                <CountUp value={item.value} suffix={item.suffix} />
              </h3>

              <p className="text-xs md:text-sm text-gray-500 tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
