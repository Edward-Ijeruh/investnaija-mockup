import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  PiggyBank,
  Layers3,
  TrendingUp,
  ArrowRight,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import learnIn from "../../assets/home/learn-in.jpg";
import planIn from "../../assets/home/plan-in.jpg";
import saveIn from "../../assets/home/save-in.jpg";
import investIn from "../../assets/home/invest-in.jpg";

const steps = [
  {
    title: "LearnIN",
    heading: "Understand your money clearly.",
    description: "Structured financial education without complexity.",
    icon: GraduationCap,
    color: "#0b6e7a",
    image: learnIn,
    path: "/learnin",
  },
  {
    title: "PlanIN",
    heading: "Plan for your future.",
    description: "Align money decisions with long-term goals.",
    icon: Layers3,
    color: "#d91b08",
    image: planIn,
    path: "/planin",
  },
  {
    title: "SaveIN",
    heading: "Build disciplined habits.",
    description: "Automate savings effortlessly.",
    icon: PiggyBank,
    color: "#e25257",
    image: saveIn,
    path: "/savein",
  },
  {
    title: "InvestIN",
    heading: "Invest with confidence.",
    description: "Curated, regulated opportunities.",
    icon: TrendingUp,
    color: "#fbc710",
    image: investIn,
    path: "/investin",
  },
];

export default function Steps() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gray-200 py-28 text-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex mb-10 items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs tracking-[0.2em] uppercase text-black/50 shadow-sm">
            <Workflow size={14} />
            Process
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            A structured approach to building{" "}
            <span style={{ color: steps[active].color }}>wealth</span>
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex gap-4 h-[480px]">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = active === i;

            return (
              <motion.div
                key={i}
                onMouseEnter={() => setActive(i)}
                animate={{ flex: isActive ? 4 : 1 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
              >
                {/* Image */}
                <img
                  src={step.image}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition duration-700 ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />

                {/* Colour tint */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 20%, ${step.color}cc 100%)`,
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35" />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/30 border border-white/10 w-fit">
                    <Icon size={20} style={{ color: step.color }} />

                    <span className="text-md tracking-wide text-white/90">
                      {step.title}
                    </span>
                  </div>

                  <div>
                    <motion.div
                      animate={{ opacity: isActive ? 1 : 0.6 }}
                      className="space-y-3"
                    >
                      <h3 className="text-xl font-semibold">{step.heading}</h3>

                      {isActive && (
                        <>
                          <p className="text-white/80 text-sm max-w-xs">
                            {step.description}
                          </p>

                          <Link
                            to={step.path}
                            className="flex items-center gap-2 text-sm hover:underline transition"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Explore <ArrowRight size={14} />
                          </Link>
                        </>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Active indicator */}
                <motion.div
                  layoutId="activeLine"
                  className="absolute bottom-0 left-0 h-[3px] w-full"
                  style={{ backgroundColor: step.color }}
                  animate={{ opacity: isActive ? 1 : 0 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-3 h-[700px]">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = active === i;

            return (
              <motion.div
                key={i}
                onClick={() => setActive(i)}
                animate={{ flex: isActive ? 4 : 1.5 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden cursor-pointer shadow-[0_14px_45px_rgba(0,0,0,0.08)]"
              >
                {/* Image */}
                <img
                  src={step.image}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition duration-700 ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />

                {/* Colour tint */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 20%, ${step.color}cc 100%)`,
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35" />

                {/* Content */}
                <div className="relative h-full p-4 flex flex-col justify-between text-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full backdrop-blur-md bg-black/30 border border-white/10 w-fit">
                    <Icon size={18} style={{ color: step.color }} />

                    <span className="text-sm text-white/90">{step.title}</span>
                  </div>

                  <div>
                    <motion.div
                      animate={{ opacity: isActive ? 1 : 0.6 }}
                      className="space-y-2"
                    >
                      <h3 className="text-base font-semibold">
                        {step.heading}
                      </h3>

                      {isActive && (
                        <>
                          <p className="text-white/80 text-xs">
                            {step.description}
                          </p>

                          <Link
                            to={step.path}
                            className="flex items-center gap-2 text-xs mt-2 transition"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Explore <ArrowRight size={12} />
                          </Link>
                        </>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Active line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] w-full"
                  style={{ backgroundColor: step.color }}
                  animate={{ opacity: isActive ? 1 : 0 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
