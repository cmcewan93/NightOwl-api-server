const db = require("../db");

//Get venues
const getVenues = function() {
  let queryString = `
  SELECT *
  FROM venues
  `;
  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};

exports.getVenues = getVenues;
