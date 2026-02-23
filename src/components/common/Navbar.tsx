import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, UserPlus } from "lucide-react";
import logo from "../../assets/common/logo.png";

const navItems = [
  { name: "About", path: "/about" },
  { name: "LearnIN", path: "/learnin" },
  { name: "PlanIN", path: "/planin" },
  { name: "SaveIN", path: "/savein" },
  { name: "InvestIN", path: "/investin" },
  { name: "Referral Promo", path: "/referral" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold text-red-600 cursor-pointer"
            >
              <img src={logo} alt="InvestNaija Logo" className="w-50 h-auto" />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `transition-colors ${
                      isActive
                        ? "text-[#d41a0b] font-semibold"
                        : "text-gray-500 hover:text-[#d41a0b]"
                    }`
                  }
                >
                  <motion.span
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="inline-block"
                  >
                    {item.name}
                  </motion.span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            {/* Login */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer px-5 py-3 border border-gray-300 font-semibold rounded-lg bg-white hover:bg-gray-100 hover:shadow-md transition-all duration-300"
            >
              Login
            </motion.button>

            {/* Signup */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#e01e03] to-[#fbd90a] hover:opacity-90 transition-all duration-300 shadow-md"
            >
              Sign Up
              <UserPlus size={18} />
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer text-[#d41a0b]"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 z-40 md:hidden bg-white shadow-lg"
          >
            <div className="px-6 py-6 space-y-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-base transition-colors ${
                      isActive
                        ? "text-[#d41a0b] font-semibold"
                        : "text-gray-600 hover:text-[#d41a0b]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <button className="cursor-pointer px-4 py-3 border border-gray-300 font-semibold rounded-lg bg-white hover:bg-gray-100 transition-all">
                  Login
                </button>

                <button className="cursor-pointer flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#e01e03] to-[#fbd90a] text-white font-semibold rounded-lg hover:opacity-90 transition-all">
                  Sign Up
                  <UserPlus size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
