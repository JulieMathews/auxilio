const express = require('express')
var User = require("../database/models").User;
var passport = require("passport");
const router = express.Router()





    router.post('/', (req, res) => {
        console.log('user signup');


    const { email, username, password} = req.body
    //Add validation
    User.findOne({ where: {email: email} }).then(user => {
        if(user) {
            res.json({
                error: `Looks like this email already has an account: ${email}`
            });
        } else {
            const newUser = new User({
                email: email,
                username: username,
                password:  User.generateHash(password)
            });
            newUser.save().then(savedUser => {
                res.json(savedUser)
            });
        }
    })
})


router.post(
    '/login',
    function(req, res, next) {
        console.log("routes/user.js, login, req.body: ");
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log("logged in", req.user);
        var userInfo = {
            email:req.user.email,
            username:req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log("===user!====")
    console.log(req.user)
    if (req.user){
        res.json({ user: req.user})
    }else{
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if(req.user) {
        req.logout()
        res.send({ msg: "logging out"})
    }else {
        res.send({msg: "no user to log out" })
    }
})

module.exports = router

  