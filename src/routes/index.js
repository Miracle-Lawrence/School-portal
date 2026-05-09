const express = require("express");
const router = express.Router();

const authRoutes = require("../modules/auth/auth.routes");

// Test route
router.get("/", (req, res) => {
  res.send("API is running...");
});

// Auth routes
router.use("/auth", authRoutes);

const studentRoutes = require("../modules/students/student.routes");

router.use("/students", studentRoutes);

module.exports = router;
