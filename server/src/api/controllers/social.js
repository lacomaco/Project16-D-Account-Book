const socialService = require('@services/social');

const searchUser = async (ctx) => {
  const { user_email: email } = ctx.request.query;
  const user = await socialService.findUserByEmail(email);
  ctx.body = user;
};

const addUser = async (ctx) => {
  const { userId, accountbookId } = ctx.request.body;
  const addedUser = await socialService.addUser(accountbookId, userId);
  ctx.body = addedUser;
};

const findUsers = async (ctx) => {
  const { accountbook_id: accountbookId } = ctx.request.query;
  const users = await socialService.findUsers(accountbookId);
  ctx.body = users;
};

const deleteUser = async (ctx) => {
  const { accountbook_id: accountbookId, user_id: userId } = ctx.request.query;
  await socialService.deleteUser(accountbookId, userId);
  ctx.status = 204;
};

module.exports = {
  searchUser,
  addUser,
  findUsers,
  deleteUser,
};