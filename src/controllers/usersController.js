const db = require("../db");

// User: Get user based on cookie id
const getUser = function(cookieId) {
  if (!cookieId) {
    return undefined;
  }

  let queryString = `
  SELECT *
  FROM users
  `;
  queryString += `WHERE id = '${cookieId}'`;
  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};
exports.getUser = getUser;

const getUserByEmail = email => {
  let queryString = `
  SELECT * from users where email = '${email}';
  `;
  return db
    .query(queryString)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error(null, err.stack));
};
exports.getUserByEmail = getUserByEmail;

const getUsers = () => {
  let queryString = `
  SELECT * from users;
  `;
  return db
    .query(queryString)
    .then(res => {
      return res.rows;
    })
    .catch(err => console.error(null, err.stack));
};
exports.getUsers = getUsers;
