const router = require("express").Router();
const { getReviews, getReviewsByVenueId } = require("../controllers/reviewsController");

router.get("/", (req, res) => {
  getReviews().then(data => {
    res.json(data);
    return data;
  });
});

router.get("/:id", (req, res) => {
  getReviewsByVenueId(req.params.id).then(data => {
    res.json(data);
    return data;
  });
});
module.exports = router;