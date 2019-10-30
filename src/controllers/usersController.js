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


