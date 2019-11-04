SELECT visits.id AS visit_id, users.gender, users.age, created_at, venues.name AS venue_name
FROM visits
  JOIN users ON users.id = user_id
  JOIN venues ON venues.id = venue_id
WHERE venues.id = 10
GROUP BY users.gender, users.age, created_at, venues.id, visits.id
ORDER BY visit_id
