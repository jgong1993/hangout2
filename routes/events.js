//var data = require("../events.json");
var eventTest = require("../eventTest.json"); 
exports.viewEvents = function(req, res){
	res.render('upcomingEvents', eventTest);
};

exports.viewGroupsEvents = function(req, res){

	var groupName = req.params.groupName; 
	var date = "";
	var members = "";
	var group = "";
	var title ="";
	
	var events_array = [];
	var event_detail = {};
	var groupsEvents;

	var len = eventTest.groups2.length;
	var i = 0;
	for( ; i < len; i++) {
		if(eventTest.groups2[i].group == groupName) {
			title   = eventTest.groups2[i].title;
			date    = eventTest.groups2[i].when;
			members = eventTest.groups2[i].whoisgoing;
			group   = eventTest.groups2[i].group;

			event_detail = {
				"title": title, 
				'when': date, 
				'members': members
			}
			events_array.push(event_detail); 
			groupsEvents = {'groupsEvents': events_array};
			console.log(groupsEvents);
		}
		else {
			console.log("Couldn't initialize event fields from json!");
		}
	} 
	res.render('groupsUpcomingEvents', groupsEvents);
};