const express = require('express')

const router = express.Router();

// @route     GET api/auth
// @desc      get logged user
// @access    private
router.get(('/'),(req , res)=>{
    res.send('Logged users list')
})

// @route     POST api/auth
// @desc      logged in user and get token
// @access    public
router.post(('/'),(req , res)=>{
    res.send('Logged in user and get token')
})
module.exports = router;