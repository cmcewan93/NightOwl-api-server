const db = require("../db");

// get Females

const getFemales = () => {
  let queryString = `
  SELECT venues.id, count(users.gender) AS totalFemales
  FROM venues
    JOIN visits ON venues.id = venue_id
    JOIN users ON users.id = user_id
  WHERE users.gender = 'Female'
  GROUP BY venues.id; 
  `;
  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};

exports.getFemales = getFemales;
