//var data = require("../events.json");
var eventTest = require("../public/json/eventTest.json"); 
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

			var d1 = new Date(); // Current time
			var d2 = new Date(eventTest.groups2[i].start); // Event time
			console.log("currently: " + d1.getTime() +   "    -- eventime: " + d2.getTime());
			if(d1.getTime() < d2.getTime()){
				events_array.push(event_detail); 
				groupsEvents = {'groupsEvents': events_array};
			}
			//console.log(groupsEvents);
		}
		else {
			console.log("Couldn't initialize event fields from json!");
		}
	} 
	res.render('groupsUpcomingEvents', groupsEvents);
};

exports.viewGroupsPastEvents = function(req, res){

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

			var d1 = new Date(); // Current time
			var d2 = new Date(eventTest.groups2[i].start); // Event time
			if(d1.getTime() > d2.getTime()){
				events_array.push(event_detail); 
				groupsEvents = {'groupsEvents': events_array};
			}
			//console.log(groupsEvents);
		}
		else {
			console.log("Couldn't initialize event fields from json!");
		}
	} 
	res.render('groupsPastEvents', groupsEvents);
};

exports.deleteEvent = function(req,res) {

	var currEvent = req.params.eventTitle;
	var len = eventTest.groups2.length;
	for(var i = 0; i < len; i++) {
		if(typeof eventTest["groups2"][i] === 'undefined') {
			continue;
		}
		else if(eventTest["groups2"][i].title == currEvent) {
			delete eventTest["groups2"][i];
			eventTest["groups2"].splice(i,1);
			break;
		}
	}
	res.render('upcomingEvents', eventTest);
};
