const express = require('express')
var User= require("../database/models/user");
var passport = require("passport");
const router = express.Router()





    router.post('/', (req, res) => {
        console.log('user signup');


    const { email, username, password} = req.body
    //Add validation
    User.findOne({email: email}, (err, email) => {
        if(err) {
            console.log("User.js post err: ", err)
        }else if (email) {
            res.json({
                error: `Looks like this email already has an account: ${email}`
            })
        }
        else {
            const newUser = new User({
                email: email,
                username: username,
                password: password
            })
            newUser.save((err, savedUser) =>{
                if (err)return res.json(err)
                res.json(savedUser)
            })
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
            email:req.user.email
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

router.post('./logout', (req, res) => {
    if(req.user) {
        req.logout()
        res.send({ msg: "logging out"})
    }else {
        res.send({msg: "no user to log out" })
    }
})

module.exports = router

   /* module.exports = function (app){


   app.get("/register", function (req, res){
        var context = {errors: req.flash('error') };
        console.log("Context: ", context);
        res.render("register", context);
    });

    app.get("/login", function (req, res){
        var context = {errors: req.flash('error') };
        console.log("Context: ", context);
        res.render("login", context);
    });

    //logout of user account

    app.get("/logout", function(req, res){
        req.session.destroy(function(err){
            req.logout();
            res.clearCookie("user_sid");
            res.clearCookie("username");
            res.clearCookie("user_id");
            res.redirect('/');
        })
    });




    //process the signup form

    app.post('/register', function(req, res, next){
        passport.authorize("local-signup", function(err, user, info){
            console.log("info", info);
            if(err){
                console.log("passport error", err);
                return next(err);//will generate a 500 error
            }
            //Generate an error message on the registration page when a user tries to use a dupiciate email address
            if (!user) {
                console.log("user error", user);
                req.flash('error', info.message);
                return res.redirect("/register");
              }

// ***********************************************************************
          // "Note that when using a custom callback, it becomes the application's
          // responsibility to establish a session (by calling req.login()) and send
          // a response."
          // Source: http://passportjs.org/docs
          // ***********************************************************************
    
          req.login(user, loginErr => {
            if (loginErr) {
              console.log("loginerr", loginerr)
              return next(loginErr);
            }
            //var userId = user.dataValues.id;
            console.log('redirecting....');
            
            res.cookie('username', user.username);
            res.cookie('user_id', user.uuid );
            return res.redirect("/");
          });      
        })(req, res, next);
      });
    
      app.post('/login', function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info) {
          console.log("\n\n\n########userrrr", user)
          console.log("Info: ", info);
          if (err) {
            console.log("passport err", err);
            return next(err); // will generate a 500 error
          }
          // Generate an error message when user logs in with the wrong email address or password
    
          if (!user) {
            req.flash('error', info.message);
            return res.redirect("/login");
          }
          
          // ***********************************************************************
          // "Note that when using a custom callback, it becomes the application's
          // responsibility to establish a session (by calling req.login()) and send
          // a response."
          // Source: http://passportjs.org/docs
          // ***********************************************************************
    
          req.login(user, loginErr => {
            if (loginErr) {
              console.log("loginerr", loginErr)
              return next(loginErr);
            }
            //var userId = user.dataValues.id;
            console.log('redirecting....')
            res.cookie('username', user.username);
            res.cookie('user_id', user.uuid );
    
            // if (!req.session.userid) {
            //   var redirectTo = req.session.redirectTo ? req.session.redirectTo : '/';
            //   delete req.session.redirectTo;
            //   // is authenticated ?
            //   res.redirect(redirectTo);
            // } else {
            //     next();
            // }
            // console.log("=====================signup: ",req.headers.referer);
            return res.redirect("/main.handlebars");
            // return res.redirect("/account");
            
          });      
        })(req, res, next);
      });
    
    }
*/




