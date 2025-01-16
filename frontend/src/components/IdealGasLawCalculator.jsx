import { useState } from "react";
import "./component styles/idealgaslawcalculator.css";

const IdealGasLawCalculator = () => {
  const [pressure, setPressure] = useState("");
  const [volume, setVolume] = useState("");
  const [moles, setMoles] = useState("");
  const [temperature, setTemperature] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError(""); // Clear previous errors
    setResult(null); // Clear previous results

    const R = 0.0821; // Ideal Gas Constant (L·atm/(mol·K))

    let calculatedResult = null;

    // Check if enough inputs are provided and calculate the missing variable
    if (pressure && volume && moles && temperature) {
      setError("Please leave one input blank to solve for it.");
      return;
    }

    if (pressure === "") {
      // Solve for pressure: P = (nRT) / V
      if (!moles || !temperature || !volume) {
        setError("Please provide values for moles, temperature, and volume.");
        return;
      }
      calculatedResult = (moles * R * temperature) / volume;
      setResult(`Pressure (P): ${calculatedResult.toFixed(2)} atm`);
    } else if (volume === "") {
      // Solve for volume: V = (nRT) / P
      if (!moles || !temperature || !pressure) {
        setError("Please provide values for moles, temperature, and pressure.");
        return;
      }
      calculatedResult = (moles * R * temperature) / pressure;
      setResult(`Volume (V): ${calculatedResult.toFixed(2)} L`);
    } else if (moles === "") {
      // Solve for moles: n = PV / RT
      if (!pressure || !volume || !temperature) {
        setError(
          "Please provide values for pressure, volume, and temperature."
        );
        return;
      }
      calculatedResult = (pressure * volume) / (R * temperature);
      setResult(`Moles of gas (n): ${calculatedResult.toFixed(2)} mol`);
    } else if (temperature === "") {
      // Solve for temperature: T = PV / (nR)
      if (!pressure || !volume || !moles) {
        setError("Please provide values for pressure, volume, and moles.");
        return;
      }
      calculatedResult = (pressure * volume) / (moles * R);
      setResult(`Temperature (T): ${calculatedResult.toFixed(2)} K`);
    }
  };

  return (
    <div className="container">
      <h1>Ideal Gas Law Calculator</h1>
      <div>
        <label>Pressure (P in atm):</label>
        <input
          type="number"
          value={pressure}
          onChange={(e) => setPressure(e.target.value)}
        />
      </div>
      <div>
        <label>Volume (V in L):</label>
        <input
          type="number"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
      <div>
        <label>Moles of Gas (n in mol):</label>
        <input
          type="number"
          value={moles}
          onChange={(e) => setMoles(e.target.value)}
        />
      </div>
      <div>
        <label>Temperature (T in K):</label>
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && <p>{result}</p>}
    </div>
  );
};

export default IdealGasLawCalculator;
