var dbService = require('./utils/dbservice');

/*
1 : Login is successful
2 : Send the username and the password does not match
3 : User locked out
4 : User Expired
5 : User does not existing
*/
var login = function(req, res) {
  dbService.getConnection('mongo')
}

var logout = function() {}

module.exports = {
  login,
  logout
};
