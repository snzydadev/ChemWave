import { useState } from "react";
import "./component styles/stoichiometrycalculator.css";

const StoichiometryCalculator = () => {
  const [reactantA, setReactantA] = useState("");
  const [reactantB, setReactantB] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError(""); // Clear previous errors
    setResult(null); // Clear previous results

    const molarRatio = { reactantA: 2, reactantB: 1, product: 2 }; // Example reaction: 2 H2 + O2 -> 2 H2O

    const reactantAAmount = parseFloat(reactantA);
    const reactantBAmount = parseFloat(reactantB);

    if (isNaN(reactantAAmount) || isNaN(reactantBAmount)) {
      setError("Please enter valid numbers for reactants.");
      return;
    }

    // Calculate product amount based on the limiting reactant
    const limitingReactant = Math.min(
      reactantAAmount / molarRatio.reactantA,
      reactantBAmount / molarRatio.reactantB
    );
    const productAmount = limitingReactant * molarRatio.product;

    setProduct(productAmount.toFixed(2));
    setResult(
      `The amount of product produced is: ${productAmount.toFixed(2)} moles.`
    );
  };

  return (
    <div className="container">
      <h1>Stoichiometry Calculator</h1>
      <div>
        <label>Reactant A (in moles):</label>
        <input
          type="number"
          value={reactantA}
          onChange={(e) => setReactantA(e.target.value)}
        />
      </div>
      <div>
        <label>Reactant B (in moles):</label>
        <input
          type="number"
          value={reactantB}
          onChange={(e) => setReactantB(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && <p>{result}</p>}
    </div>
  );
};

export default StoichiometryCalculator;
