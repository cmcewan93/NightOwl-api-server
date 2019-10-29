// load .env data into process.env
//require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8001;
const ENV = process.env.ENV || "development";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const cookieSession = require("cookie-session");

app.use(bodyParser.urlencoded({ extended: true }));

// Cookie session setup
app.use(
  cookieSession({
    name: "session",
    keys: ["CKK"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

app.listen(PORT, () => {
  console.log(`Final Project listening on port ${PORT} in ${ENV} mode`);
});
