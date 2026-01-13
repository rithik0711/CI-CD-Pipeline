const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "CI/CD Pipeline is working!" });
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});