const router = require("express").Router();

const { getVisits } = require("../controllers/visitsController");

router.get("/", (req, res) => {
  getVisits().then(data => {
    res.json(data);
    return data;
  });
});

module.exports = router;
