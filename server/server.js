require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const session = require('express-session');
var passport = require('./passport');
var flash = require("connect-flash");
const Sequelize = require('sequelize')
const db = require('./database/models');
const user = require('./routes/user')
const article = require('./routes/articles')
const app = express();
var port = process.env.PORT || 8080;


//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(express.static("client"));
//app.set("views", "client/views");

// session support is required for passportjs
app.use(
    session({
    key: "user_sid",
    secret: "giasghsdjgoisdgsdhgkwhe53lkd",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 6000000
    }
})
);

app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions
app.use(flash());

//Routes 
app.use("/user", user);
app.use("/article", article)

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var syncOptions = { force: false };

//if running a test, set syncOptions. for to true
//clearing the testdb
if (process.env.NODE_ENV === "test"){
    syncOptions.force=true;
}





//Starting the server, syncing our models
db.sequelize.sync(syncOptions).then(function() {
    app.listen(port, function() { 
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        port,
        port
        );
    });
});



