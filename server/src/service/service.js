const {
  createUserDb,
  geteAllUserDb,
  updateUserDb,
  deleteUserDb,
  getUserByIdDb,
  getUserByEmail,
} = require("../repository/repository");

const bcrypt = require("bcrypt");
const salt = 2;

async function geteAllUser() {
  const data = await geteAllUserDb();
  return data;
}

async function getUserById(_id) {
  const data = await getUserByIdDb(_id);
  return data;
}

async function createUser(user) {
  const found = await getUserByEmail(user.email);
  if (found.length) throw new Error("error already exists");
  const hashPwd = await bcrypt.hash(user.pwd, salt);

  const data = await createUserDb({...user, pwd: hashPwd});
  return data;
}

async function getAuth(user) {
  const found = await getUserByEmail(user.email);
  if (!found.length) throw new Error("error. email not found");

  if (await bcrypt.compare(found[0].pwd, user.pwd)) throw new Error("error. invalid pwd");
  //const data = await getAuthDb(user);
  return found;
}

async function updateUser(_id, user, picture, pdf) {
  const fileName = saveFile(picture);
  const fileName1 = saveFile(pdf);
  const data = await updateUserDb(_id, {
    ...user,
    picture: fileName,
    pdf: fileName1,
  });
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
  getUserById,
  getAuth,
};
