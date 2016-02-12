var friends = require("../friends.json");

exports.addNewFriend = function(req, res) {    
	// Your code goes here
	res.render('addFriend',friends);

	var name = req.query.name;
	var obj = { "name": name }
	console.log("req.query.name: " +req.query.name);
	console.log("name: " +name);
	console.log("obj: " +obj);

	friends["friends"].push(obj);
 };