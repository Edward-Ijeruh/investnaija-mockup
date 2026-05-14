import AboutHero from "../components/about-page/AboutHero";
import AboutStory from "../components/about-page/AboutStory";
import AppSection from "../components/about-page/AppSection";
import CTASection from "../components/about-page/CTA";
import Newsletter from "../components/common/Newsletter";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AppSection />
      <CTASection />
      <Newsletter />
    </>
  );
}
