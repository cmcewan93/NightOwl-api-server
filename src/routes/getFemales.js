const router = require("express").Router();

const { getFemales } = require("../controllers/getFemalesController");

router.get("/", (req, res) => {
  getFemales().then(data => {
    res.json(data);
    return data;
  });
});

module.exports = router;
