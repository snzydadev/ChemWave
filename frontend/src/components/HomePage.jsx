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
      </ul>
    </div>
  );
};

export default HomePage;
