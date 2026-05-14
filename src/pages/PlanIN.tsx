import PlanINHero from "../components/planin-page/PlanINHero";
import PlanINLearn from "../components/planin-page/PlanINLearn";
import PlanINCalculator from "../components/planin-page/PlanINCalculator";
import PlanINSafe from "../components/planin-page/PlanINSafe";
import Newsletter from "../components/common/Newsletter";

export default function PlanIN() {
  return (
    <>
      <PlanINHero />
      <PlanINLearn />
      <PlanINCalculator />
      <PlanINSafe />
      <Newsletter />
    </>
  );
}
