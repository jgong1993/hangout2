var groups = require("../public/json/groups.json");
exports.viewGroups = function(req, res){
	//console.log(data);
	res.render('viewGroups', groups);
};