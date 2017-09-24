var express = require('express');
var app = new express();

app.get('/', function(req, res) {
  res.send("Welcome to blood sugar analysis application")
})


//Start the application
app.listen(3000);
console.log("server has started.")
console.log("use http://localhost:3000")
