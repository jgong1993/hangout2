var eventTest = require("../public/json/eventTest.json");
var groupJSON = require("../public/json/groups.json");

exports.addNewEvent = function(req, res) {    
		// var origName = req.query.group;
		 var orig = eventTest.groups2[eventTest.groups2.length-1].id;
		 var neworig = orig.slice(1,orig.length);
		 var newvar = 'e' + (parseInt(neworig) +1);
		 
		 var newWhen = req.query.when;
		 var newStart = newWhen + 'T00:00:00';
		 var newEnd = newWhen + 'T01:00:00';
		 if( newWhen == ''){
		 	newWhen = 'No date, yo';
		 }
		 var going = '';
		 var i;
		 for(i = 0; i < eventTest.groups2.length; i++) {
		 	if(eventTest["groups2"][i].group == req.query.group) {
		 		going = eventTest["groups2"][i].whoisgoing;
		 		break;
		 	}
		 }

		 var gColor = '';
		 var j;
		 for(j = 0; j < groupJSON.groups.length; j++) {
		 	if(groupJSON["groups"][j].name == req.query.group) {
		 		gColor = groupJSON["groups"][j].color;
		 	}
		 }
		 eventTest['groups2'].push({
		 	id: newvar,
		 	title: req.query.title,
		 	group: req.query.group,
		 	when: newWhen,
		 	whoisgoing : going,
		 	start: newStart,
		 	end: newEnd,
		 	imageURL: [],
		 	color: gColor
		 });
		res.render('upcomingEvents', eventTest);
 }
