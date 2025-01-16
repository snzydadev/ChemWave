const express = require("express");
const axios = require("axios");
const router = express.Router();

// Example: Forward requests to the Python chemistry service
const CHEM_SERVICE_URL = "http://localhost:8000";

router.get("/molecular_weight", async (req, res) => {
  try {
    const { smiles } = req.query;
    const response = await axios.get(`${CHEM_SERVICE_URL}/molecular_weight`, {
      params: { smiles },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch molecular weight" });
  }
});

router.post("/simulate_reaction", async (req, res) => {
  try {
    const { reactants } = req.body;
    const response = await axios.post(`${CHEM_SERVICE_URL}/simulate_reaction`, {
      reactants,
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to simulate reaction" });
  }
});

module.exports = router;
