const router = require("express").Router();

const { getVenues } = require("../controllers/venuesController");

router.get("/", (req, res) => {
  getVenues().then(data => {
    res.json(data);
    return data;
  });
});

module.exports = router;
