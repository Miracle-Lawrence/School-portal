const express = require("express");

const router = express.Router();

const authRoutes = require("../modules/auth/auth.routes");

const studentRoutes = require("../modules/students/student.routes");

const classRoutes = require("../modules/classes/class.routes");

const subjectRoutes = require("../modules/subjects/subject.routes");

const resultRoutes = require("../modules/results/result.routes");

const reportRoutes = require("../modules/reports/report.routes");

router.use("/auth", authRoutes);

router.use("/students", studentRoutes);

router.use("/classes", classRoutes);

router.use("/subjects", subjectRoutes);

router.use("/results", resultRoutes);

router.use("/reports", reportRoutes);

module.exports = router;
