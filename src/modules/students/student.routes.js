const express = require("express");

const router = express.Router();

const studentController = require("./student.controller");

const authMiddleware = require("../../core/middleware/authMiddleware");

router.post("/create", authMiddleware, studentController.createStudent);

router.get("/all", authMiddleware, studentController.getStudents);

module.exports = router;
