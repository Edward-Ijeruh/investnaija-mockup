import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, UserPlus } from "lucide-react";
import logo from "../../assets/common/logo.png";
import logoWhite from "../../assets/common/logowhite.svg";

const navItems = [
  { name: "About", path: "/about" },
  { name: "LearnIN", path: "/learnin" },
  { name: "PlanIN", path: "/planin" },
  { name: "SaveIN", path: "/savein" },
  { name: "InvestIN", path: "/investin" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // legal pages detection
  const isLegalPage = location.pathname.startsWith("/legal");
  const usePillMode = scrolled || isLegalPage;

  // scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // shared nav styles for pill mode (IMPORTANT FIX)
  const pillNavClass =
    "mt-3 bg-white shadow-lg border border-gray-200 rounded-2xl backdrop-blur-xl";

  const normalNavClass = "bg-transparent";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        usePillMode ? "py-3" : "py-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          layout
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`flex items-center justify-between transition-all duration-500 px-4 sm:px-6 py-3 ${
            usePillMode ? pillNavClass : normalNavClass
          }`}
        >
          {/* LEFT: Logo */}
          <div className="flex-1">
            <Link to="/">
              <img
                src={usePillMode ? logo : logoWhite}
                alt="InvestNaija Logo"
                className="w-32 sm:w-40 md:w-44 transition-all duration-300"
              />
            </Link>
          </div>

          {/* CENTER: Desktop nav */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-[#e55356] font-semibold"
                      : usePillMode
                        ? "text-gray-700 hover:text-[#d41a0b]"
                        : "text-white hover:text-white/80"
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

          {/* RIGHT: Desktop buttons */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-4 text-sm">
            <motion.a
              href="https://app.investnaija.com/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                usePillMode
                  ? "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
                  : "bg-white/10 border border-white/30 text-white backdrop-blur-md hover:bg-white/20"
              }`}
            >
              Login
            </motion.a>

            <motion.a
              href="https://app.investnaija.com/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-2 rounded-lg text-white font-semibold bg-black hover:opacity-90 transition-all shadow-md cursor-pointer"
            >
              Sign Up
              <UserPlus size={18} />
            </motion.a>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={usePillMode ? "text-black" : "text-white"}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-[92%] sm:w-[80%] bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-sm font-medium transition ${
                      isActive
                        ? "text-[#e55356] font-semibold"
                        : "text-gray-700 hover:text-[#d41a0b]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="https://app.investnaija.com/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
                >
                  Login
                </a>

                <a
                  href="https://app.investnaija.com/auth/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-black text-white font-medium shadow-md hover:opacity-90 transition"
                >
                  Sign Up
                  <UserPlus size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
