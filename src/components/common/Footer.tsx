import { ArrowRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { SiThreads, SiX } from "react-icons/si";

import { motion } from "framer-motion";

import logo from "../../assets/common/logowhite.svg";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Use", href: "/legal/terms-of-use" },
    { label: "Risk Disclosure", href: "/legal/risk-disclosure" },
    { label: "AML Policy", href: "/legal/aml-policy" },
  ],
  Products: [
    { label: "LearnIN", href: "/learnin" },
    { label: "SaveIN", href: "/savein" },
    { label: "PlanIN", href: "/planin" },
    { label: "InvestIN", href: "/investin" },
  ],
};

const socials = [
  { icon: SiX, href: "https://twitter.com/investnaija" },
  { icon: FaInstagram, href: "https://www.instagram.com/investnaija/" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/showcase/investnaija/" },
  { icon: FaFacebook, href: "https://www.facebook.com/in.investnaija" },
  { icon: FaYoutube, href: "https://www.youtube.com/@investnaija" },
  { icon: SiThreads, href: "https://www.threads.com/@investnaija" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-14">
            {/* Left side */}
            <div className="max-w-xl">
              <motion.img
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                src={logo}
                alt="InvestNaija Logo"
                className="w-40"
              />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08, duration: 0.4 }}
              >
                <h2 className="mt-8 text-[38px] md:text-[64px] font-semibold tracking-[-0.06em] leading-[0.92]">
                  Wealth,
                  <br />
                  <span className="text-white/30">without the noise.</span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                  A calmer investing experience designed to simplify decisions
                  and reduce financial friction.
                </p>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14, duration: 0.4 }}
                className="mt-7"
              >
                <motion.a
                  href="https://app.investnaija.com/auth/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-5 py-2.5 text-sm text-white hover:bg-white/[0.08] transition-all duration-300 cursor-pointer"
                >
                  Start Investing
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black">
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </div>
                </motion.a>
              </motion.div>

              {/* App downloads */}
              <div className="mt-6">
                <p className="text-[11px] uppercase tracking-wider text-white/40 mb-3">
                  Get the app
                </p>

                <div className="flex flex-row flex-nowrap items-center gap-2">
                  {/* iOS */}
                  <a
                    href="https://apps.apple.com/ng/app/investnaija/id1579193940"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-black/40 border border-white/30 backdrop-blur-xl hover:bg-black/60 transition shrink-0"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                      className="w-4 h-4 invert"
                      alt="iOS"
                    />

                    <div className="text-left leading-tight">
                      <p className="text-[9px] sm:text-[10px] text-white/60">
                        Download on the
                      </p>
                      <p className="text-xs sm:text-sm text-white font-medium">
                        App Store
                      </p>
                    </div>
                  </a>

                  {/* Android */}
                  <a
                    href="https://play.google.com/store/search?q=investnaija&c=apps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get it on Google Play"
                      className="h-11 w-auto opacity-90 hover:opacity-100 transition"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col justify-between lg:pl-10">
              {/* Links */}
              <div className="grid grid-cols-2 gap-10">
                {Object.entries(footerLinks).map(([title, links]) => (
                  <div key={title}>
                    <h4 className="text-[10px] uppercase tracking-[0.22em] text-white/45 mb-5">
                      {title}
                    </h4>

                    <ul className="space-y-3.5">
                      {links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-sm text-white/55 hover:text-white transition-colors duration-300 cursor-pointer"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="pt-10">
                <div className="flex items-center gap-2.5">
                  {socials.map((item, idx) => {
                    const Icon = item.icon;

                    return (
                      <motion.a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 cursor-pointer"
                      >
                        <Icon
                          size={16}
                          className="text-white/55 group-hover:text-white transition-colors duration-300"
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-white/55 tracking-wide">
            © 2026 InvestNaija
          </p>

          <p className="max-w-lg text-[11px] leading-5 text-white/55 md:text-right">
            Licensed financial infrastructure with regulated custody and
            long-term wealth solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
