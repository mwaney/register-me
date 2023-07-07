const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome home Baby!!!!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at port ${port}`));