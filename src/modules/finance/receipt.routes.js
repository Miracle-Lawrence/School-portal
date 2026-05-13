const express = require("express");
const router = express.Router();

const controller = require("./receipt.controller");
const auth = require("../../core/middleware/authMiddleware");

router.get("/:paymentId", auth, controller.getReceipt);

module.exports = router;
