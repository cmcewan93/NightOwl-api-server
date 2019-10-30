const router = require("express").Router();
const bcrypt = require("bcrypt");
const initalizePassport = require("../passport-config");
const {
  userLogin,
  userRegister
} = require("../controllers/authenticationController");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  userLogin(email, password)
    .then(id => {
      if (!id) {
        res.send({ code: 401, error: "Email and password do not match" });
        return;
      } else {
        req.session.userId = id.id;
        // res.redirect("/");
        res.send({ code: 201, message: "LOGGED IN" });
      }
    })
    .catch(err => console.error(null, err.stack));
});

router.post("/register", async (req, res) => {
  user = req.body;

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    console.log(hashedPassword);
    user.password = hashedPassword;
    console.log(user.password);
  } catch {
    console.error("there was an error");
  }

  userRegister(user)
    .then(id => {
      if (!id) {
        res.send({ error: "Email already exists!" });
        return;
      } else {
        req.session.userId = id[0].id;
        res.send({ code: 201, message: "Registered" });
      }
    })
    .catch(err => {
      //alert("EMAIL ALREADY EXISTS");
      console.error(null, err.stack);
    });
});

router.post("/logout", (req, res) => {
  req.session = null;
  res.json({ message: "user has logged out" });
});

module.exports = router;
