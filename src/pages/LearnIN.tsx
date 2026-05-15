import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import LearnINHero from "../components/learnin-page/LearnINHero";
import LearnSection from "../components/learnin-page/LearnINLearn";
import LearnVideo from "../components/learnin-page/LearnVideo";
import LearnINArticles from "../components/learnin-page/LearnINArticles";
import Newsletter from "../components/common/Newsletter";
import SEO from "../components/seo/SEO";

export default function LearnIN() {
  const location = useLocation();

  // Scroll to articles when returning with CTA
  useEffect(() => {
    if (location.hash === "#learnin-articles") {
      const el = document.getElementById("learnin-articles");

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);
  return (
    <>
      <SEO
        title="Learn Financial Literacy & Money Skills"
        description="Learn practical financial skills, investing basics, and money management strategies designed for everyday Nigerians."
        url="https://investnaija-mockup.netlify.app/learnin"
      />
      <LearnINHero />
      <LearnSection />
      <LearnVideo />
      <LearnINArticles />
      <Newsletter />
    </>
  );
}
