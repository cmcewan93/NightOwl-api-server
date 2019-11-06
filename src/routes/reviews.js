const router = require("express").Router();
const {
  getReviews,
  getReviewsByVenueId,
  addReview
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

router.post("/", (req, res) => {
  //console.log("@#$@$@#$@#", req.body);
  let review = req.body;
  addReview(review)
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      console.error(null, err.stack);
    });
});
// module.exports = router;
// router.post("/upload", (req, res) => {

// });
module.exports = router;
