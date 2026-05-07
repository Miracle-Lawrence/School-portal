const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const routes = require("./routes");
app.use("/api", routes);

module.exports = app;
