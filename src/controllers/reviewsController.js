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

const getReviewsByVenueId = function(venue_id) {
  let queryString = `
  SELECT visits.id AS visit_id, line_size, entry_fee, dress_code
  FROM reviews
    JOIN visits ON visits.id = reviews.visit_id
  WHERE visits.venue_id = ${venue_id}
  GROUP BY visits.id, line_size, entry_fee, dress_code
 `;
  return db
    .query(queryString)
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};
exports.getReviewsByVenueId = getReviewsByVenueId;
