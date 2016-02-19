var data = require("../events.json");
var groups = require("../groups.json");

exports.planEventView = function(req, res) {
	res.render('planEvent', data);
}

exports.planEventView = function(req, res) {
	res.render('planEvent', groups);
}