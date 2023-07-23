"use strict";

/* Module */
const express = require("express");
const app = express();

/* Routing */
const home = require("./src/routes/home");

/* App Setting */
app.set("views", "./src/views");
app.set("view engine", "ejs");

/* MiddleWare */
app.use("/", home);

module.exports = app;