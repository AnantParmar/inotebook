const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a user using POST "/api/auth/". Doesn't require Auth 

router.post('/', (req,res)=>{
    res.send(req.body);
    const user = User(req.body);
    user.save();
    console.log(req.body)
})

module.exports = router;