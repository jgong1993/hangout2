var data = require("../events.json");

exports.viewThisEvent = function(req, res) {  
	var title = req.params.title;  
	// console.log("Event title is " + title);
	var date = "";
	var members = "";
	var group = "";
	
	// console.log("events var is " + data.events[0]);
	var i;
	var len = data.events.length;
	for(i = 0; i < len; i++) {
		// console.log(data.events[i]);
		if(data.events[i].title == title) {
			date    = data.events[i].when;
			members = data.events[i].whoisgoing;
			group   = data.events[i].group;
		}
		else {
			console.log("Couldn't initialize event fields from json!");
		}
	}
	res.render('viewEvent', {
		'eventTitle': title,
		'whoisgoing': members,
		'when': date,
		'group': group
	});
};