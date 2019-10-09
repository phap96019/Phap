const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.json({ msg: "Hello from PDC" });
});

app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
