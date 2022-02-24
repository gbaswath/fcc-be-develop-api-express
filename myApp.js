var express = require('express');
var app = express();
require('dotenv').config();
module.exports = app;
console.log("Hello World");
var absolutePath = __dirname;
console.log("Path " + absolutePath);
app.use("/public", express.static(absolutePath + "/public"));
app.use(function (req, res, next) {
   console.log(req.method + " " + req.path + " - " + req.ip);
   next();
});
app.get("/", function (req, res) {
   res.sendFile(absolutePath + "/views/index.html");
});
app.get("/json", function (req, res) {
   var lowerCaseData = { "message": "Hello json" };
   var upperCaseData = { "message": "HELLO JSON" };
   var data;
   if (process.env.MESSAGE_STYLE === 'uppercase')
      data = upperCaseData;
   else
      data = lowerCaseData;
   console.log("Data " + JSON.stringify(data));
   res.json(data);
});
app.get("/now", function (req, res, next) {
   req.time = new Date().toString();
   next();
}, function (req, res) {
   var timeData = { "time": req.time };
   console.log("Time Data " + JSON.stringify(timeData));
   res.send(timeData);
});
app.get("/:word/echo", function (req, res) {
   var echoData = req.params.word;
   echoData = { "echo": echoData };
   console.log("Echo Data " + JSON.stringify(echoData));
   res.send(echoData);
});
var queryHandler = function (req, res) {
   console.log("Request URL " + req.originalUrl);
   let firstName = req.query.first;
   let lastName = req.query.last;
   console.log("Got First Name " + firstName);
   console.log("Got Last Name " + lastName);
   let name = firstName + " " + lastName;
   let responseData = { "name": name };
   console.log("Query Data " + JSON.stringify(responseData));
   res.send(responseData);
};
app.route("/name").get(queryHandler).post(queryHandler);