// MoleToGramConverter.jsx
import { useState } from "react";
import "./component styles/moletogramconverter.css";

const MoleToGramConverter = () => {
  const [moles, setMoles] = useState("");
  const [molecularWeight, setMolecularWeight] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleConvert = () => {
    setError(""); // Clear previous errors
    setResult(null); // Clear previous results

    const molesValue = parseFloat(moles);
    const molecularWeightValue = parseFloat(molecularWeight);

    if (isNaN(molesValue) || isNaN(molecularWeightValue)) {
      setError("Please enter valid numbers for moles and molecular weight.");
      return;
    }

    const grams = molesValue * molecularWeightValue;
    setResult(`The mass is: ${grams.toFixed(2)} grams.`);
  };

  return (
    <div className="container">
      <h1>Mole-to-Gram Conversion</h1>
      <div>
        <label>Number of Moles:</label>
        <input
          type="number"
          value={moles}
          onChange={(e) => setMoles(e.target.value)}
        />
      </div>
      <div>
        <label>Molecular Weight (g/mol):</label>
        <input
          type="number"
          value={molecularWeight}
          onChange={(e) => setMolecularWeight(e.target.value)}
        />
      </div>
      <button onClick={handleConvert}>Convert</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && <p>{result}</p>}
    </div>
  );
};

export default MoleToGramConverter;
