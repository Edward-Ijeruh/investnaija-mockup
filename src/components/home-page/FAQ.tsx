import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does InvestNaija work?",
    answer:
      "InvestNaija helps you learn, save, plan, and invest through structured financial pathways designed for long-term wealth building.",
  },
  {
    question: "Is my money safe with InvestNaija?",
    answer:
      "Yes. Funds are secured using regulated custodians, encrypted systems, and industry-standard financial safeguards.",
  },
  {
    question: "How do I deposit and withdraw funds?",
    answer:
      "You can fund your account via bank transfer or card. Withdrawals are processed securely within 1–2 business days.",
  },
  {
    question: "Are there fees?",
    answer:
      "Fees are transparent and minimal, designed to align with long-term investing rather than frequent trading activity.",
  },
  {
    question: "Can I change my investment plan?",
    answer:
      "Yes. You can adjust goals, risk profile, and contributions at any time from your dashboard.",
  },
  {
    question: "Where can I get help?",
    answer:
      "Support is available via in-app chat and email, with guided resources for every stage of your financial journey.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative pt-28 pb-28 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">
        {/* Left side */}
        <div className="md:sticky md:top-14 space-y-10 pr-6">
          {/* Title */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.03] border border-black/10 text-xs tracking-[0.2em] uppercase text-black/55">
            <HelpCircle size={14} />
            Knowledge Base
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#050505]">
              Clear answers for
              <br />
              <span className="text-[#0b6e7a]">confident decisions</span>
            </h2>

            <p className="text-black/55 text-sm md:text-base leading-relaxed max-w-md">
              Structured explanations designed to remove uncertainty and help
              you make informed financial decisions with clarity.
            </p>
          </div>

          {/* Key points */}
          <div className="space-y-4 border-l border-black/10 pl-5">
            {[
              "Transparent investment structure",
              "Regulated custody & compliance systems",
              "Built for disciplined long-term growth",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-sm text-black/50"
              >
                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#0b6e7a]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="space-y-1">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-black/10">
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
                >
                  <span
                    className={`text-sm md:text-base transition-colors leading-relaxed ${
                      isOpen
                        ? "text-[#0b6e7a]"
                        : "text-black/75 group-hover:text-black"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Plus/Minus */}
                  <div className="ml-6 flex items-center justify-center w-8 h-8 rounded-md border border-black/10 bg-black/[0.02]">
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[#0b6e7a]"
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </motion.div>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-6 text-sm md:text-base text-black/55 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
