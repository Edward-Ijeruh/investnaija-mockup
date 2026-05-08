import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "InvestNaija completely changed how I approach my finances. Everything feels simple, intentional, and trustworthy.",
    name: "Aisha Bello",
    title: "Product Manager",
    accent: "#0b6e7a",
  },
  {
    quote:
      "From learning to investing, the experience feels seamless. It’s rare to find a platform this well thought out.",
    name: "Tunde Adeyemi",
    title: "Software Engineer",
    accent: "#e25257",
  },
  {
    quote:
      "I finally feel confident making financial decisions. InvestNaija removes the fear and replaces it with clarity.",
    name: "Chioma Okeke",
    title: "Small Business Owner",
    accent: "#fbc710",
  },
  {
    quote:
      "The platform feels calm and easy to navigate. I spend less time confused and more time actually planning my future.",
    name: "Ifeanyi Nwosu",
    title: "Operations Lead",
    accent: "#d91b08",
  },
  {
    quote:
      "What stood out immediately was the clarity. Every step feels thoughtfully designed, especially for first-time investors.",
    name: "Zainab Suleiman",
    title: "Marketing Consultant",
    accent: "#0b6e7a",
  },
];

const loopTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  const controls = useAnimationControls();
  const speedRef = useRef(1);

  useEffect(() => {
    const animate = () => {
      controls.start({
        x: "-50%",
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };

    animate();
  }, [controls]);

  const pause = () => {
    speedRef.current = 0;
    controls.stop();
  };

  const resume = () => {
    speedRef.current = 1;

    // resume from CURRENT position (no reset = no jump)
    controls.start({
      x: "-50%",
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center px-6 mb-16 md:mb-20">
        <motion.span className="text-sm text-gray-500 uppercase tracking-widest">
          Testimonials
        </motion.span>

        <motion.h2 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#050505]">
          <span className="bg-gradient-to-r from-[#e01e03] to-[#fbd90a] bg-clip-text text-transparent">
            Financial clarity,{" "}
          </span>
          <br />
          built around real people.
        </motion.h2>

        <p className="mt-5 text-sm md:text-base leading-relaxed text-black/55 max-w-2xl mx-auto">
          Designed to simplify decision making, reduce overwhelm, and help
          Nigerians build wealth with more confidence and less friction.
        </p>
      </div>

      {/* fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 md:w-40 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 md:w-40 bg-gradient-to-l from-white to-transparent" />

      {/* SCROLLER */}
      <div className="overflow-hidden">
        <motion.div
          animate={controls}
          className="flex gap-5 md:gap-6 w-max px-6 will-change-transform"
        >
          {loopTestimonials.map((item, index) => (
            <motion.div
              key={index}
              onMouseEnter={pause}
              onMouseLeave={resume}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative w-[320px] md:w-[420px] shrink-0 rounded-[28px] overflow-hidden border border-black/8 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] cursor-default"
            >
              {/* hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background: `radial-gradient(circle at top left, ${item.accent}12, transparent 45%)`,
                }}
              />

              {/* content */}
              <div className="relative p-6 md:p-8 flex flex-col justify-between h-full min-h-[260px]">
                <div>
                  <div
                    className="text-5xl leading-none mb-6"
                    style={{ color: item.accent }}
                  >
                    “
                  </div>

                  <p className="text-sm md:text-base leading-relaxed text-black/75">
                    {item.quote}
                  </p>
                </div>

                <div className="mt-10">
                  <h4 className="text-sm md:text-base font-semibold text-[#050505]">
                    {item.name}
                  </h4>

                  <p className="text-xs md:text-sm text-black/45 mt-1">
                    {item.title}
                  </p>
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 h-[2px] w-full"
                style={{ backgroundColor: item.accent }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
