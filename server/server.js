require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../public")));

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
