const db = require("../db");

// User: Get Reviews
const getReviews = function() {
  let queryString = `
  SELECT *
  FROM reviews
  `;

  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};
exports.getReviews = getReviews;
