const router = require("express").Router();

const { getVisits, getVisitsByVenueId } = require("../controllers/visitsController");

router.get("/", (req, res) => {
  getVisits().then(data => {
    res.json(data);
    return data;
  });
});

router.get("/:id", (req, res) => {
  getVisitsByVenueId(req.params.id).then(data => {
    res.json(data);
    return data;
  });
});
module.exports = router;
