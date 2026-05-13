const express = require("express");
const router = express.Router();

const auth = require("../../core/middleware/authMiddleware");

const controller = require("./parent.finance.controller");

router.get("/finance", auth, controller.getDashboard);

module.exports = router;
