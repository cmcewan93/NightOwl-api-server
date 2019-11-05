const router = require("express").Router();
const {
  getReviews,
  getReviewsByVenueId
} = require("../controllers/reviewsController");

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

router.post("/upload", (req, res) => {
  console.log(req.body, "image");
  // call to save to DB

  res.send(200);
});
module.exports = router;
