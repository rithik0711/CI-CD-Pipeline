const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Successfully Created CI/CD Pipeline. Now it is working in port 3000!!" });
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
