var data = require("../events.json");

exports.viewEvents = function(req, res){
	//console.log(data);
	res.render('upcomingEvents', data);
};