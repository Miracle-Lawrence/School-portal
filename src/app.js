const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();

app.use(cors());

app.use(express.json());

// API Routes
app.use("/api", routes);

const bodyParser = require("body-parser");

// normal routes
app.use(express.json());

// webhook MUST use raw body
app.use("/api/paystack/webhook", bodyParser.raw({ type: "application/json" }));

module.exports = app;
