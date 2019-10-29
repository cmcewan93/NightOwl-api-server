const router = require("express").Router();
const {
  userLogin,
  userRegister,
  getUser
} = require("../controllers/usersController");

router.post("login", (req, res) => {
  const { email, password } = req.body;
  userLogin(email, password)
    .then(id => {
      if (!id) {
        res.send({ code: 401, error: "Email and password do not match" });
        return;
      } else {
        req.session.userId = id.id;
        res.redirect("/");
      }
    })
    .catch(err => console.error(null, err.stack));
});

router.get(":1", (req, res) => {
  getUser(1).then(data => {
    res.json(data);
  });
});

module.exports = router;
