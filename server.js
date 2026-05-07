require("dotenv").config();

const express = require("express");
const sequelize = require("./src/config/db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);

      // 👇 ADD THIS
      const baseUrl = process.env.BASE_URL || `http://localhost:${PORT}`;

      console.log(`🚀 Live site running at: ${baseUrl}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

startServer();
