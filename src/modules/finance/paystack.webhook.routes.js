const express = require("express");
const router = express.Router();

const controller = require("./paystack.webhook.controller");

router.post("/", controller.paystackWebhook);

module.exports = router;
