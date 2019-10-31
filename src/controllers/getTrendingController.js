const db = require("../db");

// get Trending

const getTrending = () => {
  let queryString = `
  SELECT COUNT(user_id) AS users, venue_id
FROM visits
GROUP BY venue_id
ORDER BY venue_id; 
  `;
  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};

exports.getTrending = getTrending;
