import {
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import logo from "../../assets/common/logowhite.svg";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "FAQs", href: "/faqs" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],

  Products: [
    { label: "LearnIN", href: "/learnin" },
    { label: "SaveIN", href: "/savein" },
    { label: "PlanIN", href: "/planin" },
    { label: "InvestIN", href: "/investin" },
  ],
};

const socials = [
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Linkedin, href: "https://linkedin.com" },
  { icon: Facebook, href: "https://facebook.com" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* subtle top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* MAIN */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-14">
            {/* LEFT */}
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
                <button className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-5 py-2.5 text-sm text-white hover:bg-white/[0.08] transition-all duration-300 cursor-pointer">
                  Start Investing
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-black">
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </div>
                </button>
              </motion.div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-between lg:pl-10">
              {/* links */}
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

              {/* socials */}
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

        {/* BOTTOM */}
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
