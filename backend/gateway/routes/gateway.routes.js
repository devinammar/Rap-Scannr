const express = require("express");

const router = express.Router();

router.post("/analyze", (req, res) => {
  res.json({
    message: "Analyze endpoint ready",
  });
});

router.post("/compare", (req, res) => {
  res.json({
    message: "Compare endpoint ready",
  });
});

module.exports = router;