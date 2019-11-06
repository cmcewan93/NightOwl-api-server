SELECT id, line_size
FROM (
  SELECT venues.id, reviews.line_size
  FROM venues
    INNER JOIN visits
    ON venues.id = visits.venue_id
    INNER JOIN reviews
    ON visits.id = reviews.visit_id
  ORDER BY reviews.line_size ASC
) a
LIMIT 5;
