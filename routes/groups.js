var groups = require("../groups.json");

exports.viewGroups = function(req, res){
	//console.log(data);
	res.render('viewGroups', groups);
};