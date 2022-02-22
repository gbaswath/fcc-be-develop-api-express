var express = require('express');
var app = express();
module.exports = app;
console.log("Hello World");
var absolutePath = __dirname;
console.log("Path " + absolutePath);
app.use("/public", express.static(absolutePath + "/public"));
app.get("/",function(req, res) {
   res.sendFile(absolutePath + "/views/index.html");
});