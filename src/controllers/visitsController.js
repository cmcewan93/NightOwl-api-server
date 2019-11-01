const db = require("../db");

// User: Get Reviews
const getVisits = function() {
  let queryString = `
  SELECT *
  FROM visits
  `;

  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};
exports.getVisits = getVisits;