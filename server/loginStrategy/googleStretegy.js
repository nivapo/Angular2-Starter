/**
 * Created by srinivasan on 17/09/17.
 */

module.exports = function(app, passport) {
  var configAuth = require('../service/authConfig');
  var GoogleStrategy = require('passport-google-oauth20').Strategy;

  passport.use(new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL
  },
    function(accessToken, refreshToken, profile, cb) {

      cb(null, profile);
    }
  ));
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email', 'https://www.googleapis.com/auth/drive']
    }));

  app.get('/auth/google/callback',
    passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/login'
    })
  );
}
