const express = require("express");
const cors = require("cors");

const analysisRoutes = require("./routes/analysis.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", analysisRoutes);

module.exports = app;