SELECT visits.id AS visit_id, line_size, entry_fee, dress_code
FROM reviews
  JOIN visits ON visits.id = reviews.visit_id
WHERE visits.venue_id = 1
GROUP BY visits.id, line_size, entry_fee, dress_code