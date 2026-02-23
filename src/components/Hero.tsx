import { motion } from "framer-motion";
import { Download } from "lucide-react";
import heroImg from "../assets/home/hero-img.png";

export default function Hero() {
  return (
    <section className="bg-[#f2f2f2] h-content md:h-[90vh]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-start">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Header */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight pt-4">
              <span className="text-[#d41a0b]">Secure</span> your money and your
              future.
            </h1>

            {/* Paragraph */}
            <p className="text-gray-600 text-sm md:text-lg max-w-xl">
              InvestNaija is designed to assist you achieve financial freedom.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-4 justify-center">
              {/* Download button */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer flex items-center text-sm md:text-md  gap-2 px-6 py-3 rounded-lg text-white font-semibold
                  bg-gradient-to-r from-[#e01e03] to-[#fbd90a]
                  hover:opacity-90 transition-all duration-300 shadow-md"
              >
                <Download size={18} />
                Download
              </motion.button>

              {/* Learn more button  */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer text-sm md:text-md gap-2 px-6 py-3 rounded-lg bg-white text-gray-800 font-semibold hover:bg-gray-100 transition-all duration-300 border border-gray-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex justify-center"
          >
            <img
              src={heroImg}
              alt="InvestNaija Hero"
              className="w-full max-w-md md:max-w-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
