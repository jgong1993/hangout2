var data = require("../events.json");

exports.viewEvents = function(req, res){
	//console.log(data);
	res.render('upcomingEvents', data);
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

	var len = data.events.length;
	var i = 0;
	for( ; i < len; i++) {
		if(data.events[i].group == groupName) {
			title   = data.events[i].title;
			date    = data.events[i].when;
			members = data.events[i].whoisgoing;
			group   = data.events[i].group;

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