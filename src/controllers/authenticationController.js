const db = require("../db");
const bcrypt = require("bcrypt");
const { getUserByEmail } = require("../controllers/usersController");

//Login: Checks the database for the user's email and password to Login
const userLogin = function(email, password) {
  return getUserByEmail(email)
    .then(user => {
      hashedPassword = user[0].password;
      if (bcrypt.compareSync(password, hashedPassword)) {
        return user[0];
      } else {
        console.error("invalid password");
      }
    })
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
