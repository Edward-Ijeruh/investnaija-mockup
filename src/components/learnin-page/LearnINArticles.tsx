import { motion } from "framer-motion";
import art1 from "../../assets/learnin/art-1.png";
import art2 from "../../assets/learnin/art-2.png";
import art3 from "../../assets/learnin/art-3.png";
import art4 from "../../assets/learnin/art-4.png";
import art5 from "../../assets/learnin/art-5.png";
import art6 from "../../assets/learnin/art-6.png";

const articles = [
  {
    id: "investing-basics",
    title: "Understanding How Investing Actually Works",
    tag: "Investing 101",
    image: art1,
  },
  {
    id: "saving-habits",
    title: "Building Strong Saving Habits That Stick",
    tag: "Personal Finance",
    image: art2,
  },
  {
    id: "risk-management",
    title: "Risk vs Reward: What Every Investor Should Know",
    tag: "Investing Strategy",
    image: art3,
  },
  {
    id: "compound-growth",
    title: "How Compound Growth Builds Wealth Over Time",
    tag: "Wealth Building",
    image: art4,
  },
  {
    id: "financial-discipline",
    title: "Financial Discipline: The Real Wealth Secret",
    tag: "Mindset",
    image: art5,
  },
  {
    id: "market-basics",
    title: "Market Basics Every Beginner Should Understand",
    tag: "Markets",
    image: art6,
  },
];

export default function LearnINArticles() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-black/40">
            LearnIN Library
          </p>

          <h2 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight text-[#050505] leading-tight">
            Simple lessons for{" "}
            <span className="bg-[#e55356] bg-clip-text text-transparent">
              smarter financial decisions
            </span>
          </h2>

          <p className="mt-5 text-sm md:text-base text-black/50 leading-relaxed">
            Carefully curated financial education designed to reduce complexity
            and help you build long-term clarity with money.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#d91b08] font-medium">
                  {article.tag}
                </p>

                <h3 className="mt-3 text-lg md:text-xl font-semibold text-[#050505] leading-snug group-hover:text-black/80 transition-colors">
                  {article.title}
                </h3>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-black/40">Read article</span>

                  <span className="text-xs font-medium text-black/60 group-hover:text-black transition">
                    →
                  </span>
                </div>
              </div>

              {/* Future routing hook */}
              <div data-article-id={article.id} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
