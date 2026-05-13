const express = require("express");

const router = express.Router();

const authRoutes = require("../modules/auth/auth.routes");

const studentRoutes = require("../modules/students/student.routes");

router.use("/auth", authRoutes);

router.use("/students", studentRoutes);

module.exports = router;
