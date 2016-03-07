// var data = require("../events.json");
 var groups = require("../public/json/groups.json");
var eventTest = require("../public/json/eventTest.json");
exports.planEventView = function(req, res) {
	res.render('planEvent', eventTest);
}

exports.planEventView = function(req, res) {
	res.render('planEvent', groups);
}