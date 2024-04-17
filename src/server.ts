const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));

//Api endpoints

module.exports = app;
