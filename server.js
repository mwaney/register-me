const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./routes/userRoutes");
const app = express();

app.use("/api/users", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at port ${port}`));
