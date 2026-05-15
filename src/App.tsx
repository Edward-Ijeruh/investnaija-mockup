import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import LearnIN from "./pages/LearnIN";
import LearnINArticlePage from "./components/learnin-page/LearnINArticlePage";
import PlanIN from "./pages/PlanIN";
import SaveIN from "./pages/SaveIN";
import InvestIN from "./pages/InvestIN";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import TermsOfUse from "./components/legal/TermsOfUse";
import RiskDisclosure from "./components/legal/RiskDisclosure";
import AMLPolicy from "./components/legal/AMLPolicy";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learnin" element={<LearnIN />} />
          <Route path="/learnin/:id" element={<LearnINArticlePage />} />
          <Route path="/planin" element={<PlanIN />} />
          <Route path="/savein" element={<SaveIN />} />
          <Route path="/investin" element={<InvestIN />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms-of-use" element={<TermsOfUse />} />
          <Route path="/legal/risk-disclosure" element={<RiskDisclosure />} />
          <Route path="/legal/aml-policy" element={<AMLPolicy />} />
        </Route>
      </Routes>
    </>
  );
}
