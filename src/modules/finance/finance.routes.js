const express = require("express");
const router = express.Router();

const controller = require("./finance.controller");
const auth = require("../../core/middleware/authMiddleware");

router.post("/invoice", auth, controller.createInvoice);

router.post("/pay", auth, controller.makePayment);

router.get("/invoices", auth, controller.getInvoices);

module.exports = router;
