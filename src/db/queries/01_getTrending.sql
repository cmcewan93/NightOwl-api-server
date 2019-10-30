SELECT COUNT(user_id) AS users, venue_id
FROM visits
GROUP BY venue_id
ORDER BY venue_id; 