const mongoose = require("mongoose");

const dbConnection = async () => {
  await mongoose
    .connect("mongodb://localhost/users")
    .then(() => console.log("Connection to MongoDB successful..."))
    .catch((err) => console.log("Failed to connect to MongoDB!!!", err));
};

module.exports = dbConnection;
