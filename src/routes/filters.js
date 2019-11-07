const router = require("express").Router();
const {
  getFemales,
  getTrending,
  getMales,
  setSearch,
  getShortestLine,
  getCheapest,
  getPriciest
} = require("../controllers/filtersController");

router.get("/morefemales", (req, res) => {
  getFemales().then(data => {
    res.json(data);
    return data;
  });
});

router.get("/moremales", (req, res) => {
  getMales().then(data => {
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

router.get("/shortest", (req, res) => {
  getShortestLine().then(data => {
    res.json(data);
    return data;
  });
});

router.get("/cheapest", (req, res) => {
  getCheapest().then(data => {
    res.json(data);
    return data;
  });
});

router.get("/priciest", (req, res) => {
  getPriciest().then(data => {
    console.log("DATA", data);
    res.json(data);
    return data;
  });
});

router.get("/search/:name", (req, res) => {
  setSearch(req.params.name).then(data => {
    res.json(data);
    return data;
  });
});
module.exports = router;
