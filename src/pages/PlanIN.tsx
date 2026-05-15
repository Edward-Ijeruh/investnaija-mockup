import PlanINHero from "../components/planin-page/PlanINHero";
import PlanINLearn from "../components/planin-page/PlanINLearn";
import PlanINCalculator from "../components/planin-page/PlanINCalculator";
import PlanINSafe from "../components/planin-page/PlanINSafe";
import Newsletter from "../components/common/Newsletter";
import SEO from "../components/seo/SEO";

export default function PlanIN() {
  return (
    <>
      <SEO
        title="Financial Planning Tools"
        description="Plan your financial future with smart tools for budgeting, goal setting, and long-term money planning."
        url="https://investnaija-mockup.netlify.app/planin"
      />
      <PlanINHero />
      <PlanINLearn />
      <PlanINCalculator />
      <PlanINSafe />
      <Newsletter />
    </>
  );
}
