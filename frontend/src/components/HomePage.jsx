import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to ChemWave</h1>
      <p>Select a tool to get started:</p>
      <ul>
        <li>
          <Link to="/molecular-weight">Molecular Weight Calculator</Link>
        </li>
        <li>
          <Link to="/reaction-simulator">Reaction Simulator</Link>
        </li>
        <li>
          <Link to="/molecule-visualizer">Molecule Visualizer</Link>
        </li>
        <li>
          <Link to="/stoichiometry-calculator">Stoichiometry Calculator</Link>
        </li>
        <li>
          <Link to="/ideal-gas-law-calculator">Ideal Gas Law Calculator</Link>
        </li>
        <li>
          <Link to="/temperature-converter">Temperature Converter</Link>
        </li>
        <li>
          <Link to="/mole-to-gram-converter">Mole-to-Gram Converter</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
