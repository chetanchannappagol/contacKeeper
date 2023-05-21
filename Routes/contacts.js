const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleWare/auth");
const Contact = require("../models/Contact");
const User = require("../models/User");

// @route     GET api/contacts
// @desc      get user contacts
// @access    Public
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id });
    res.json(contacts);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

// @route     POST api/contacts
// @desc      add new user contacts
// @access    Public
router.post(
  "/",
  [
    auth,
    [
      check("name", "name is mandatory").not().isEmpty(),
      // check('email','email is madatory').isEmail(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("server error");
    }
  }
);

// @route     PUT api/contacts/:id
// @desc      update user contact
// @access    Publics
router.put("/:id", auth, async (req, res) => {
  // res.send('update user contact')
  const { name, email, phone, type } = req.body;
  let contactField = {};
  if (name) {
    contactField.name = name;
  }
  if (email) {
    contactField.email = email;
  }
  if (phone) {
    contactField.phone = phone;
  }
  if (type) {
    contactField.type = type;
  }

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ msg: "contact not found" });
    }

    console.log(contact.user.toString(), req.user.id);
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactField },
      { new: true }
    );

    res.json(contact);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

// @route     DELETE api/contacts/:id
// @desc      DELETE user contact
// @access    Public
router.delete("/:id", auth, async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id);
    
        if (!contact) {
          return res.status(404).json({ msg: "contact not found" });
        }
    
        if (contact.user.toString() !== req.user.id) {
          return res.status(401).json({ msg: "Not Authorized" });
        }
    
        await Contact.findByIdAndRemove(req.params.id)
    
        res.json({msg:'Contact got Removed successfully'});
      } catch (error) {
        console.log(error.message);
        res.status(500).send("server error");
      }
});

module.exports = router;
