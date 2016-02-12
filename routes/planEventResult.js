var data = require("../events.json");
var suggested_events = require("../suggested_events.json");

exports.view = function(req, res) {
	res.render('/planEventResult', suggested_events);
}
exports.addNewEvent = function(req, res) {    
		suggested_events['suggested_events'].push({
			title: req.query.title,
			group: req.query.group,
			when: req.query.when
		});
		res.render('planEventResult', suggested_events);
 }