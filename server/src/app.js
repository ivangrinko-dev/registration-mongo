const express = require("express");
const bodyParser = require("body-parser");
const route = require("./controller/controller");
const cookieParser = require('cookie-parser')
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user', route)

app.use((error, req, res, _next) => res.send(error.message));
module.exports = app;