import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does InvestNaija work?",
    answer: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Tell us a little about you:</strong> Share how much you want
          to invest, why you're investing, and your timeline so we can guide
          you.
        </li>
        <li>
          <strong>Set up your account in minutes:</strong> Pick an investing
          goal, create a plan, and make your first deposit.
        </li>
        <li>
          <strong>We handle the hard stuff:</strong> Portfolio management, stock
          trading, and long-term financial guidance are all managed for you.
        </li>
      </ul>
    ),
  },
  {
    question: "Is my money safe with InvestNaija?",
    answer:
      "Absolutely. We use bank-level security measures, encryption, and trusted custodians to protect your funds and personal data.",
  },
  {
    question: "How do I deposit and withdraw funds?",
    answer:
      "Deposits are instant via local bank transfers or cards. Withdrawals are processed quickly, typically within 1-2 business days.",
  },
  {
    question: "Are there fees?",
    answer:
      "We keep fees transparent and affordable. Most investment products have low management fees, and there are no hidden charges.",
  },
  {
    question: "Can I change my investment plan?",
    answer:
      "Yes! You can update your goals, contributions, or risk preferences at any time through your InvestNaija account.",
  },
  {
    question: "Where can I get help?",
    answer:
      "Our support team is always ready to assist via chat, email, or phone. We also provide guides and resources to help you invest confidently.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fde68a,transparent_45%)] opacity-20" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-wide text-[#d41a0b]">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked <span className="text-[#d41a0b]">Questions </span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Get answers to common questions about InvestNaija and how to start
            building your financial future.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none cursor-pointer"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-[#d41a0b]" />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-6 text-gray-700 text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
