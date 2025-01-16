const express = require("express");
const cors = require("cors");
const app = express();
const chemistryRoutes = require("./routes/chemistry");

app.use(cors());
app.use(express.json());
app.use("/api/chemistry", chemistryRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
