import { motion } from "framer-motion";
import aisha from "../assets/home/aisha.jpg";
import tunde from "../assets/home/tunde.jpg";
import chioma from "../assets/home/chioma.jpg";

const testimonials = [
  {
    quote:
      "InvestNaija completely changed how I approach my finances. Everything feels simple, intentional, and trustworthy.",
    name: "Aisha Bello",
    title: "Product Manager",
    image: aisha,
  },
  {
    quote:
      "From learning to investing, the experience feels seamless. It’s rare to find a platform this well thought out.",
    name: "Tunde Adeyemi",
    title: "Software Engineer",
    image: tunde,
  },
  {
    quote:
      "I finally feel confident making financial decisions. InvestNaija removes the fear and replaces it with clarity.",
    name: "Chioma Okeke",
    title: "Small Business Owner",
    image: chioma,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fde68a,transparent_45%)] opacity-25" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <span className="inline-block mb-4 text-sm font-semibold tracking-wide uppercase text-[#d41a0b]">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Trusted by people building <br />
            their <span className="text-[#d41a0b]"> financial future</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Real stories from individuals who are learning, saving, planning,
            and investing smarter with InvestNaija.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-14"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="flex flex-col items-center text-center"
            >
              {/* Quote mark */}
              <span className="text-5xl leading-none text-[#d41a0b]/80 mb-4">
                “
              </span>

              {/* Quote */}
              <p className="text-lg text-gray-700 leading-relaxed max-w-sm mb-10">
                {item.quote}
              </p>

              {/* Profile */}
              <motion.img
                src={item.image}
                alt={item.name}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4 }}
                className="w-14 h-14 rounded-full object-cover mb-4 shadow-md"
              />

              <h4 className="text-base font-semibold text-gray-900">
                {item.name}
              </h4>
              <span className="text-sm text-gray-500">{item.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
