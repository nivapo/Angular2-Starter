var express = require('express');
var app = express();
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
// used to serialize the user for the session
passport.serializeUser(function(user, done) {
  console.log(user.id);
  done(null, user);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  console.log("In deserialize")
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

var port = 9000;

app.get('/', function(req, res) {
  res.send(req.user || "No Data");
});
//Register the login service
var login = require('./controller/login')(app, passport);

app.listen(port);
console.log("Server started on port :", port)
console.log("URL  http://localhost:" + port)
