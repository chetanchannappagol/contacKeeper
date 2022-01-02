const bcrypt = require("bcryptjs/dist/bcrypt");
const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../modals/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleWare/auth");
const router = express.Router();

// @route     GET api/auth
// @desc      get logged user
// @access    private
router.get("/", auth, async (req, res) => {
  // res.send('Logged users list')
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json({ user });
  } catch (error) {
    res.status(500).send("server error");
  }
});

// @route     POST api/auth
// @desc      logged in user and get token
// @access    public
router.post(
  "/",
  [
    check("email", "please enter valid email").isEmail(),
    check(
      "password",
      "please enter valid password or must have 6 or more than 6"
    ).exists(),
  ],
  async (req, res) => {
    const err = validationResult(req);

    if (!err.isEmpty()) {
      res.status(400).json({ error: err.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Invalid username or Password" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Password" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get("jwtToken"),
        { expiresIn: 10000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token: token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("server error");
    }
  }
);
module.exports = router;
