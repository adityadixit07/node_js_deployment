const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.get("/", (req, res, next) => {
  res.send("service is live now.....");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
