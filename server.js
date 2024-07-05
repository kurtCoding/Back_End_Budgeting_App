// Dependencies
const app = require("./app");

// Configuration
require("dotenv").config();
const PORT = process.env.PORT;
console.log(PORT);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});