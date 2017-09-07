
const sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name, age) values (0, ?, ?)'
  },
  orders: {
    add: 'insert into'
  }
};
module.exports = sqlMap;