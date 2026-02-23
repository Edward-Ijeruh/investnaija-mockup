import { motion } from "framer-motion";
import { Download } from "lucide-react";
import getStarted from "../assets/home/get-started.png";

export default function GetStarted() {
  return (
    <section className="relative pt-28 bg-[#f2f2f2]">
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            <span className="text-[#d41a0b]">Take control</span> of your
            financial future
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Start learning, saving, planning, and investing smarter today.
            Download the app or explore more to see how InvestNaija can help you
            achieve your goals.
          </p>

          {/* Buttons */}
          <div className="flex flex-row justify-center gap-4 pt-6">
            {/* Download button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold
                bg-gradient-to-r from-[#e01e03] to-[#fbd90a]
                hover:opacity-90 transition-all duration-300 shadow-md"
            >
              <Download size={18} />
              Download
            </motion.button>

            {/* Learn more button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer flex items-center justify-center text-sm md:text-md gap-2 px-6 py-3 rounded-lg bg-white text-gray-800 font-semibold hover:bg-gray-100 transition-all duration-300 border border-gray-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
      {/* Image below text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-full overflow-hidden mt-20"
      >
        <img
          src={getStarted}
          alt="Get started"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
