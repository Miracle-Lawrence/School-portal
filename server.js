require("dotenv").config();

const app = require("./src/app");

const { sequelize, connectDB } = require("./src/config/db");

// ✅ FORCE LOAD MODELS
require("./src/modules/auth/auth.model");
require("./src/modules/students/student.model");
require("./src/modules/classes/class.model");
require("./src/modules/subjects/subject.model");
require("./src/modules/results/result.model");
require("./src/modules/finance/invoice.model");
require("./src/modules/finance/payment.model");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Connect DB
    await connectDB();

    // Sync models (NOW TABLES WILL BE CREATED)
    await sequelize.sync({ alter: true });
    app.get("/", (req, res) => {
      res.send("Welcome to the Live Site!");
    });


    // Start server
    app.listen(PORT, () => {
      const baseUrl = process.env.BASE_URL || `http://localhost:${PORT}`;

      console.log(`🚀 Live site running at: ${baseUrl}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

startServer();
