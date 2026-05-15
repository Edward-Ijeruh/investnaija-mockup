import InvestINHero from "../components/investin-page/InvestINHero";
import InvestINInfo from "../components/investin-page/InvestINInfo";
import Newsletter from "../components/common/Newsletter";
import SEO from "../components/seo/SEO";

export default function InvestIN() {
  return (
    <>
      <SEO
        title="Investment Opportunities & Wealth Building"
        description="Invest smarter and grow your wealth."
        url="https://investnaija-mockup.netlify.app/investin"
      />
      <InvestINHero />
      <InvestINInfo />
      <Newsletter />
    </>
  );
}
