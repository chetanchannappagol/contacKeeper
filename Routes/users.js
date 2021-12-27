const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../modals/User");
const jwt = require('jsonwebtoken');
const config = require('config')

// @route     POST api/users
// @desc      Register a new user
// @access    Public
router.post(
  "/",
  [
    check("name", "Please add name").not().isEmpty(),
    check("email", "please enter valid email").isEmail(),
    check("password", "please enter password with min 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json({ errors: err.array() });
    }
    const {name , email, password }= req.body;

    console.log(await User.find());
    try {
        let user = await User.findOne({email:email})
        if(user){
           return res.status(400).json({msg:'user already exists'})
        }

        user = new User({
            name,
            email,
            password
        })

        const salt =  await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password,salt)

        await user.save()

        const payload = {
            user:{
                id:user.id
            }
        }
        jwt.sign(payload,config.get('jwtToken'),{expiresIn:10000},(err,token)=>{
            if (err) throw err
            res.json({token:token})
            config.get('jwtToken') = token;
        })
        console.log(config.get('jwtToken'));
        // res.send('user saved')
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error')
    }
}
);

module.exports = router;
