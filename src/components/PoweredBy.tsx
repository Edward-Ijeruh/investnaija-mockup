import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Briefcase } from "lucide-react";
import CountUp from "./ui/CountUp";
import videoImage from "../assets/home/investnaija-for-everyone-v3.jpg";

const stats = [
  {
    icon: ShieldCheck,
    value: 240000,
    suffix: "+",
    label: "Customers",
  },
  {
    icon: TrendingUp,
    value: 250,
    suffix: "+ Billion",
    label: "Assets Under Management",
    prefix: "₦",
  },
  {
    icon: Briefcase,
    value: 20,
    suffix: "+",
    label: "Years In Business",
  },
];

export default function PoweredBySection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-28 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fde68a,transparent_45%)] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block mb-3 text-sm font-semibold tracking-wide text-[#d41a0b] uppercase">
            Trusted Partnership
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            InvestNaija is Powered by <br />
            <span className="text-[#d41a0b]">Chapel Hill Denham</span>
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Nigeria’s most trusted independent investment banking and asset
            management firm.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center mb-14"
        >
          <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={videoImage}
              alt="InvestNaija Overview"
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center text-gray-600 text-lg leading-relaxed mb-20"
        >
          Chapel Hill Denham is Nigeria’s leading independent investment
          banking, securities trading, and investment management firm. The firm
          provides advisory, execution, and investment services to corporations,
          governments, institutions, and individuals across Nigeria and Africa.
        </motion.p>

        {/* Quick facts */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {stats.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4 }}
                className="relative bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-[#e01e03] to-[#fbd90a] rounded-b-full" />

                <div className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-xl bg-[#d41a0b]/10 text-[#d41a0b]">
                  <Icon size={26} />
                </div>

                <h3 className="text-3xl font-bold text-gray-900">
                  {item.prefix || ""}
                  <CountUp value={item.value} suffix={item.suffix} />
                </h3>

                <p className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
