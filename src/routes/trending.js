const router = require("express").Router();

const { getTrending } = require("../controllers/getTrendingController");

router.get("/", (req, res) => {
  getTrending().then(data => {
    res.json(data);
    return data;
  });
});

module.exports = router;
