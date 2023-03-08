const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Anantisahandsom@boy'

// Create a user using POST "/api/auth/createUser". No Login Require  

router.post('/createUser',[
    body('email', 'Enter a Valid Email').isEmail(),
    body('name', 'Enter a Valid Name').isLength({min:3}),
    body('password').isLength({ min: 5 }),
], async (req,res)=>{
    // If there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with this email exists already
    try {
        
    let user = await User.findOne({email: req.body.email})
    console.log(user)
    if(user) { 
        return res.status(400).json({error: "Sorry a user with this email already exists"})
    }
    // Encrypt Password
    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash(req.body.password, salt);

    // Create a User
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
    })
    // Sending Authentication Token
    const data = {
        user: {
            id: user.id
        }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    // console.log(jwtData)
    res.json({authToken})
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Authenticate a user using POST "/api/auth/login". No Login Require 

router.post('/login',[
    body('email', 'Enter a Valid Email').isEmail(),
    body('password', 'Password Cannot Be Blank').exists()
], async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    console.log(email);
    try {
        let user = await User.findOne({email});
        console.log(user)
        if(!user)
        {
            return res.status(400).json({error: "Please try to login with correct credentials"});
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare) {
            return res.status(400).json({error: "Please try to login with correct credentials"});
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({authToken})

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;