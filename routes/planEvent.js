var data = require("../events.json");

exports.planEventView = function(req, res) {
	res.render('planEvent', data);
}