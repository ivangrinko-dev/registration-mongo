const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/registration");

const TableUser = mongoose.model("user", {
  name: String,
  surname: String,
  age: String,
  email: String,
  pwd: String,
});

const ObjectId = mongoose.Types.ObjectId;

module.exports = { TableUser, ObjectId };
