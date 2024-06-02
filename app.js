const express = require("express");
const app = express();
const port = 8080;

app.get("/api/v1/health", (req, res) => {
  res.send("OK");
});

app.get("/", (req, res) => {
  res.send("Hello, World!h");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
