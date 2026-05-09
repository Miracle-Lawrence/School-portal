const express = require("express");
const router = express.Router();

const authMiddleware = require("../../core/middleware/authMiddleware");

router.get("/all", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

module.exports = router;
