import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "../../assets/common/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 relative pt-24 pb-12 overflow-hidden border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-7 flex flex-col justify-between">
            {/* Logo */}
            <div className="mb-6">
              <img src={logo} alt="InvestNaija Logo" className="w-50 h-auto" />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-6 pr-0 md:pr-4">
              InvestNaija by Chapel Hill Denham is a brand of InvestIN Limited.
              Chapel Hill Denham is licensed by the SEC as a Fund/Portfolio
              Manager (License #506) and a Broker Dealer (License #1529),
              holding trading licenses on NGX, FMDQ, AFEX and NASD, with
              cross-border licenses under WACMI and AELP. InvestIN owns InvestIN
              MFB regulated by CBN, deposits protected by NDIC.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Facebook, href: "https://facebook.com" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
                               bg-gradient-to-r from-[#e01e03] to-[#fbd90a] 
                               text-white hover:opacity-90 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            {/* Company links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  <a
                    href="/about"
                    className="hover:text-[#d41a0b] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/faqs"
                    className="hover:text-[#d41a0b] transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-[#d41a0b] transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-[#d41a0b] transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            {/* Products links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Products
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>
                  <a
                    href="/learnin"
                    className="hover:text-[#d41a0b] transition-colors"
                  >
                    LearnIN
                  </a>
                </li>
                <li>
                  <a
                    href="/savein"
                    className="hover:text-[#d41a0b] transition-colors"
                  >
                    SaveIN
                  </a>
                </li>
                <li>
                  <a
                    href="/planin"
                    className="hover:text-[#d41a0b] transition-colors"
                  >
                    PlanIN
                  </a>
                </li>
                <li>
                  <a
                    href="/investin"
                    className="hover:text-[#d41a0b] transition-colors"
                  >
                    InvestIN
                  </a>
                </li>
                <li>
                  <a
                    href="/100m65"
                    className="hover:text-[#d41a0b] transition-colors"
                  >
                    100M65
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-6"></div>

        {/* Bottomr */}
        <div className="flex flex-col justify-between items-center text-sm text-gray-600 space-y-2">
          <p>© 2026 InvestNaija | All Rights Reserved.</p>
          <p className="text-center md:text-right">
            For further details see our{" "}
            <a
              href="/legal"
              className="text-[#d41a0b] transition-colors hover:underline cursor-pointer"
            >
              Legal Disclosures
            </a>
            . By using this website, you accept our{" "}
            <a
              href="/terms"
              className="text-[#d41a0b] transition-colors hover:underline cursor-pointer"
            >
              Terms of Use
            </a>
            and{" "}
            <a
              href="/privacy"
              className="text-[#d41a0b] transition-colors hover:underline cursor-pointer"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
