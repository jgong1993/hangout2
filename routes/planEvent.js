// var data = require("../events.json");
// var groups = require("../groups.json");
var eventTest = require("../eventTest.json");
exports.planEventView = function(req, res) {
	res.render('planEvent', eventTest);
}

// exports.planEventView = function(req, res) {
// 	res.render('planEvent', groups);
// }