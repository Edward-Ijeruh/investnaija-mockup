import Hero from "../components/home-page/Hero";
import PoweredBySection from "../components/home-page/PoweredBy";
import Steps from "../components/home-page/Steps";
import Testimonials from "../components/home-page/Testimonials";
import GetStarted from "../components/home-page/GetStarted";
import FAQSection from "../components/home-page/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <PoweredBySection />
      <Steps />
      <Testimonials />
      <GetStarted />
      <FAQSection />
    </>
  );
}
