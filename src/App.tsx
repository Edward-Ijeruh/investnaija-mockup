import Navbar from "./components/common/Navbar";
import Hero from "./components/Hero";
import PoweredBySection from "./components/PoweredBy";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
// import GetStarted from "./components/GetStarted";
import FAQSection from "./components/FAQ";
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PoweredBySection />
      <Steps />
      <Testimonials />
      {/* <GetStarted /> */}
      <FAQSection />
      <Footer />
    </>
  );
}
