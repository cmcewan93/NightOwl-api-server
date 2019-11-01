const router = require("express").Router();
const { getUser, getUsers } = require("../controllers/usersController");

router.get("/:id", (req, res) => {
  getUser(req.params.id).then(data => {
    res.json(data);
    return data[0];
  });
});

router.get("/", (req, res) => {
  getUsers().then(data => {
    res.json(data);
    return data[0];
  });
});
//router.get("/", req);

module.exports = router;
