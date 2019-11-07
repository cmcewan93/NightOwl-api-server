
SELECT venues.id AS venue_id, name, latitude, longitude
FROM venues
  JOIN visits ON venues.id = venue_id
  JOIN users ON users.id = user_id
GROUP BY venues.id, name, latitude, longitude, users.age
HAVING
  COUNT(CASE WHEN users.age >= '25' THEN 1 ELSE NULL END) > COUNT(CASE WHEN users.age <= '25' THEN 1 ELSE NULL END);