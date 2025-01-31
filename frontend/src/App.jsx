import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MolecularWeightCalculator from "./components/MolecularWeightCalculator";
import ReactionSimulator from "./components/ReactionSimulator";
import MoleculeVisualizer from "./components/MoleculeVisualizer";
import StoichiometryCalculator from "./components/StoichiometryCalculator";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IdealGasLawCalculator from "./components/IdealGasLawCalculator";
import TemperatureConverter from "./components/TemperatureConverter";
import MoleToGramConverter from "./components/MoleToGramConverter";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/molecular-weight"
            element={<MolecularWeightCalculator />}
          />
          <Route path="/reaction-simulator" element={<ReactionSimulator />} />
          <Route path="/molecule-visualizer" element={<MoleculeVisualizer />} />
          <Route
            path="/stoichiometry-calculator"
            element={<StoichiometryCalculator />}
          />
          <Route
            path="ideal-gas-law-calculator"
            element={<IdealGasLawCalculator />}
          />
          <Route
            path="/temperature-converter" // New route for the temperature converter
            element={<TemperatureConverter />}
          />
          <Route
            path="/mole-to-gram-converter"
            element={<MoleToGramConverter />}
          />
        </Routes>
      </Router>

      <Footer></Footer>
    </>
  );
}

export default App;
