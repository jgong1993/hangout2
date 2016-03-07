var eventTest = require("../public/json/eventTest.json");
var groups = require("../public/json/groups.json");

exports.viewThisEvent = function(req, res) {  
	var title = req.params.title;  
	
	var date = "";
	var members = "";
	var group = "";
	
	var forlen2 = '';

	var i;
	var len = eventTest["groups2"].length;
	for(i = 0; i < len; i++) {
		 if(eventTest["groups2"][i].title == title) {
		 	console.log("got heem");
		 	 forlen2 = eventTest["groups2"][i].group;
			 date    = eventTest["groups2"][i].when;
			 //members = eventTest["groups2"][i].whoisgoing;
			 group   = eventTest["groups2"][i].group;
		}
		else {
			console.log("Couldn't initialize event fields from json!");
		}
	}

	var p;
	var len2 = groups["groups"].length;
	var addOn = '';
	for(p = 0; p < len2; p++) {
		 if(groups["groups"][p].name == forlen2) {
			 members = groups["groups"][p].members;
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