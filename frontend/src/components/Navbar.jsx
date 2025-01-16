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
      </ul>
    </nav>
  );
};

export default Navbar;
