SELECT venues.id, visit_id, line_size
FROM reviews JOIN visits ON reviews.id = visit_id
  JOIN venues ON venues.id  = venue_id
GROUP BY venues.id,line_size,visit_id;

