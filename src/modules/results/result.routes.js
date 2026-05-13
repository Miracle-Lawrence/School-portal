const express = require("express");

const router = express.Router();

const resultController = require("./result.controller");

const authMiddleware = require("../../core/middleware/authMiddleware");

router.post("/create", authMiddleware, resultController.createResult);

router.get("/all", authMiddleware, resultController.getResults);

router.get("/positions", authMiddleware, resultController.computePositions);

module.exports = router;
