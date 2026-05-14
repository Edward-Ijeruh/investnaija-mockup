import LearnINHero from "../components/learnin-page/LearnINHero";
import LearnSection from "../components/learnin-page/LearnINLearn";
import LearnVideo from "../components/learnin-page/LearnVideo";
import LearnINArticles from "../components/learnin-page/LearnINArticles";
import Newsletter from "../components/common/Newsletter";

export default function LearnIN() {
  return (
    <>
      <LearnINHero />
      <LearnSection />
      <LearnVideo />
      <LearnINArticles />
      <Newsletter />
    </>
  );
}
