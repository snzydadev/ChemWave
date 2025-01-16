import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/molecular-weight">Molecular Weight</Link>
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
    </nav>
  );
};

export default Navbar;
