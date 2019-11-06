SELECT id, entry_fee
FROM (
  SELECT venues.id, reviews.entry_fee
  FROM venues
    INNER JOIN visits
    ON venues.id = visits.venue_id
    INNER JOIN reviews
    ON visits.id = reviews.visit_id
  ORDER BY reviews.entry_fee ASC
) a
LIMIT 5;
