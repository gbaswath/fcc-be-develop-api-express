var express = require('express');
var app = express();
module.exports = app;
console.log("Hello World");
app.get("/",function(req, res) {
   res.send('Hello Express'); 
});