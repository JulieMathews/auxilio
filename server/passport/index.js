
const passport = require('passport')
const LocalStrategy = require('./localStrategy')
var User = require("../database/models").User;




// called on login, saves the id to session 

    passport.serializeUser(function(user, done) {
        console.log('*** serializeUser called, user: ')
        console.log(user) // the whole raw user object!
        console.log('---------')
      done(null, user.uuid);
    });
  

    // user object attaches to the request as req.user

    passport.deserializeUser(function(uuid, done) {
        console.log('DeserializeUser called')
      User.findById(uuid).then(function(user) {
        if (user) {
          done(null, user.get());
        } else {
          done(user.errors, null);
        }
      });
    });
  


    //  Use Strategies 
    passport.use(LocalStrategy)
    
    module.exports = passport
    