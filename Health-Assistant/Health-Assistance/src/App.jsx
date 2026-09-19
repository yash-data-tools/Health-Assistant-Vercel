import { HealthAssistant } from "./HealthAssistant";
import { BmiCalculator } from "./BmiCalculator";
import { Histroy } from "./History";
import { About } from "./About";
import { Route, Routes } from "react-router";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HealthAssistant />} />
      <Route path="/bmi" element={<BmiCalculator />} />
      <Route path="/history" element={<Histroy />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App
