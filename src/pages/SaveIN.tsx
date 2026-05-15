import SaveINHero from "../components/savein-page/SaveINHero";
import SaveINInfo from "../components/savein-page/SaveINInfo";
import Newsletter from "../components/common/Newsletter";
import SEO from "../components/seo/SEO";

export default function SaveIN() {
  return (
    <>
      <SEO
        title="Smart Saving Tools & Strategies"
        description="Save consistently and build financial discipline."
        url="https://investnaija-mockup.netlify.app/savein"
      />
      <SaveINHero />
      <SaveINInfo />
      <Newsletter />
    </>
  );
}
