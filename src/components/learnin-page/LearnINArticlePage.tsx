import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaTelegram,
  FaThreads,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SEO from "../seo/SEO";
import { articles } from "../../data/articles";

export default function LearnINArticlePage() {
  const { id } = useParams();

  const article = articles.find((a) => a.id === id);

  if (!article) {
    return null;
  }

  const articleUrl = `${window.location.origin}/learnin/${article.id}`;

  const shareLinks: any = {
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      articleUrl,
    )}`,

    X: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      articleUrl,
    )}&text=${encodeURIComponent(article.title)}`,

    Threads: `https://www.threads.net/intent/post?text=${encodeURIComponent(
      `${article.title} ${articleUrl}`,
    )}`,

    WhatsApp: `https://wa.me/?text=${encodeURIComponent(
      `${article.title} ${articleUrl}`,
    )}`,

    LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      articleUrl,
    )}`,

    Telegram: `https://t.me/share/url?url=${encodeURIComponent(
      articleUrl,
    )}&text=${encodeURIComponent(article.title)}`,

    Email: `mailto:?subject=${encodeURIComponent(
      article.title,
    )}&body=${encodeURIComponent(
      `Check out this article:\n\n${article.title}\n${articleUrl}`,
    )}`,
  };

  const shareIcons: any = {
    Facebook: <FaFacebookF />,
    X: <FaXTwitter />,
    Threads: <FaThreads />,
    WhatsApp: <FaWhatsapp />,
    LinkedIn: <FaLinkedinIn />,
    Telegram: <FaTelegram />,
    Email: <MdEmail />,
  };

  return (
    <>
      <SEO
        title={article.title}
        description={article.intro}
        image={article.image}
        url={`https://investnaija-mockup.netlify.app/learnin/${article.id}`}
      />
      <section className="bg-[#f5f5f5] overflow-hidden">
        {/* Hero */}
        <div className="relative h-[75vh] min-h-[600px] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 h-full flex items-end pb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                {article.tag}
              </p>

              <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.02] tracking-tight text-white">
                {article.title}
              </h1>

              <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed">
                {article.intro}
              </p>

              <p className="mt-8 text-sm text-white/50">{article.date}</p>
            </motion.div>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="rounded-[36px] bg-white border border-black/5 p-8 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
            <div className="space-y-10">
              {article.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="text-2xl md:text-3xl font-semibold tracking-tight text-[#050505]"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <div
                      key={index}
                      className="border-l-4 border-[#d91b08] pl-6 py-1"
                    >
                      <p className="text-lg italic leading-[1.8] text-black/70">
                        {block.text}
                      </p>
                    </div>
                  );
                }

                return (
                  <p
                    key={index}
                    className="text-[15px] md:text-[17px] leading-[2] text-black/70"
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>

            {/* Share section */}
            {article.share && (
              <div className="mt-20 pt-10 border-t border-black/10">
                <p className="text-[11px] uppercase tracking-[0.22em] text-black/40">
                  {Array.isArray(article.share)
                    ? "Share this article"
                    : article.share.title}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {(Array.isArray(article.share)
                    ? article.share
                    : article.share.links
                  ).map((platform: string) => (
                    <a
                      key={platform}
                      href={shareLinks[platform]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-black/10 bg-[#f8f8f8] hover:bg-[#e55356] hover:border-[#e55356] transition-all duration-300"
                    >
                      <span className="text-sm text-black/70 group-hover:text-white transition-colors">
                        {shareIcons[platform]}
                      </span>

                      <span className="text-sm font-medium text-[#050505] group-hover:text-white transition-colors">
                        {platform}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-[36px] bg-black text-white p-8 md:p-14">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/50">
              Continue Learning
            </p>

            <h3 className="mt-5 text-3xl md:text-5xl font-semibold leading-tight">
              Explore more LearnIN articles.
            </h3>

            <p className="mt-5 max-w-2xl text-white/65 leading-relaxed">
              Discover practical financial education designed to help you save
              smarter, invest better, and build long-term wealth confidently.
            </p>

            <Link
              to="/learnin#learnin-articles"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-black text-sm font-medium hover:bg-white/90 transition cursor-pointer"
            >
              Explore Other Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
