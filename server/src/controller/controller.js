const express = require("express");
const route = express.Router();
const { createUser } = require("./servise");

route.get("/", req, (res) => {
  res.send("hi");
});

module.export = route;
