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
LIMIT 1;
