import AboutHero from "../components/about-page/AboutHero";
import AboutStory from "../components/about-page/AboutStory";
import AppSection from "../components/about-page/AppSection";
import CTASection from "../components/about-page/CTA";
import Newsletter from "../components/common/Newsletter";
import SEO from "../components/seo/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About InvestNaija"
        description="InvestNaija is building a complete financial ecosystem to help Nigerians learn, plan, save and invest smarter."
        url="https://investnaija-mockup.netlify.app/about"
      />
      <AboutHero />
      <AboutStory />
      <AppSection />
      <CTASection />
      <Newsletter />
    </>
  );
}
