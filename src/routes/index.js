const express = require("express");

const router = express.Router();

const authRoutes = require("../modules/auth/auth.routes");

const studentRoutes = require("../modules/students/student.routes");

const classRoutes = require("../modules/classes/class.routes");

const subjectRoutes = require("../modules/subjects/subject.routes");

const resultRoutes = require("../modules/results/result.routes");

const reportRoutes = require("../modules/reports/report.routes");

const financeRoutes = require("../modules/finance/finance.routes");

const parentRoutes = require("../modules/parents/parent.routes");

const receiptRoutes = require("../modules/finance/receipt.routes");

const webhookRoutes = require("../modules/finance/paystack.webhook.routes");





router.use("/auth", authRoutes);

router.use("/students", studentRoutes);

router.use("/classes", classRoutes);

router.use("/subjects", subjectRoutes);

router.use("/results", resultRoutes);

router.use("/reports", reportRoutes);

router.use("/finance", financeRoutes);

router.use("/parents", parentRoutes);

router.use("/receipts", receiptRoutes);

router.use("/paystack/webhook", webhookRoutes);

module.exports = router;
