import { motion } from "framer-motion";
import {
  GraduationCap,
  PiggyBank,
  Layers3,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import learnIn from "../assets/home/learn-in.jpg";
import saveIn from "../assets/home/save-in.jpg";
import planIn from "../assets/home/plan-in.jpg";
import investIn from "../assets/home/invest-in.jpg";

const steps = [
  {
    title: "LearnIN",
    heading: "Start your journey to financial independence.",
    description:
      "Our mission is to help all Nigerians on the journey to financial freedom, so we’ve put decades of lessons in to a simple app for your convenience.",
    image: learnIn,
    icon: GraduationCap,
    overlay: "bg-purple-700/60",
  },
  {
    title: "SaveIN",
    heading: "Let your money work extra hard for you.",
    description:
      "Sign up in minutes, set your money goals, and we’ll help you save automatically and reach them with zero hidden charges.",
    image: saveIn,
    icon: PiggyBank,
    overlay: "bg-emerald-700/60",
  },
  {
    title: "PlanIN",
    heading: "Start planning for your tomorrow today.",
    description:
      "Put your money in long-term investments to meet your major life goals and earn attractive returns.",
    image: planIn,
    icon: Layers3,
    overlay: "bg-amber-600/60",
  },
  {
    title: "InvestIN",
    heading: "Investing made simple, secure and accessible.",
    description:
      "Get access to carefully selected SEC-regulated investment options and prepare for the future you deserve.",
    image: investIn,
    icon: TrendingUp,
    overlay: "bg-red-700/60",
  },
];

export default function Steps() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fde68a,transparent_45%)] opacity-25" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <span className="inline-block mb-3 text-sm font-semibold tracking-wide uppercase text-[#d41a0b]">
            How It Works
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            A <span className="text-[#d41a0b]">smarter</span> way to manage{" "}
            <br /> your finances
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Everything you need to learn, save, plan, and invest thoughtfully
            designed in one seamless experience.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.18 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Colored gradient overlay */}
                  <div className={`absolute inset-0 ${step.overlay}`} />

                  {/* Icon */}
                  <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center shadow">
                    <Icon size={22} className="text-[#d41a0b]" />
                  </div>

                  {/* Title */}
                  <h4 className="absolute bottom-5 left-5 text-xl font-semibold text-white">
                    {step.title}
                  </h4>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.heading}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {step.description}
                  </p>

                  {/* CTA */}
                  <motion.button
                    whileHover="hover"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#d41a0b] cursor-pointer"
                  >
                    <span>Get started</span>
                    <motion.span
                      variants={{ hover: { x: 6 } }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </motion.button>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#e01e03] to-[#fbd90a]" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
