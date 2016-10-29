var friendData = require("../data/friends.js");

module.exports = function (app){

	app.get("/api/friends", function(req, res){
		res.join(friendData)
	});

	app.post("/api/friends", function(req, res){
		friendData.push(req.body);
		res.json(true);
	})

	app.post("/api/clear", function(){
		friendData = [];

		console.log(friendData);
	});
};