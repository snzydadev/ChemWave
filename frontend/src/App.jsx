import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MolecularWeightCalculator from "./components/MolecularWeightCalculator";
import ReactionSimulator from "./components/ReactionSimulator";
import MoleculeVisualizer from "./components/MoleculeVisualizer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        </Routes>
      </Router>

      <Footer></Footer>
    </>
  );
}

export default App;
