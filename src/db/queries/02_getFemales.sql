SELECT venues.id, 
count(users.gender) AS totalFemales
FROM venues
  JOIN visits ON venues.id = venue_id
  JOIN users ON users.id = user_id
HAVING
COUNT(CASE WHEN users.gender='MALE')
GROUP BY venues.id;


