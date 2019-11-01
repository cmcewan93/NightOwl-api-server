const router = require("express").Router();
const { getReviews } = require("../controllers/reviewsController");

router.get("/", (req, res) => {
  getReviews().then(data => {
    res.json(data);
    return data;
  });
});

module.exports = router;