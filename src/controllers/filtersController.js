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
  COUNT(CASE WHEN users.gender='Female' THEN 1 ELSE NULL END) < COUNT(CASE WHEN users.gender='Male' THEN 1 ELSE NULL END);
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
  COUNT(CASE WHEN users.gender='Female' THEN 1 ELSE NULL END) > COUNT(CASE WHEN users.gender='Male' THEN 1 ELSE NULL END);
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

const getShortestLine = () => {
  let queryString = `
  SELECT DISTINCT id as venue_id, latitude, longitude, name
FROM (
  SELECT venues.id, reviews.line_size, venues.latitude, venues.longitude, venues.name
  FROM venues
    INNER JOIN visits
    ON venues.id = visits.venue_id
    INNER JOIN reviews
    ON visits.id = reviews.visit_id
  ORDER BY reviews.line_size ASC
) a
LIMIT 5;
  `;
  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};

exports.getShortestLine = getShortestLine;

const getCheapest = () => {
  let queryString = `
  SELECT DISTINCT id as venue_id, latitude, longitude, name
FROM (
  SELECT venues.id, reviews.entry_fee, venues.latitude, venues.longitude, venues.name
  FROM venues
    INNER JOIN visits
    ON venues.id = visits.venue_id
    INNER JOIN reviews
    ON visits.id = reviews.visit_id
  ORDER BY reviews.entry_fee ASC
) a
LIMIT 3;
  `;
  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};

exports.getCheapest = getCheapest;

const getPriciest = () => {
  let queryString = `
  SELECT DISTINCT id as venue_id, latitude, longitude, name
  FROM (
    SELECT venues.id, reviews.entry_fee, venues.latitude, venues.longitude, venues.name
    FROM venues
      INNER JOIN visits
      ON venues.id = visits.venue_id
      INNER JOIN reviews
      ON visits.id = reviews.visit_id
    ORDER BY reviews.entry_fee DESC
  ) a
  LIMIT 2;
  `;
  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};

exports.getPriciest = getPriciest;

const getOverTwentyFive = () => {
  let queryString = `
  SELECT venues.id AS venue_id, name, latitude, longitude
  FROM venues
    JOIN visits ON venues.id = venue_id
    JOIN users ON users.id = user_id
  GROUP BY venues.id, name, latitude, longitude, users.age
  HAVING
    COUNT(CASE WHEN users.age >= '25' THEN 1 ELSE NULL END) > COUNT(CASE WHEN users.age <= '25' THEN 1 ELSE NULL END);
  `;
  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};

exports.getOverTwentyFive = getOverTwentyFive;

const setSearch = name => {
  let queryString = `
  SELECT id AS venue_id, name, latitude, longitude 
  FROM venues 
  WHERE name LIKE '%${name}%'
  `;
  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};

exports.setSearch = setSearch;
