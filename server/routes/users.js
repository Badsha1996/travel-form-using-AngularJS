const router = require("express").Router();
const User = require("../models/User");

// post method for travel form 
router.post("/post", async (req, res) =>{
    const newUser =  new User({
        firstName : req.body.firstName,
        middleName : req.body.middleName,
        lastName : req.body.lastName,
        country : req.body.country,
        email : req.body.email
    });
    try{
        const user = await newUser.save();
        res.status(201).json(user)
    }catch(err){
        // res.send(err.status);
        res.send()
    }
    
})

module.exports = router;