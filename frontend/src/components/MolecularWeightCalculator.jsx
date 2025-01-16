import { useState } from "react";
import axios from "axios";

const MolecularWeightCalculator = () => {
  const [smiles, setSmiles] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "http://localhost:3001/api/chemistry/molecular_weight",
        { params: { smiles } }
      );
      setResult(`Molecular Weight: ${response.data.molecular_weight}`);
    } catch (error) {
      setResult("Error calculating molecular weight. " + error);
    }
  };

  return (
    <div>
      <h1>Molecular Weight Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={smiles}
          onChange={(e) => setSmiles(e.target.value)}
          placeholder="Enter SMILES"
        />
        <button type="submit">Calculate</button>
      </form>
      <p>{result}</p>
    </div>
  );
};

export default MolecularWeightCalculator;
