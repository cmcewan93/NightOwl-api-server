const db = require("../db");

// Get all Visits
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

const getVisitsByVenueId = function(venue_id) {
  let queryString = `
  SELECT visits.id AS visit_id, users.gender, users.age, created_at, venues.name AS venue_name
  FROM visits
    JOIN users ON users.id = user_id
    JOIN venues ON venues.id = venue_id
  WHERE venues.id = ${venue_id}
  GROUP BY users.gender, users.age, created_at, venues.id, visits.id
  ORDER BY visit_id
  `
  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
}

exports.getVisitsByVenueId = getVisitsByVenueId;