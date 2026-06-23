const express = require("express");

const router = express.Router();

const sourceHandlerController =
  require("../modules/source-handler/sourceHandler.controller");

router.post("/analyze", sourceHandlerController.analyze);

router.post("/compare", sourceHandlerController.compare);

module.exports = router;