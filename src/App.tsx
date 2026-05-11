import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import LearnIN from "./pages/LearnIN";
import PlanIN from "./pages/PlanIN";
import SaveIN from "./pages/SaveIN";
import InvestIN from "./pages/InvestIN";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learnin" element={<LearnIN />} />
        <Route path="/planin" element={<PlanIN />} />
        <Route path="/savein" element={<SaveIN />} />
        <Route path="/investin" element={<InvestIN />} />
      </Route>
    </Routes>
  );
}
