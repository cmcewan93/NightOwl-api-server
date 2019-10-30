SELECT venues.id, count(users.gender) AS totalFemales
FROM venues
  JOIN visits ON venues.id = venue_id
  JOIN users ON users.id = user_id
WHERE users.gender = 'Male'
GROUP BY venues.id;