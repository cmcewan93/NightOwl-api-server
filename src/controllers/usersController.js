const db = require("../db");

//Login: Checks the database for the user's email and password to Login

const userLogin = function(email, password) {
  return db
    .query(
      `
  SELECT id
  FROM users
  WHERE email = $1 AND password = $2
  `,
      [email, password]
    )
    .then(res => res.rows[0])
    .catch(err => console.error(null, err.stack));
};

exports.userLogin = userLogin;

// Register: Adds a user to the database

const userRegister = function(user) {
  return db
    .query(
      `
  INSERT INTO users
  (
  first_name,
  last_name,
  email,
  password,
  age,
  gender
  )
  VALUES
  ($1, $2, $3, $4, $5, $6) RETURNING *
  `,
      [
        user.first_name,
        user.last_name,
        user.email,
        user.password,
        user.age,
        user.gender
      ]
    )
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};

exports.userRegister = userRegister;

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
