//App entry point

// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8001;
const ENV = process.env.ENV || "development";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const cookieSession = require("cookie-session");

const userRoutes = require("./src/routes/users");
const venueRoutes = require("./src/routes/venues");
const authenticationRoutes = require("./src/routes/authentication");
const trendingRoutes = require("./src/routes/trending");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cookie session setup
app.use(
  cookieSession({
    name: "session",
    keys: ["CKK"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

app.use("/api/users", userRoutes);
app.use("/api/venues", venueRoutes);
app.use("/", authenticationRoutes);
app.use("/api/trending", trendingRoutes);

app.listen(PORT, () => {
  console.log(
    `Final Project listening on port ${process.env.PORT} in ${ENV} mode`
  );
});
