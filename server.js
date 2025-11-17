const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js App! 🚀");
});

// Health check endpoint (important for Docker & Kubernetes)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Default port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
