const express = require('express')

const router = express.Router();

// @route     GET api/contacts
// @desc      get user contacts
// @access    Public
router.get(('/'),(req , res)=>{
    res.send('get user contacts')
})

// @route     POST api/contacts
// @desc      add new user contacts
// @access    Public
router.post(('/'),(req , res)=>{
    res.send('add new user contacts')
})

// @route     PUT api/contacts/:id
// @desc      update user contact
// @access    Public
router.put(('/:id'),(req , res)=>{
    res.send('update user contact')
})

// @route     DELETE api/contacts/:id
// @desc      DELETE user contact
// @access    Public
router.delete(('/:id'),(req , res)=>{
    res.send('DELETE user contact')
})

module.exports = router;