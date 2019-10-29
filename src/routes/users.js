const router = require("express").Router();
const pool = new pool();

//Login: Checks the database for the user's email and password to Login

const userLogin = function(email, password) {
  return pool.query(`
  SELECT id
  FROM users
  WHERE email = $1 AND password = $2
  `, [email, password])
    .then(res => res.rows[0])
    .catch(err => console.error(null, err.stack));
};

exports.userLogin = userLogin;

// Register: Adds a user to the database

const userRegister = function(user) {
  return pool.query(`
  INSERT INTO users
  (
  name,
  email,
  password
  )
  VALUES
  ($1, $2, $3) RETURNING *
  `, [user.name, user.email, user.password])
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

  return pool.query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};