const express = require("express");

const router = express.Router();

const reportController = require("./report.controller");

const authMiddleware = require("../../core/middleware/authMiddleware");

router.get("/student", authMiddleware, reportController.generateReport);

module.exports = router;
