const express = require("express");
const app = express();
const { connectDB, sequelize } = require("./src/config/db");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;


const startServer = async () => {
  try {
    await connectDB();
    await sequelize.authenticate();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
