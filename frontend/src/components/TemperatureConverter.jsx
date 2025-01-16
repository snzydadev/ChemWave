// TemperatureConverter.jsx
import { useState } from "react";
import "./component styles/temperatureconverter.css";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [fromUnit, setFromUnit] = useState("Celsius");
  const [toUnit, setToUnit] = useState("Fahrenheit");
  const [convertedTemperature, setConvertedTemperature] = useState(null);
  const [error, setError] = useState("");

  const handleConvert = () => {
    setError(""); // Clear previous errors
    setConvertedTemperature(null); // Clear previous results

    const temp = parseFloat(temperature);

    if (isNaN(temp)) {
      setError("Please enter a valid temperature.");
      return;
    }

    let result;

    // Conversion logic
    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
      result = (temp * 9) / 5 + 32;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
      result = temp + 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
      result = ((temp - 32) * 5) / 9;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
      result = ((temp - 32) * 5) / 9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
      result = temp - 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
      result = ((temp - 273.15) * 9) / 5 + 32;
    } else {
      setError("Invalid conversion.");
      return;
    }

    setConvertedTemperature(result.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Temperature Converter</h1>
      <div>
        <label>Temperature:</label>
        <input
          type="number"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
        />
      </div>
      <div>
        <label>From:</label>
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>
      </div>
      <div>
        <label>To:</label>
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>
      </div>
      <button onClick={handleConvert}>Convert</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {convertedTemperature && (
        <p>
          Converted Temperature: {convertedTemperature} {toUnit}
        </p>
      )}
    </div>
  );
};

export default TemperatureConverter;
