const express = require('express');
const User = require('../Models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchUser = require('../Middleware/fetchuser');


const JWT_SECRET = process.env.JWT_SECRET;

// Endpoint for creating user
router.post('/createuser' , 
[ 
    // Use express validation to check the valid syntax of email , password and username
    body('username' , 'Enter valid Username').isLength({min : 2}),
    body('email' , 'Enter valid Email').isEmail(),
    body('password' , "Enter valid password").isLength({min : 5})

], async(req ,res) =>{

    let success = false;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    
    let user = await User.findOne({email : req.body.email});
    if(user){
        success = false;
        return res.status(400).json({success , error : "Sorry Email ID already taken"})
    }

    try {

        const salt = await bcrypt.genSalt(10);
        
        const securepassword = bcrypt.hashSync(req.body.password, salt);
        user = await User.create({
            username : req.body.username,
            email : req.body.email , 
            password : securepassword
        })

        const data = {
            user : {
                id : user.id
            }
        }
        var authToken = jwt.sign(data, JWT_SECRET);
        success = true;

        res.json({success , authToken});
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})

//Endpoint for creating login creadentials
router.post('/login' , 
[                               
    body('email' , 'Enter valid Email').isEmail(), //validation checks for email 
    body('password' , "password cannot be blank").exists() //validation checks for password 

], async(req ,res) =>{
    let success = false;

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const {email , password} = req.body; // used-destructuring

    try {

    let user = await User.findOne({email}); // find and check the email that user have entered
    if(!user){
        success = false;
        return res.status(400).json({success, error : "Please check login credentials"})
    }

    const passwordCompare = await bcrypt.compare(password , user.password); // compare the password user has entered
    if(!passwordCompare){
        success = false;
        return res.status(400).json({success , error : "Please check login credentials"})
    }

        const data = {
            user : {
                id : user.id
            }
        }
        var authToken = jwt.sign(data, JWT_SECRET); // send the token to be authorized
        success = true
        res.json({success , authToken}); // send auth token to user that will be stored as cookies
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})


//route to get user from an jwt token
router.post('/getuser' , fetchUser , async(req ,res) =>{ // fetchUser acts as a middlwares 
    try {
        const userID = req.user.id
        const user = await User.findById(userID).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})

module.exports = router;
