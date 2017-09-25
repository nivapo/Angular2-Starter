var express = require('express');
var app = express();
var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {
  // jwtFromRequest: ExtractJwt.fromExtractors([function(req) {
  //   return req.headers.authorization.split(' ')[1];    //This worked
  // }]),
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'qwertyuiopasdfghjklzxcvbnm123456',
  issuer: 'localhost:9000',
  algorithms: ["HS256"],
  passReqToCallback: true,
  audience: 'localhost:9000'
}

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
passport.use(new JwtStrategy(opts, function(req, jwt_payload, done) {
  console.log(jwt_payload);
  done(null, jwt_payload);
}));
var port = 9000;

app.get('/', passport.authenticate('jwt', { session: false }), function(req, res) {
  res.send(req.user || "No Data");
});
//Register the login service
var login = require('./controller/login')(app, passport);

app.listen(port);
console.log("Server started on port :", port)
console.log("URL  http://localhost:" + port)
