var eventTest = require("../eventTest.json");

exports.viewThisEvent = function(req, res) {  
	var title = req.params.title;  
	
	var date = "";
	var members = "";
	var group = "";
	
	var i;
	var len = eventTest["groups2"].length;
	for(i = 0; i < len; i++) {
		 if(eventTest["groups2"][i].title == title) {
		 	console.log("got heem");
			 date    = eventTest["groups2"][i].when;
			 members = eventTest["groups2"][i].whoisgoing;
			 group   = eventTest["groups2"][i].group;
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