const express = require('express');
const User = require('./userSchema');
const router = express.Router();
const { body, validationResult } = require('express-validator');



// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    // console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Check whether the user with this email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }
   
    // Create a new user
    user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    });

    res.status(200).json({
        message:"User is logged In Successfully",
        data:user



    })

})







router.get('/', async (req, res) => {
    try {
        const userdata = await User.find();
        res.status(200).send({
            message: "Data is retrieved successfully",
            data: userdata
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});







    module.exports = router;
