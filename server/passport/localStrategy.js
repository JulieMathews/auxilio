const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy
var db = require("../database/models");

//Register for an user
  const strategySignup = new LocalStrategy({

        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, done) {
        process.nextTick(function() {
          db.User.findOne({
            where: {
              email: email
            }
          }).then(function(user, err) {
            if (err) {
              console.log("err", err);
              return done(err);
            }
            if (user) {
              console.log("email " + email + " is already taken.");
              return done(null, false, {
                message: "Sorry, that email is taken."
              });
            } else {
              db.User.create({
                username: req.body.username,
                email: req.body.email,
                password: db.User.generateHash(password)
              })
                .then(function(dbUser) {
                  return done(null, dbUser);
                })
                .catch(function(err) {
                  console.log(err);
                  return done(err);
                });
            }
          });
        });
      }
    )


  //log in to your account
  const strategy = new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password"
      },
      function(email, password, done) {
        console.log("Attempting login");
        db.User.findOne({
          where: {
            email: email
          }
        })
          .then(function(user) {
            if (!user) {
              return done(null, false, {
                message: "It looks like that email doesn't exist!"
              });
            } else if (!user.validPassword(password)) {
              console.log("Wrong password!");
              return done(null, false, { message: "Oops! Wrong password." });
            }
            console.log("All good");
            return done(null, user);
          })
          .catch(function(err) {
            return done(err);
          });
      }
    );

module.exports = strategy
