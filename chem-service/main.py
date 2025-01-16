from fastapi import FastAPI
from rdkit import Chem
from rdkit.Chem import Descriptors  # Import Descriptors explicitly

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to ChemWave Chemistry Service"}

@app.get("/molecular_weight/")
def molecular_weight(smiles: str):
    molecule = Chem.MolFromSmiles(smiles)
    if not molecule:
        return {"error": "Invalid SMILES string"}
    weight = Descriptors.MolWt(molecule)  # Use the explicitly imported Descriptors
    return {"molecular_weight": weight}

@app.post("/simulate_reaction/")
def simulate_reaction(reactants: list):
    # Simulate a chemical reaction (simplified for now)
    if len(reactants) < 2:
        return {"error": "At least two reactants are required"}
    product = "".join(reactants)  # Example: Combine reactants into a product string
    return {"reaction": f"{' + '.join(reactants)} -> {product}"}
