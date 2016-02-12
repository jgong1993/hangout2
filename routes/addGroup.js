var groups = require("../groups.json");

exports.addNewGroup = function(req, res) {    
	// Your code goes here
	res.render('addGroup',groups);

	var name = req.query.name;
	var description = req.query.description;
	var obj = { "name": name, "description": description }
	console.log("req.query.name: " +req.query.name);
	console.log("req.query.description: " +req.query.description);
	console.log("name: " +name);
	console.log("description: " +description);
	console.log("obj: " +obj);

	groups["groups"].push(obj);
 };