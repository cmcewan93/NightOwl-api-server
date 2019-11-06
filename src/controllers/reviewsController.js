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

const addReview = function(review) {
  return db
    .query(
      `
  INSERT INTO reviews
  (
  visit_id,
  line_size,
  entry_fee,
  dress_code,
  img
  )
  VALUES
  ($1, $2, $3, $4, $5) RETURNING *
  `,
      [
        review.visit_id,
        review.line_size,
        review.entry_fee,
        review.dress_code,
        review.img
      ]
    )
    .then(res => res.rows)
    .catch(err => console.error(null, err.stack));
};

exports.addReview = addReview;
