import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  BriefcaseBusiness,
  HeartHandshake,
  Baby,
  Home,
  HandCoins,
  PiggyBank,
  Landmark,
} from "lucide-react";

const milestones = [
  {
    title: "Begin College",
    icon: GraduationCap,
    position: "top-[10%] left-[5%]",
    delay: 0,
  },
  {
    title: "Teens & Dependents",
    icon: Baby,
    position: "top-[8%] left-[25%]",
    delay: 1.2,
  },
  {
    title: "First Job",
    icon: BriefcaseBusiness,
    position: "top-[36%] left-[36%]",
    delay: 2.4,
  },
  {
    title: "Marry",
    icon: HeartHandshake,
    position: "top-[62%] left-[22%]",
    delay: 3.6,
  },
  {
    title: "New Parents",
    icon: Baby,
    position: "top-[80%] left-[34%]",
    delay: 4.8,
  },
  {
    title: "Buy a Home",
    icon: Home,
    position: "top-[66%] left-[50%]",
    delay: 6,
  },
  {
    title: "Mortgage Paid",
    icon: HandCoins,
    position: "top-[30%] left-[52%]",
    delay: 7.2,
  },
  {
    title: "Grand Parents",
    icon: Landmark,
    position: "top-[12%] left-[66%]",
    delay: 8.4,
  },
  {
    title: "Planning to Retire",
    icon: PiggyBank,
    position: "top-[28%] left-[82%]",
    delay: 9.6,
  },
  {
    title: "Retired",
    icon: Landmark,
    position: "top-[72%] left-[82%]",
    delay: 10.8,
  },
];

export default function AboutStory() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            {/* Title */}
            <div className="text-[11px] text-gray-500 uppercase tracking-[0.2em]">
              About InvestNaija
            </div>

            {/* Heading */}
            <h2 className="mt-7 text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#050505]">
              The InvestNaija
              <br />
              <span className="bg-[#e55356] bg-clip-text text-transparent">
                journey.
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="mt-8 space-y-6 text-sm md:text-base leading-relaxed text-black/60">
              <p>
                We at InvestNaija are aware that managing your money can be
                difficult at any stage of life. That is why we are committed to
                supporting Nigerians through every phase of their financial
                journey.
              </p>

              <p>
                From education and first jobs to retirement planning, our goal
                is to make financial growth feel clearer, more structured, and
                more accessible through modern savings and investment
                experiences.
              </p>

              <p>
                We believe financial security is a lifelong process powered by
                consistency, education, and the long-term effect of compounding.
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="https://app.investnaija.com/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 w-fit flex items-center justify-center lg:justify-start gap-2 px-5 py-3 rounded-2xl text-sm font-medium text-white bg-[#050505] hover:bg-black transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.08)] cursor-pointer mx-auto lg:mx-0"
            >
              Get Started
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* Roadmap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
  relative
  h-[340px] sm:h-[400px] md:h-[460px]
  rounded-[26px]
  border border-black/10
  bg-gradient-to-b from-[#fafafa] to-white
  overflow-hidden
  shadow-[0_15px_50px_rgba(0,0,0,0.05)]
"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(11,110,122,0.07),transparent_45%)]" />

            {/* SVG */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 700"
              preserveAspectRatio="none"
            >
              {/* Road base */}
              <path
                d="
        M 110 120
        C 220 40, 320 40, 390 140
        S 460 330, 330 430
        S 260 620, 420 600
        S 640 460, 590 320
        S 650 80, 820 140
        S 950 340, 860 540
      "
                fill="none"
                stroke="rgba(0,0,0,0.05)"
                strokeWidth="26"
                strokeLinecap="round"
              />

              {/* Route */}
              <motion.path
                d="
        M 110 120
        C 220 40, 320 40, 390 140
        S 460 330, 330 430
        S 260 620, 420 600
        S 640 460, 590 320
        S 650 80, 820 140
        S 950 340, 860 540
      "
                fill="none"
                stroke="url(#roadGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="8 14"
                animate={{
                  strokeDashoffset: [0, -100],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <defs>
                <linearGradient
                  id="roadGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#d91b08" />
                  <stop offset="100%" stopColor="#fbc710" />
                </linearGradient>
              </defs>
            </svg>

            {/* Milestones */}
            {milestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1, 1.16, 1.16, 1],
                    y: [0, 0, -5, -5, 0],
                  }}
                  transition={{
                    duration: 24,
                    ease: "easeInOut",
                    repeat: Infinity,
                    times: [
                      0,
                      item.delay / 24,
                      (item.delay + 1.4) / 24,
                      (item.delay + 2.4) / 24,
                      (item.delay + 3.4) / 24,
                    ],
                  }}
                  className={`absolute ${item.position} z-10`}
                >
                  <div className="flex flex-col items-center">
                    {/* Node */}
                    <div className="relative flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-white border border-black/8 shadow-[0_10px_25px_rgba(0,0,0,0.07)]">
                      {/* Glow */}
                      <motion.div
                        animate={{
                          opacity: [0.08, 0.08, 0.28, 0.28, 0.08],
                          scale: [1, 1, 1.22, 1.22, 1],
                        }}
                        transition={{
                          duration: 24,
                          ease: "easeInOut",
                          repeat: Infinity,
                          times: [
                            0,
                            item.delay / 24,
                            (item.delay + 1.4) / 24,
                            (item.delay + 2.4) / 24,
                            (item.delay + 3.4) / 24,
                          ],
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d91b08] to-[#fbc710]"
                      />

                      <div className="relative flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-[#d91b08] to-[#fbc710] text-white shadow-md">
                        <Icon size={14} className="md:w-[18px] md:h-[18px]" />
                      </div>
                    </div>

                    {/* Label */}
                    <div className="mt-2 md:mt-3 px-2 py-1 rounded-lg bg-white border border-black/8 shadow-[0_5px_15px_rgba(0,0,0,0.04)]">
                      <p className="text-[8px] sm:text-[9px] md:text-[11px] font-medium text-[#050505] whitespace-nowrap">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
