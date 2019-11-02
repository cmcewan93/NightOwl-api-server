const db = require("../db");

// get Females

const getFemales = () => {
  let queryString = `
  SELECT venues.id AS venue_id, name, latitude, longitude
  FROM venues
  JOIN visits ON venues.id = venue_id
  JOIN users ON users.id = user_id
  GROUP BY venues.id, name, latitude, longitude
  HAVING
  COUNT(CASE WHEN users.gender='Female' THEN 1 ELSE NULL END) > COUNT(CASE WHEN users.gender='Male' THEN 1 ELSE NULL END);
  `;
  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};

exports.getFemales = getFemales;

// get males

const getMales = () => {
  let queryString = `
  SELECT venues.id AS venue_id, name, latitude, longitude
  FROM venues
  JOIN visits ON venues.id = venue_id
  JOIN users ON users.id = user_id
  GROUP BY venues.id, name, latitude, longitude
  HAVING
  COUNT(CASE WHEN users.gender='Female' THEN 1 ELSE NULL END) < COUNT(CASE WHEN users.gender='Male' THEN 1 ELSE NULL END);
  `;
  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};

exports.getMales = getMales;

// get Trending

const getTrending = () => {
  let queryString = `
  SELECT COUNT(visits.user_id) AS users, name, latitude, longitude, venues.id AS venue_id
  FROM venues
  JOIN visits ON venues.id = venue_id
  GROUP BY venues.name, venues.latitude, venues.longitude, venues.id
  ORDER BY users DESC
  LIMIT 5
  `;
  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};

exports.getTrending = getTrending;

const setSearch = () => {
  let queryString = `
  SELECT name
  `;
}