var loginServiceImpl = require('./impl/databaseLogin')
var loginService;

/*
expose a function to log in
*/
loginService.login = function(req,res){
  var username = req.username;
  var password = req.password;
  var validStatus = loginServiceImpl.login(username,password);
  switch (validStatus){
  case '1':
        //Send Token since the login is successful
        break;
  case '2':
        //Send the username and the password does not match
        break;
  case '3':
        //User locked out
        break;
  case '4':
        //User Expired
        break;
  case '5':
        //User does not existing
        break;
  }


/*
expose a function to log in
*/
loginService.logout = function(req,res){
  loginServiceImpl.logout(req,res);
}

module.exports ={
loginService
}
