var express = require('express');
var app = express();
require('dotenv').config();
module.exports = app;
console.log("Hello World");
var absolutePath = __dirname;
console.log("Path " + absolutePath);
app.use("/public", express.static(absolutePath + "/public"));
app.get("/", function (req, res) {
   res.sendFile(absolutePath + "/views/index.html");
});
app.get("/json", function (req, res) {
   var lowerCaseData = {"message": "Hello json"};
   var upperCaseData = {"message": "HELLO JSON"};
   var data;
   if(process.env.MESSAGE_STYLE === 'uppercase')
      data = upperCaseData;
   else 
      data = lowerCaseData;
   console.log("Data " + JSON.stringify(data));
   res.json(data);
});