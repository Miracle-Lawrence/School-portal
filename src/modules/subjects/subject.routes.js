const express = require("express");

const router = express.Router();

const subjectController = require("./subject.controller");

const authMiddleware = require("../../core/middleware/authMiddleware");

router.post("/create", authMiddleware, subjectController.createSubject);

router.get("/all", authMiddleware, subjectController.getSubjects);

module.exports = router;
