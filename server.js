
var express  = require("./config/express"),
    mongoose = require("./config/mongoose")

var db = mongoose();
var app = express();
var port = process.env.PORT || 8080;



app.listen(port);
console.log("Listening on 0.0.0.0:" + port);

module.exports = app;

// page 72