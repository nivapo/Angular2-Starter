module.exports = function(app) {

  var passport = require('passport')

  //Sets the list of all available strategy for sign in.
  var Sequelize = require('sequelize')
  var LocalStrategy = require('passport-local-sequelize');


  //Connection to the database . Properties need to be externalized.
  var mydb = new Sequelize('testapp', 'postgres', 'postgres', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
  });
  //var User = require('../model/userModel-sequelize')(mydb, Sequelize).User;

  var User = mydb.define('User', {
    nick: Sequelize.STRING,
    userName: Sequelize.STRING,
    provider: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    twitter: Sequelize.STRING,
    skype: Sequelize.STRING,
    myhash: Sequelize.STRING,
    mysalt: Sequelize.STRING
  });

  LocalStrategy.attachToUser(User, {
    usernameField: 'nick',
    hashField: 'myhash',
    saltField: 'mysalt'
  });

  mydb.sync()
  // var FacebookStrategy = require('passport-facebook').Strategy;
  // var TwitterStrategy  = require('passport-twitter').Strategy;

  require('../loginStrategy/googleStretegy')(app, passport)

}
