const express = require("express");

const router = express.Router();

const classController = require("./class.controller");

const authMiddleware = require("../../core/middleware/authMiddleware");

router.post("/create", authMiddleware, classController.createClass);

router.get("/all", authMiddleware, classController.getClasses);

module.exports = router;
