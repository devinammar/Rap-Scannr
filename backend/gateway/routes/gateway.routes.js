const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    const response = await axios.post(
      `${process.env.SPS_SERVICE_URL}/analyze`,
      req.body
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/compare", async (req, res) => {
  try {
    const response = await axios.post(
      `${process.env.SPS_SERVICE_URL}/compare`,
      req.body
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;