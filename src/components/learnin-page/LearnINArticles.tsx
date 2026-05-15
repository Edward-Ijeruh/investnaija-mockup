// LearnINArticles.tsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { articles } from "../../data/articles";

export default function LearnINArticles() {
  return (
    <section
      id="learnin-articles"
      className="relative py-28 bg-[#f5f5f5] overflow-hidden scroll-mt-8"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[11px] md:text-sm uppercase tracking-[0.24em] text-black/40">
            LearnIN Library
          </p>

          <h2 className="mt-6 text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[#050505]">
            Financial education made{" "}
            <span className="text-[#d91b08]">simple and practical.</span>
          </h2>

          <p className="mt-6 text-sm md:text-base text-black/55 leading-relaxed">
            Learn how to save smarter, invest confidently, and build healthier
            financial habits through easy-to-understand educational content.
          </p>
        </motion.div>

        {/* Articles */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 items-stretch">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              className="h-full"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
            >
              <Link
                to={`/learnin/${article.id}`}
                onClick={() => window.scrollTo(0, 0)}
                className="group flex flex-col h-[420px] rounded-[28px] overflow-hidden border border-black/10 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-[170px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] uppercase tracking-[0.18em]">
                      {article.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-black/40">{article.date}</p>

                  <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-[#050505] group-hover:text-[#e55356] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm text-black/55 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="mt-auto pt-5 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#050505]">
                      Read Article
                    </span>

                    <div className="w-9 h-9 rounded-full bg-black/[0.04] flex items-center justify-center group-hover:bg-[#e55356] group-hover:text-white transition-all duration-300">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
