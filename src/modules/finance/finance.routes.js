const express = require("express");
const router = express.Router();

const controller = require("./finance.controller");
const auth = require("../../core/middleware/authMiddleware");

router.post("/invoice", auth, controller.createInvoice);

router.post("/pay", auth, controller.makePayment);

router.get("/invoices", auth, controller.getInvoices);

router.post("/initialize-payment", auth, controller.initializePayment);

router.post("/webhook/paystack", express.json(), controller.paystackWebhook);

module.exports = router;
