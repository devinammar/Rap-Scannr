// ini perubahanan sebelum deploy

require("dotenv").config({ path: "../.env" });

const app = require("./app");

const PORT = process.env.PORT || process.env.GATEWAY_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`);
});

// _________________________________________________________

// require("dotenv").config({ path: "../.env" });

// const app = require("./app");

// const PORT = process.env.GATEWAY_PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Gateway running on port ${PORT}`);
// });

// __________________________________________________

// require("dotenv").config();

// const app = require("./app");

// const PORT = process.env.GATEWAY_PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Gateway running on port ${PORT}`);
// });