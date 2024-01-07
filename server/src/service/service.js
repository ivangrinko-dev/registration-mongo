

const {
  createUserDb,
  geteAllUserDb,
  updateUserDb,
  deleteUserDb,
  getUserByIdDb
} = require("../repository/repository");

async function geteAllUser() {
  const data = await geteAllUserDb();
  return data;
}

async function getUserById(_id) {
  const data = await getUserByIdDb(_id);
  return data;
}


async function createUser(user) {
  const data = await createUserDb(user);
  return data;
}





async function updateUser(_id, user, picture, pdf) {
  const fileName = saveFile(picture);
  const fileName1 = saveFile(pdf);
  const data = await updateUserDb(_id, {...user, picture: fileName, pdf: fileName1});
  return data;
}

async function deleteUser(_id) {
  const data = await deleteUserDb(_id);
  return data;
}



module.exports = {
  createUser,
  geteAllUser,
  updateUser,
  deleteUser,
  getUserById
};