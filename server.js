
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.text());
app.use(bodyparser.json({ type: "application/vnd.api+json" }));



require("./app/routing/api-routs.js")(app);
require("./app/routing/html-routs.js")(app);

app.listen(PORT, function(){
	console.log("App listening on Port: "+ PORT)
})