const { TableUser, ObjectId } = require("../db");

async function geteAllUserDb() {
  const data = await TableUser.find();
  return data;
}

async function getUserByIdDb(_id) {
  const data = await TableUser.find({ _id: new ObjectId(_id) });
  return data;
}

async function createUserDb(user) {
  await TableUser.create(user);
  const data = await TableUser.find();
  return data;
}

async function updateUserDb(_id, user) {
  await TableUser.updateOne({ _id: new ObjectId(_id) }, { $set: user });
  const data = await TableUser.find();
  return data;
}

async function deleteUserDb(_id) {
  await TableUser.deleteOne({ _id: new ObjectId(_id) });
  const data = await TableUser.find();
  return data;
}

async function getUserByEmail(email) {
  
  const data = await TableUser.find({email: email});
  return data;
}



module.exports = { createUserDb, geteAllUserDb, updateUserDb, deleteUserDb, getUserByIdDb, getUserByEmail};