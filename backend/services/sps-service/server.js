// ini perubahanan sebelum deploy

require("dotenv").config();

const app = require("./app");

const PORT = process.env.SPS_SERVICE_PORT || 4000;

app.listen(PORT, () => {
  console.log(`SPS Service running on port ${PORT}`);
});

// ___________________________________________________________

// require("dotenv").config();

// const app = require("./app");

// const PORT = process.env.SPS_SERVICE_PORT || 4000;

// app.listen(PORT, () => {
//   console.log(`SPS Service running on port ${PORT}`);
// });