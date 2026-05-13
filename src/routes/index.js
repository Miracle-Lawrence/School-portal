const express = require("express");

const router = express.Router();

const authRoutes = require("../modules/auth/auth.routes");

const studentRoutes = require("../modules/students/student.routes");

const classRoutes = require("../modules/classes/class.routes");


router.use("/auth", authRoutes);

router.use("/students", studentRoutes);

router.use("/classes", classRoutes);


module.exports = router;
