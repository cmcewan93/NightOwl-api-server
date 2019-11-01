const router = require("express").Router();
const { getFemales, getTrending } = require("../controllers/filtersController");

router.get("/morefemales", (req, res) => {
  getFemales().then(data => {
    res.json(data);
    return data;
  });
});

router.get("/trending", (req, res) => {
  getTrending().then(data => {
    res.json(data);
    return data;
  });
});
module.exports = router;