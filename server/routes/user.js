const express = require('express')
var User = require("../database/models").User;
var passport = require("passport");
const router = express.Router()
const multer = require('multer');
const path = require('path');
const sharp = require('sharp');
const uuidv4 = require('uuid/v4');
const fs = require('fs');

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,  // 4 MB maximum
  }
});
const uploadRoot = path.resolve(__dirname, "../../client/public/upload");

router.post('/', upload.single('photo'), (req, res) => {
    console.log('user signup');
    const { email, username, password} = req.body
    //Add validation
    User.findOne({ where: {email: email} }).then(user => {
        if(user) {
            res.json({
                error: `Looks like this email already has an account: ${email}`
            });
        } else if (!req.file) {
          res.json({
            error: `You forgot to provide a profile image!`
          });
        }
        else {
          console.log("creating user...");
          const newUser = User.build({
            email: email,
            username: username,
            password: User.generateHash(password)
          });
            sharp(req.file.buffer)
              .resize(100, 100)
              .png()
              .toBuffer()
              .then(data => {
              if (process.env.DB_SHOULD_STORE_IMAGES) {
                console.log("Saving image in DB...");
                newUser.profileImageData = data;
                newUser.save().then(savedUser => {
                  res.json(savedUser);
                });
                } else {
                console.log("Saving image in filesystem...");
                const fileName = `${uuidv4()}.png`;
                const filePath = path.resolve(`${uploadRoot}/${fileName}`);
                fs.writeFile(filePath, data, function(err) {
                  newUser.profileImage = fileName;
                  newUser.save().then(savedUser => {
                    res.json(savedUser)
                  });
                });
              }
              })
              .catch(error => {
                // do something with error
              });
          }
        });
    });

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
        res.json(req.user.get());
    }
)

router.get('/:id/photo', (req, res, next) => {
  User.findByPk(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send(`No user with id ${req.params.id}`);
      }
      if (user.profileImageData) {
        res.set('Content-Type', 'image/png');
        return res.send(user.profileImageData);
      }
      if (user.profileImage) {
        // Send the uploaded file
        return res.sendFile(path.resolve(uploadRoot, user.profileImage), function(err) {
          if (err) {
            // Something went wrong sending the uploaded file, so fallback to sending the anonymous image
            res.redirect("/images/anonymous_avatar.png");
          }
        });
      }
      // Fallback to sending anonymous image
      return res.redirect("/images/anonymous_avatar.png");
    });
});

router.get('/', (req, res, next) => {
    console.log("===user!====")
    if (req.user){
      console.log(req.user.get())
      res.json(req.user.get())
    } else {
        res.json({})
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
