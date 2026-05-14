import { useMemo, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, ChevronDown, Check } from "lucide-react";

export default function PlanINCalculator() {
  const [calculatorType, setCalculatorType] = useState(
    "See How Much Your Savings Can Earn",
  );

  const [frequency, setFrequency] = useState("Monthly");

  const [amount, setAmount] = useState(1000);
  const [interestRate, setInterestRate] = useState(8);

  const [years, setYears] = useState(60);
  const [months, setMonths] = useState(0);

  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [frequencyOpen, setFrequencyOpen] = useState(false);

  const calculatorRef = useRef<HTMLDivElement>(null);
  const frequencyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        calculatorRef.current &&
        !calculatorRef.current.contains(e.target as Node)
      ) {
        setCalculatorOpen(false);
      }

      if (
        frequencyRef.current &&
        !frequencyRef.current.contains(e.target as Node)
      ) {
        setFrequencyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const projectedValue = useMemo(() => {
    const totalMonths = years * 12 + months;

    const contribution =
      frequency === "Monthly"
        ? amount
        : frequency === "Weekly"
          ? amount * 4
          : amount / 12;

    const monthlyRate = interestRate / 100 / 12;

    let futureValue = 0;

    for (let i = 0; i < totalMonths; i++) {
      futureValue = (futureValue + contribution) * (1 + monthlyRate);
    }

    return futureValue;
  }, [amount, interestRate, years, months, frequency]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <section className="relative py-20 md:py-28 bg-gray-200 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="max-w-xl mx-auto text-center md:text-left"
          >
            <div className="text-[11px] md:text-sm uppercase tracking-[0.24em] text-black/40">
              Smart Financial Planning
            </div>

            <h2 className="mt-7 text-3xl md:text-5xl font-semibold leading-[1.04] tracking-tight text-[#050505]">
              Start investing with
              <br />
              <span className="text-[#e55356]">as little as ₦500.</span>
            </h2>

            <p className="mt-6 text-sm md:text-base leading-relaxed text-black/60">
              You can stop guessing how much your money will potentially grow
              over time with the power of compounding. Use our calculator to
              instantly visualize your future wealth and build long-term
              financial confidence.
            </p>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[30px] border border-black/10 bg-white shadow-[0_25px_90px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            {/* Top */}
            <div className="border-b border-black/5 px-5 md:px-7 py-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center">
                  <Calculator size={18} />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                    Wealth Calculator
                  </p>

                  <h3 className="mt-1 text-lg md:text-xl font-semibold tracking-tight text-[#050505]">
                    See the power of compounding
                  </h3>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 md:p-7">
              <div className="space-y-5">
                {/* Calculator type */}
                <div className="grid md:grid-cols-[160px_1fr] gap-3 items-center">
                  <label className="text-sm font-semibold text-[#050505] leading-snug">
                    Calculator Type
                  </label>

                  <div className="relative" ref={calculatorRef}>
                    <button
                      onClick={() => setCalculatorOpen(!calculatorOpen)}
                      className="w-full h-[50px] px-4 rounded-xl border border-[#d91b08]/25 bg-white flex items-center justify-between text-left text-sm text-black/70 hover:border-[#d91b08] transition-all cursor-pointer"
                    >
                      <span className="truncate">{calculatorType}</span>

                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          calculatorOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {calculatorOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          className="absolute top-[58px] left-0 w-full rounded-2xl border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden z-30"
                        >
                          {[
                            "See How Much Your Savings Can Earn",
                            "See How Much You Need To Save Regularly To Hit a Target",
                          ].map((item) => (
                            <button
                              key={item}
                              onClick={() => {
                                setCalculatorType(item);
                                setCalculatorOpen(false);
                              }}
                              className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-black/[0.03] transition"
                            >
                              <span className="text-sm text-black/70">
                                {item}
                              </span>

                              {calculatorType === item && (
                                <Check size={15} className="text-[#d91b08]" />
                              )}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Amount */}
                <div className="grid md:grid-cols-[160px_1fr] gap-3 items-center">
                  <label className="text-sm font-semibold leading-snug text-[#050505]">
                    How much do you
                    <br />
                    want to save?
                  </label>

                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-[50px] px-4 rounded-xl border border-[#d91b08]/25 bg-white outline-none focus:border-[#d91b08] text-sm text-black/70"
                  />
                </div>

                {/* Frequency */}
                <div className="grid md:grid-cols-[160px_1fr] gap-3 items-center">
                  <label className="text-sm font-semibold text-[#050505]">
                    Frequency
                  </label>

                  <div className="relative" ref={frequencyRef}>
                    <button
                      onClick={() => setFrequencyOpen(!frequencyOpen)}
                      className="w-full h-[50px] px-4 rounded-xl border border-[#d91b08]/25 bg-white flex items-center justify-between text-left text-sm text-black/70 hover:border-[#d91b08] transition-all cursor-pointer"
                    >
                      <span>{frequency}</span>

                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          frequencyOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {frequencyOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          className="absolute top-[58px] left-0 w-full rounded-2xl border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden z-30"
                        >
                          {["Monthly", "Weekly", "Yearly"].map((item) => (
                            <button
                              key={item}
                              onClick={() => {
                                setFrequency(item);
                                setFrequencyOpen(false);
                              }}
                              className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-black/[0.03] transition"
                            >
                              <span className="text-sm text-black/70">
                                {item}
                              </span>

                              {frequency === item && (
                                <Check size={15} className="text-[#d91b08]" />
                              )}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Interest */}
                <div className="grid md:grid-cols-[160px_1fr] gap-3 items-center">
                  <label className="text-sm font-semibold text-[#050505]">
                    Interest Rate
                  </label>

                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="1"
                      max="20"
                      step="0.5"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full accent-[#e55356] cursor-pointer"
                    />

                    <div className="flex h-[50px] overflow-hidden rounded-xl border border-[#d91b08]/25">
                      <input
                        type="number"
                        value={interestRate}
                        onChange={(e) =>
                          setInterestRate(Number(e.target.value))
                        }
                        className="w-[60px] px-3 outline-none text-sm text-black/70"
                      />
                      <div className="w-[40px] bg-gray-100 border-l border-[#d91b08]/20 flex items-center justify-center text-black/60 text-sm">
                        %
                      </div>
                    </div>
                  </div>
                </div>

                {/* Start Date */}
                <div className="grid md:grid-cols-[160px_1fr] gap-3 items-center">
                  <label className="text-sm font-semibold leading-snug text-[#050505]">
                    When do you want to
                    <br />
                    start saving?
                  </label>

                  <input
                    type="date"
                    className="w-full h-[50px] px-4 rounded-xl border border-[#d91b08]/25 bg-white outline-none focus:border-[#d91b08] text-sm text-black/70"
                  />
                </div>

                {/* Duration */}
                <div className="grid md:grid-cols-[160px_1fr] gap-3 items-center">
                  <label className="text-sm font-semibold leading-snug text-[#050505]">
                    How long do you
                    <br />
                    want to save
                  </label>

                  <div className="flex gap-3">
                    <div className="flex h-[50px] overflow-hidden rounded-xl border border-[#d91b08]/25">
                      <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="w-[60px] md:w-[80px] px-2 md:px-3 outline-none text-sm text-black/70"
                      />
                      <div className="px-2 md:px-4 bg-gray-100 border-l border-[#d91b08]/20 flex items-center text-black/60 text-xs md:text-sm">
                        Years
                      </div>
                    </div>

                    <div className="flex h-[50px] overflow-hidden rounded-xl border border-[#d91b08]/25">
                      <input
                        type="number"
                        value={months}
                        onChange={(e) => setMonths(Number(e.target.value))}
                        className="w-[60px] md:w-[80px] px-2 md:px-3 outline-none text-sm text-black/70"
                      />
                      <div className="px-2 md:px-4 bg-gray-100 border-l border-[#d91b08]/20 flex items-center text-black/60 text-xs md:text-sm">
                        Months
                      </div>
                    </div>
                  </div>
                </div>

                {/* Result */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-[28px] bg-black p-6 text-white shadow-[0_25px_70px_rgba(0,0,0,0.14)] mt-10"
                >
                  <div className="flex items-center gap-2 text-white/70 text-[11px] uppercase tracking-[0.2em]">
                    <TrendingUp size={13} />
                    Projection
                  </div>

                  <p className="mt-4 text-sm md:text-[20px] leading-[1.5] font-light">
                    Save{" "}
                    <span className="font-semibold">
                      {formatCurrency(amount)}
                    </span>{" "}
                    {frequency.toLowerCase()} at{" "}
                    <span className="font-semibold">{interestRate}%</span> for{" "}
                    <span className="font-semibold">{years} year(s)</span>{" "}
                    compounded quarterly to earn about{" "}
                    <motion.span
                      key={projectedValue}
                      initial={{ opacity: 0.4, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="font-semibold"
                    >
                      {formatCurrency(projectedValue)}
                    </motion.span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
