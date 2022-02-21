var express = require('express');
var app = express();
module.exports = app;
console.log("Hello World");
app.get("/",function(req, res) {
   var absolutePath = __dirname;
   console.log("Path " + absolutePath);
   res.sendFile(absolutePath + '/views/index.html');
});