SELECT venues.id
FROM venues
  JOIN visits ON venues.id = venue_id
  JOIN users ON users.id = user_id
GROUP BY venues.id
HAVING
  COUNT(CASE WHEN users.gender='Female' THEN 1 ELSE NULL END) > COUNT(CASE WHEN users.gender='Male' THEN 1 ELSE NULL END)



