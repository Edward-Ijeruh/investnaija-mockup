import Hero from "../components/home-page/Hero";
import PoweredBySection from "../components/home-page/PoweredBy";
import Steps from "../components/home-page/Steps";
import Testimonials from "../components/home-page/Testimonials";
import GetStarted from "../components/home-page/GetStarted";
import FAQSection from "../components/home-page/FAQ";
import Newsletter from "../components/common/Newsletter";
import SEO from "../components/seo/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Smart Money Platform for Nigerians"
        description="InvestNaija helps you Learn, Plan, Save and Invest smarter with modern financial tools built for real-life money decisions."
        url="https://investnaija-mockup.netlify.app/"
      />
      <Hero />
      <PoweredBySection />
      <Steps />
      <Testimonials />
      <GetStarted />
      <FAQSection />
      <Newsletter />
    </>
  );
}
