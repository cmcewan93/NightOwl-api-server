SELECT venues.id, visit_id, entry_fee
FROM reviews JOIN visits ON reviews.id = visit_id
  JOIN venues ON venues.id  = venue_id
GROUP BY venues.id,entry_fee,visit_id;